import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';
import { headers } from 'next/headers';

const resend = new Resend(process.env.RESEND_API_KEY);

// Create a new ratelimiter that allows 5 requests per 24 hours
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '24 h'),
});

export async function POST(request: Request) {
  try {
    // Get IP for rate limiting
    const ip = (await headers()).get('x-forwarded-for') ?? '127.0.0.1';
    const { success, reset } = await ratelimit.limit(ip);
    
    if (!success) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429, headers: { 'X-Reset-At': reset.toString() } }
      );
    }
    const { name, email, subject, message, phone_number } = await request.json();

    // Check honeypot field
    if (phone_number) {
      // If phone_number is filled, it's likely a bot
      return NextResponse.json({ success: true }); // Pretend success but don't send email
    }

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL as string,
      subject: `New Contact Form Submission: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}

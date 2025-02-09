"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Waves } from "@/components/ui/waves-background"

export default function Home() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error' | 'rate-limited'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [typedText, setTypedText] = useState("")
  const fullText = "Hello, I'm Cobe"

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    // Handle smooth scrolling for hash links
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      if (!link) return

      const href = link.getAttribute('href')
      if (!href?.startsWith('/#')) return

      e.preventDefault()
      const sectionId = href.replace('/#', '')
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }

    document.addEventListener('click', handleHashClick)
    return () => document.removeEventListener('click', handleHashClick)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-purple-900 via-blue-900 to-blue-950">
        <Waves className="h-full" />
      </div>
      <div className="container mx-auto px-4 py-8 relative">
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 pixelated">{typedText}</h1>
        <p className="text-xl sm:text-2xl mb-8">Full-stack Developer & Problem Solver</p>
        <Button onClick={() => scrollToSection('contact')} className="hover-effect bg-green-900 text-white hover:bg-green-800">
          Hire Me for Freelance Work
        </Button>
      </section>

      <motion.section
        id="about"
        className="mb-12 bg-green-900/20 backdrop-blur-sm rounded-xl p-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4 pixelated">About Me</h2>
        <p className="mb-4 text-lg">
          Hello! I&apos;m Cobe, a full-stack developer and student at Macaulay Honors College, Brooklyn College. I&apos;m
          pursuing a Baccalaureate for Unique and Interdisciplinary Studies with concentrations in Physics, Engineering,
          and Creative Writing.
        </p>
        <p className="mb-4 text-lg">
          My journey in tech has led me to create exciting projects and gain valuable experience in various roles. I&apos;m
          passionate about building robust web applications and systems very quickly, and I love tackling interesting
          problems and projects.
        </p>
        <p className="text-lg">
          I&apos;m currently available for freelance work and consulting opportunities. If you have an exciting project or
          need expert assistance, I&apos;d love to hear from you!
        </p>
          </div>
          <div className="relative w-full md:w-1/3 aspect-square rounded-lg overflow-hidden">
            <Image
              src="/action.jpeg"
              alt="Action shot of Cobe"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        id="skills"
        className="mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4 pixelated">Skills</h2>
        <ul className="list-disc list-inside grid grid-cols-2 gap-2 text-lg">
          <li>Python</li>
          <li>JavaScript (React, TypeScript)</li>
          <li>Next.js</li>
          <li>C</li>
          <li>SQL</li>
          <li>Solidity</li>
          <li>MATLAB</li>
          <li>AWS</li>
          <li>Firebase</li>
          <li>Vercel</li>
          <li>Machine Learning</li>
          <li>Data Analysis</li>
        </ul>
      </motion.section>

      <motion.section
        id="projects"
        className="mb-12 bg-green-900/20 backdrop-blur-sm rounded-xl p-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4 pixelated">Projects</h2>
        <div className="grid grid-cols-1 gap-6">
          <ProjectCard
            title="Gifted"
            description="An AI-powered gifting platform that revolutionizes the way people choose and send gifts."
            link="https://gifted.ink"
          />
          <ProjectCard
            title="Peripatos"
            description="A full-stack educational marketplace using Next.js 14, TypeScript, and Firebase. Features include real-time data synchronization, secure authentication, and Stripe Connect payment system."
            link="https://peripatos.network"
          />
        </div>
      </motion.section>

      <motion.section
        id="experience"
        className="mb-12 bg-green-900/20 backdrop-blur-sm rounded-xl p-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4 pixelated">Experience</h2>
        <div className="space-y-4">
          <ExperienceItem
            title="Simulation and Visualization Intern"
            company="Noblis"
            period="January 2025 – Present"
            description="Developed ML driven simulations, built geospatial visualization tools, and collaborated on algorithmic optimization solutions."
          />
          <ExperienceItem
            title="Software Developer, Operations Administrator, Deckhand"
            company="Manhattan By Sail"
            period="June 2022 – August 2024"
            description="Optimized control systems, engineered a dynamic quote generator, and architected full-stack solutions for booking operations."
          />
          <ExperienceItem
            title="Computer Vision Research Assistant"
            company="Rensselaer Polytechnic Institute"
            period="February 2023 – February 2024"
            description="Designed and implemented a nuclei detection kernel and analyzed medical images for cancer research."
          />
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="mb-12 bg-green-900/20 backdrop-blur-sm rounded-xl p-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4 pixelated">Get in Touch</h2>
        <p className="mb-4 text-lg">
          I&apos;m always open to new opportunities and collaborations. If you&apos;re interested in working together on a project
          or need consulting services, please fill out the form below or reach out through my social links.
        </p>
        <form className="space-y-4" onSubmit={async (e) => {
            e.preventDefault();
            setFormStatus('submitting');
            
            const form = e.currentTarget;
            const formData = new FormData(form);
            try {
              const res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify({
                  name: formData.get('name'),
                  email: formData.get('email'),
                  subject: formData.get('subject'),
                  message: formData.get('message'),
                }),
                headers: {
                  'Content-Type': 'application/json',
                },
              });
              
              if (!res.ok) {
                const data = await res.json();
                if (res.status === 429) {
                  setFormStatus('rate-limited');
                  const reset = new Date(Number(res.headers.get('X-Reset-At')));
                  setErrorMessage(`Too many messages. Please try again after ${reset.toLocaleString()}`);
                  return;
                }
                throw new Error(data.error || 'Failed to send message');
              }
              setFormStatus('success');
              form.reset();
            } catch (error) {
              console.error('Form submission error:', error);
              setFormStatus('error');
            }
          }}>
          <Input name="name" type="text" placeholder="Your Name" required className="text-white" />
          <Input name="email" type="email" placeholder="Your Email" required className="text-white" />
          <Input name="subject" type="text" placeholder="Subject" required className="text-white" />
          {/* Honeypot field - hidden from real users but visible to bots */}
          <Input 
            name="phone_number" 
            type="text" 
            className="hidden" 
            tabIndex={-1} 
            autoComplete="off"
            aria-hidden="true"
          />
          <Textarea name="message" placeholder="Your Message" required className="text-white" />
          <Button 
            type="submit" 
            className="bg-green-900 text-white hover:bg-green-800"
            disabled={formStatus === 'submitting'}
          >
            {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
          </Button>
          {formStatus === 'success' && (
            <p className="text-green-500 mt-2">Message sent successfully!</p>
          )}
          {(formStatus === 'error' || formStatus === 'rate-limited') && (
            <p className="text-red-500 mt-2">{errorMessage || 'Failed to send message. Please try again.'}</p>
          )}
        </form>
      </motion.section>
      </div>
    </main>
  )
}

function ProjectCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <div className="border border-green-900 rounded-lg p-4 hover:bg-teal-800 transition-colors">
      <h3 className="text-2xl font-bold mb-2 pixelated">{title}</h3>
      <p className="mb-4 text-lg">{description}</p>
      <Button asChild variant="outline" className="bg-green-900 text-white hover:bg-green-800">
        <Link href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </Link>
      </Button>
    </div>
  )
}

function ExperienceItem({
  title,
  company,
  period,
  description,
}: { title: string; company: string; period: string; description: string }) {
  return (
    <div className="border-l-4 border-green-900 pl-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-green-500">{company}</p>
      <p className="text-sm text-gray-400">{period}</p>
      <p className="mt-2 text-lg">{description}</p>
    </div>
  )
}


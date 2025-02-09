import "./globals.css"
import { Inter } from "next/font/google"
import Header from "../components/header"
import Footer from "../components/footer"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "cobe.dev",
  description: "Full-stack developer and problem solver",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.className} text-white min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-grow relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}

import "./globals.css"
import { Inter, Press_Start_2P } from "next/font/google"
import Header from "../components/header"
import Footer from "../components/footer"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })
const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
})

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
    <html lang="en" className={pressStart2P.variable}>
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

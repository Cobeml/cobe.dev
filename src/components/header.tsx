"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <Link href="/" className="text-2xl font-bold pixelated hover:text-teal-400 transition-colors">
        cobe.dev
      </Link>
      
      {/* Mobile menu button */}
      <button 
        type="button"
        className="md:hidden z-50 p-2 hover:bg-white/10 rounded-lg transition-colors" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      <div 
        className={`
          fixed inset-0 md:hidden
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          onKeyDown={(e) => {
            if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
              setIsMenuOpen(false)
            }
          }}
          className="absolute inset-0 w-full h-full border-none bg-transparent cursor-pointer"
          aria-label="Close menu"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" />
        </button>
        
        {/* Menu content */}
        <dialog 
          className={`
            absolute right-4 top-20 w-48 p-6
            bg-black/90 backdrop-blur-md rounded-xl
            border border-white/10
            transform transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}
          `}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
          aria-modal="true"
          open={isMenuOpen}
        >
          <nav className="text-center">
            <ul className="space-y-6">
              <li>
                <Link 
                  href="/#about" 
                  className="block py-2 text-xl text-white hover:text-teal-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/#projects" 
                  className="block py-2 text-xl text-white hover:text-teal-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/#contact" 
                  className="block py-2 text-xl text-white hover:text-teal-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </dialog>
      </div>

      {/* Desktop menu */}
      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          <li>
            <Link href="/#about" className="hover:text-teal-400 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/#projects" className="hover:text-teal-400 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="hover:text-teal-400 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-50">
      <Link href="/" className="text-2xl font-bold pixelated hover:text-teal-400 transition-colors">
        cobe.dev
      </Link>
      <nav>
        <ul className="flex space-x-4">
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


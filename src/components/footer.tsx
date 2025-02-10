import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="p-6 mt-8">
      <div className="flex justify-center items-center space-x-6">
      <a
        href="https://github.com/Cobeml"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-teal-400 transition-colors"
      >
        <Github size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/cobe-liu-436579251/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-teal-400 transition-colors"
      >
        <Linkedin size={24} />
      </a>
      <a
        href="https://x.com/LiuCobe"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-teal-400 transition-colors"
      >
        <Twitter size={24} />
      </a>
      </div>
    </footer>
  )
}


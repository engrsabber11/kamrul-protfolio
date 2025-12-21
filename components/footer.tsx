"use client"

import { Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-primary-foreground py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-70">
          <p>&copy; {currentYear} Md. Kamrul Hassan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

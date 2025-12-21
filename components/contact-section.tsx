"use client"

import { useEffect, useState } from "react"
import { Mail, Phone, Linkedin, Globe, MapPin, User, Shield } from "lucide-react"

export default function ContactSection() {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("contact")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const personalInfo = {
    dob: "June 07, 1990",
    maritalStatus: "Married",
    location: "North Mankidi, Dhaka Cantonment, Dhaka-1206",
  }

  const references = [
    {
      name: "Qazi Moinuddin Mahmud",
      title: "Head of Human Resources, RAK Ceramics Bangladesh Limited",
      contact: "+8801730736044",
      email: "diponbd@gmail.com",
      id: "National ID: 5052294682",
    },
    {
      name: "Mohammad Riyad Hossain",
      title: "Assistant Professor, University of Dhaka",
      contact: "+8801817064228",
      email: "arafat132@yahoo.com",
    },
  ]

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/5 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className={`text-center mb-10 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Stay Connected</h2>
          <div className="w-12 h-1 bg-primary rounded mx-auto mt-4"></div>
          <p className="mt-3 text-muted-foreground">
            Personal details, social links, and references—everything in one place.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div
            className={`bg-background border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
              <div className="space-y-3 min-w-0">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                  <Phone className="w-4 h-4" />
                  Contact
                </div>
                <div className="space-y-3">
                  <a href="tel:+8801736105272" className="block text-lg font-semibold text-foreground">
                    +880 1736-105272
                  </a>
                  <a
                    href="mailto:biplobrevolution06@gmail.com"
                    className="block text-lg font-semibold text-foreground break-words"
                  >
                    biplobrevolution06@gmail.com
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hassanbiplob/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary underline break-words"
                  >
                    <Linkedin className="w-4 h-4" />
                    linkedin.com/in/hassanbiplob
                  </a>
                  <a
                    href="https://kamrul-hassan.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary underline break-words"
                  >
                    <Globe className="w-4 h-4" />
                    kamrul-hassan.netlify.app
                  </a>
                </div>
              </div>

              <div className="space-y-3 min-w-0">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                  <User className="w-4 h-4" />
                  Personal
                </div>
                <p className="text-sm text-muted-foreground">Date of Birth: {personalInfo.dob}</p>
                <p className="text-sm text-muted-foreground">Marital Status: {personalInfo.maritalStatus}</p>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`bg-background border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${
              isInView ? "animate-fade-in-up animate-delay-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
              <Shield className="w-4 h-4" />
              References
            </div>
            <div className="mt-4 space-y-4">
              {references.map((ref) => (
                <div key={ref.name} className="rounded-xl border border-border/70 bg-secondary/40 p-4">
                  <p className="text-sm font-semibold text-foreground">{ref.name}</p>
                  <p className="text-xs text-muted-foreground">{ref.title}</p>
                  {ref.id && <p className="text-xs text-muted-foreground mt-1">{ref.id}</p>}
                  <div className="mt-2 space-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3 h-3" />
                      <span>{ref.contact}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3 h-3" />
                      <span>{ref.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

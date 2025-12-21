"use client"

import { useEffect, useState } from "react"
import { Building2, GraduationCap, Mic, Sparkles } from "lucide-react"

export default function SpeakingSection() {
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

    const section = document.getElementById("speaking")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const universitySessions = [
    { name: "University of Dhaka", topic: "Career coaching, leadership, and HR impact" },
    {
      name: "Institute of Business Administration, Jahangirnagar University",
      topic: "Exploring the impact of HR and the exciting future of people-focused leadership",
    },
    {
      name: "Daffodil International University",
      topic: "Mastering resume writing, smart job applications, interview hacks, and mock interviews",
    },
    { name: "University of South Asia", topic: "People + Technology: shaping the future of HR in Bangladesh" },
  ]

  const corporateWorkshops = [
    "Bikroy",
    "Team Group",
    "REDX Logistics Limited",
    "A&I Group",
    "Genetica Industries Limited",
    "Bengal Group",
    "Water Mark",
    "CP Bangladesh",
    "Other corporate and social platforms",
  ]

  return (
    <section
      id="speaking"
      className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#0b1220] to-[#050914] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(99,102,241,0.16)_0,transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.16)_0,transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_110%,rgba(250,204,21,0.08)_0,transparent_42%)]" />

      <div className="relative z-10 mx-auto max-w-6xl space-y-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className={isInView ? "animate-fade-in-up" : "opacity-0"}>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#c7d2fe]">
              <Mic className="h-4 w-4" />
              Public Speaking
            </div>
            <h2 className="mt-3 text-3xl font-serif font-bold leading-tight sm:text-4xl lg:text-5xl">
              500+ Hours of Talks, Workshops, and Career Coaching
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-[#d7def2] sm:text-base">
              Engaging universities, social programs, and organizations with actionable guidance—simplifying HR,
              leadership, and career growth for students, emerging leaders, and executives.
            </p>
          </div>

          <div
            className={`rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-center shadow-xl backdrop-blur ${
              isInView ? "animate-scale-in animate-delay-150" : "opacity-0"
            }`}
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-[#a855f7] to-[#22d3ee] bg-clip-text text-transparent">
              500+
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d7def2]">Hours Delivered</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div
            className={`rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-2 text-[#a5b4fc]">
              <GraduationCap className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-[0.12em]">University Sessions</span>
            </div>
            <div className="mt-4 space-y-4">
              {universitySessions.map((session) => (
                <div key={session.name} className="rounded-2xl border border-white/5 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white">{session.name}</p>
                  <p className="mt-1 text-xs text-[#d7def2] leading-relaxed">{session.topic}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div
              className={`rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur ${
                isInView ? "animate-fade-in-up animate-delay-100" : "opacity-0"
              }`}
            >
              <div className="flex items-center gap-2 text-[#a5b4fc]">
                <Building2 className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-[0.12em]">Corporate & Social Workshops</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {corporateWorkshops.map((org) => (
                  <span
                    key={org}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold text-[#e5e7eb]"
                  >
                    {org}
                  </span>
                ))}
              </div>
            </div>

            <div
              className={`rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-6 shadow-lg backdrop-blur ${
                isInView ? "animate-fade-in-up animate-delay-180" : "opacity-0"
              }`}
            >
              <div className="flex items-center gap-2 text-[#f9e2af]">
                <Sparkles className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-[0.12em]">Engagement Style</span>
              </div>
              <p className="mt-3 text-sm text-[#d7def2] leading-relaxed">
                High-energy delivery, Bangla-first clarity, and actionable playbooks that bridge academia and industry—
                from resume labs and mock interviews to leadership primers and technology-in-HR spotlights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

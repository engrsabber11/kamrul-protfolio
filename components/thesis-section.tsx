"use client"

import { useEffect, useState } from "react"
import { FileText, Lightbulb, Presentation, ScrollText } from "lucide-react"

type ThesisWork = {
  title: string
  organization: string
  focus: string
}

const thesisWorks: ThesisWork[] = [
  {
    title: "An Assessment of Performance Appraisal System of DARAZ - Bangladesh",
    organization: "DARAZ Bangladesh",
    focus: "Evaluated fairness, metric design, and talent outcomes of an e-commerce performance system.",
  },
  {
    title: "An Overview of Training & Development Program of Bengal Group of Industries",
    organization: "Bengal Group of Industries",
    focus: "Mapped learning pathways, delivery formats, and ROI indicators for a diversified conglomerate.",
  },
  {
    title: "Employee Retention of New Vision Group (Pvt.) Ltd.",
    organization: "New Vision Group (Pvt.) Ltd.",
    focus: "Identified retention drivers, stay/leave signals, and quick interventions for critical roles.",
  },
  {
    title: "Twelve Clothing Limited Professional Salesmanship Report",
    organization: "Twelve Clothing Limited",
    focus: "Assessed sales capability-building, frontline behaviors, and customer experience alignment.",
  },
]

export default function ThesisSection() {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true)
      },
      { threshold: 0.2 },
    )

    const section = document.getElementById("thesis")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section
      id="thesis"
      className="relative overflow-hidden bg-gradient-to-br from-[#0d1b2a] via-[#0f2235] to-[#0b1626] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,#1f3c63_0,transparent_30%)] opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,#b790ff33_0,transparent_28%)]" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 top-0 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl space-y-10">
        <div className={`space-y-3 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#c9dcff]">
            <ScrollText className="h-4 w-4" />
            Thesis Portfolio
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
              <FileText className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold leading-tight sm:text-4xl">Research & Applied Studies</h2>
              <p className="mt-2 max-w-3xl text-sm text-[#d6e6ff] sm:text-base">
                Each thesis is framed as a concise case study—highlighting the organization, the question asked, and the
                actionable takeaway for HR decision makers.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div
            className={`rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur ${
              isInView ? "animate-fade-in-up animate-delay-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-2 text-[#f5d0a1]">
              <Lightbulb className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.08em]">Recommended Presentation</span>
            </div>
            <p className="mt-3 text-sm text-[#e5e9f3]">
              Lead with the research question and the organization, then add a one-line insight. This layout mirrors a
              consulting case deck—making it skimmable for recruiters and executives.
            </p>
            <div className="mt-5 space-y-3">
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#15253a]/70 p-4">
                <div className="mt-0.5 h-2.5 w-2.5 rounded-full bg-[#7ce0ff]" />
                <div>
                  <p className="text-sm font-semibold text-white">Context → Question → Answer</p>
                  <p className="text-xs text-[#d6e6ff]">
                    Short cards showing where you worked, what you measured, and the one-liner insight/outcome.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#182a40]/70 p-4">
                <div className="mt-0.5 h-2.5 w-2.5 rounded-full bg-[#f7c08a]" />
                <div>
                  <p className="text-sm font-semibold text-white">Case-study grouping</p>
                  <p className="text-xs text-[#d6e6ff]">
                    Cluster by theme (Performance, Learning, Retention, Sales) so visitors can jump to what matters.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#1b2e46]/70 p-4">
                <div className="mt-0.5 h-2.5 w-2.5 rounded-full bg-[#9b8cff]" />
                <div>
                  <p className="text-sm font-semibold text-white">Proof points</p>
                  <p className="text-xs text-[#d6e6ff]">
                    Add metrics or a downloadable abstract for each item if you want deeper evidence later.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur ${
              isInView ? "animate-fade-in-up animate-delay-200" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-2 text-[#c9dcff]">
              <Presentation className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.08em]">Selected Thesis Papers</span>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {thesisWorks.map((work, idx) => (
                <div
                  key={work.title}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#132238]/80 p-4 shadow transition hover:-translate-y-1 hover:border-primary/60"
                  style={{ animationDelay: `${200 + idx * 80}ms` }}
                >
                  <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-primary/15 blur-2xl" />
                  <div className="relative z-10 space-y-2">
                    <p className="text-sm font-semibold text-white">{work.title}</p>
                    <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold text-[#f5d0a1]">
                      {work.organization}
                    </div>
                    <p className="text-xs text-[#d6e6ff] leading-relaxed">{work.focus}</p>
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

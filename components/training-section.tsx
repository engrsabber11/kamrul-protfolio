"use client"

import { useEffect, useState } from "react"
import { Award, Target, Users } from "lucide-react"

type TrainingItem = {
  title: string
  topics: string
  institute: string
}

const trainings: TrainingItem[] = [
  {
    title: "Career Planning & Future Skills",
    topics: "Future skills and jobs in the 4th industrial revolution",
    institute: "DUEMMS",
  },
  { title: "Bangladesh Labor Act-2006", topics: "Labor Act 2006", institute: "FMCG HR Society" },
  { title: "English Course", topics: "Corporate English Course", institute: "Goori Learning" },
  { title: "MS Office - Basic to Advance", topics: "MS Office (Basic to Advance)", institute: "Logic Prodigy" },
  { title: "Bangladesh Labor Act-2006 (Amendment 2022)", topics: "Labor Act 2006 Amendment 2022", institute: "BSHRM" },
  { title: "Workplace Success", topics: "RX for workplace success", institute: "Team Group" },
  { title: "Office Etiquette", topics: "Office etiquette essentials", institute: "Twelve Clothing Ltd." },
  { title: "Strategic Human Resources", topics: "Strategic HR Planning", institute: "Team Group" },
  { title: "RACI Matrix", topics: "Role clarity via RACI", institute: "Twelve Clothing Ltd." },
  { title: "Seven Habits", topics: "Seven Habits of effective people", institute: "Team Group" },
  { title: "Negotiation Skills", topics: "Negotiation frameworks", institute: "Twelve Clothing Ltd." },
  { title: "Compensation & Benefits", topics: "Training on compensation & benefits", institute: "Smily" },
]

const extraCurricular = [
  "Vice President at Dhaka University Evening MBA Management Society",
  "Associate Member at Bangladesh Society of Human Resources Management",
  "Associate Member at Bangladesh FMCG HR Society",
]

export default function TrainingSection() {
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

    const section = document.getElementById("training")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section
      id="training"
      className="relative overflow-hidden bg-gradient-to-br from-[#1a1328] via-[#211035] to-[#2c0f42] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#3a1d5f_1px,transparent_0)] bg-[size:42px_42px] opacity-25" />
      <div className="pointer-events-none absolute -left-20 top-8 h-72 w-72 rounded-full bg-[#ff9c6f]/18 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-80 w-80 rounded-full bg-[#7c6dff]/16 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-screen-xl">
        <div className={`mb-12 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#f7c08a]">
            <Award className="h-5 w-5" />
            Training Summary
          </div>
          <h2 className="mt-3 text-3xl font-serif font-bold leading-tight sm:text-4xl">Continuous Growth & Learning</h2>
          <p className="mt-3 max-w-3xl text-sm text-[#e6dbff] sm:text-base">
            A blend of strategic HR, compliance, productivity, and personal effectiveness programs—paired with active
            leadership in professional societies.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div
            className={`rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-2 text-[#f7c08a]">
              <Target className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.08em]">Workshops & Courses</span>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {trainings.map((training, idx) => (
                <div
                  key={training.title + training.institute}
                  className="rounded-2xl border border-white/10 bg-[#241534]/80 p-4 shadow transition hover:-translate-y-1 hover:border-[#f7c08a]/60"
                  style={{ animationDelay: `${120 + idx * 60}ms` }}
                >
                  <p className="text-sm font-semibold text-white">{training.title}</p>
                  <p className="mt-2 text-xs text-[#dcd3ff]">{training.topics}</p>
                  <div className="mt-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold text-[#f7e5c8]">
                    {training.institute}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div
              className={`rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur ${
                isInView ? "animate-fade-in-up animate-delay-150" : "opacity-0"
              }`}
            >
              <div className="flex items-center gap-2 text-[#f7c08a]">
                <Users className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-[0.08em]">Extra-Curricular Activities</span>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-[#e6dbff]">
                {extraCurricular.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#f7c08a]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`rounded-3xl border border-white/10 bg-[#241534]/70 p-6 shadow-xl backdrop-blur ${
                isInView ? "animate-fade-in-up animate-delay-220" : "opacity-0"
              }`}
            >
              <p className="text-sm leading-relaxed text-[#e6dbff]">
                Emphasizing lifelong learning—mixing compliance, productivity, strategy, and communication to strengthen
                leadership and team impact across organizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

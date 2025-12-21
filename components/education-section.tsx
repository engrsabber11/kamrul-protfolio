"use client"

import { useEffect, useState } from "react"
import { GraduationCap, BookMarked, Award } from "lucide-react"

const academicDegrees = [
  { degree: "MBA", field: "Human Resources Management", institution: "University of Dhaka", year: "2022" },
  { degree: "MSS", field: "Economics", institution: "National University", year: "2013" },
  { degree: "BSS", field: "Economics", institution: "National University", year: "2012" },
  { degree: "HSC", field: "Science", institution: "Sharoj Int. College", year: "2007" },
  { degree: "SSC", field: "Science", institution: "Kaykartek Nabab Habib Ullah High School", year: "2005" },
]

const professionalDegrees = [
  {
    degree: "PGDHRM",
    field: "Management (Major in HRM)",
    institution: "Bangladesh Institute of Management (BIM)",
    year: "2018",
  },
]

const trainings = [
  "Career Planning & Future Skills (DUEMMS)",
  "Bangladesh Labor Act-2006 (FMCG HR Society)",
  "Corporate English Course (Goori Learning)",
  "MS Office - Basic to Advance (Logic Prodigy)",
  "Strategic Human Resources Planning (Team Group)",
  "Compensation & Benefits Training (Smily)",
]

export default function EducationSection() {
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

    const section = document.getElementById("education")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section
      id="education"
      className="relative overflow-hidden bg-gradient-to-br from-[#0f1f2f] via-[#132c3f] to-[#12354f] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#1c4565_1px,transparent_0)] bg-[size:42px_42px] opacity-25" />
      <div className="pointer-events-none absolute -left-20 top-6 h-72 w-72 rounded-full bg-[#e3a628]/18 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-[#2dd4bf]/16 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-screen-xl">
        <div className={`mb-12 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#f3c674]">
            <GraduationCap className="h-5 w-5" />
            Education & Credentials
          </div>
          <h2 className="mt-3 text-3xl font-serif font-bold leading-tight sm:text-4xl">Academic Foundation</h2>
          <p className="mt-3 max-w-3xl text-sm text-[#dfe9ff] sm:text-base">
            Formal degrees in Human Resources and Economics, complemented by professional certification and continuous
            training to stay current with modern HR practices.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h3
              className={`flex items-center gap-2 text-lg font-semibold text-white ${
                isInView ? "animate-fade-in-up animate-delay-50" : "opacity-0"
              }`}
            >
              <BookMarked className="h-5 w-5 text-[#f3c674]" />
              Academic Credentials
            </h3>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {academicDegrees.map((degree, idx) => (
                <div
                  key={degree.degree + degree.year}
                  className={`rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:border-[#f3c674]/60 ${
                    isInView ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${120 + idx * 80}ms` }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-white">{degree.degree}</p>
                      <p className="text-xs text-[#cfe6ff]">{degree.field}</p>
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-[#f3e8c4]">
                      {degree.year}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-[#d7e4ff]">{degree.institution}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div
              className={`rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur ${
                isInView ? "animate-fade-in-up animate-delay-200" : "opacity-0"
              }`}
            >
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-[#f3c674]">
                <Award className="h-5 w-5" />
                Professional Degree
              </div>
              <div className="mt-4 space-y-4">
                {professionalDegrees.map((deg) => (
                  <div key={deg.degree} className="rounded-2xl border border-white/10 bg-[#10263c]/60 p-4">
                    <p className="text-base font-semibold text-white">{deg.degree}</p>
                    <p className="text-sm text-[#d7e4ff]">{deg.field}</p>
                    <p className="mt-2 text-xs text-[#b8d6ff]">{deg.institution}</p>
                    <div className="mt-3 inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-[#f3e8c4]">
                      {deg.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur ${
                isInView ? "animate-fade-in-up animate-delay-260" : "opacity-0"
              }`}
            >
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-[#f3c674]">
                <Award className="h-5 w-5" />
                Professional Training
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {trainings.map((training, idx) => (
                  <div
                    key={training}
                    className="rounded-2xl border border-white/10 bg-[#0f2946]/60 px-4 py-3 text-xs text-[#dfe9ff]"
                    style={{ animationDelay: `${300 + idx * 60}ms` }}
                  >
                    {training}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

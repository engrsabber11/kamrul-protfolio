"use client"

import { useEffect, useState } from "react"
import { Briefcase, CalendarIcon, Clock } from "lucide-react"

const focusTags = ["Leadership Development", "Team Management", "Performance Coaching", "HR Operations"]

const experiences = [
  {
    title: "Head of Human Resources",
    company: "Bikroy (A concern of Saltside)",
    period: "February 2024 – Present",
    duration: "2.0 yrs",
    bullets: [
      "Develop and implement HR strategies, policies, and programs aligned to business objectives, vision, and values.",
      "Partner with senior management to identify HR priorities and execute plans that support organizational goals.",
      "Develop HR operational financial strategies through requirement estimation, forecasting, and anticipation.",
      "Advise and strategize on the development of effective employment policies across the company.",
      "Lead culture transformation to ensure company values and approach are lived across the organization.",
      "Execute a DEI plan aligned with company values, business strategy, and commitments.",
      "Coach, mentor, and support senior and high-potential colleagues to strengthen growth and retention.",
      "Equip managers with guidance and tools to manage workforce issues effectively.",
      "Design and implement the HR budget and plan.",
    ],
  },
  {
    title: "Head of Human Resources",
    company: "Twelve Clothing Limited (Team Group)",
    period: "March 2022 – February 2024",
    duration: "1.11 yrs",
    bullets: [
      "Lead recruiting, managing, and growing people as the core business resource.",
      "Attract talent through strong internal and external employer branding.",
      "Design and run employee engagement programs and continuously remodel collaborative culture.",
      "Automate HR to improve efficiency and free teams for higher-value decision making.",
      "Turn training into learning stories based on TNA, and redefine development via training, mentorship, job rotation, MT programs, and internships.",
      "Provide timely support to employees through challenging periods and counsel to retain and grow in-house talent.",
      "Design and implement the HR budget and plan; handle special projects for top management.",
      "Support Admin and Compliance teams for cross-functional collaboration and synchronization.",
    ],
  },
  {
    title: "Assistant Manager – Human Resources",
    company: "REDX Logistics Limited",
    period: "April 2021 – March 2022",
    duration: "0.10 yrs",
    bullets: [
      "Manage full employee lifecycle with day-to-day HR across recruitment, onboarding, payroll, operations, and employee experience.",
      "Lead manpower planning and execution, including optimization.",
      "Prepare and manage HR budget and both regular and special reports.",
      "Coordinate with Training Lead for learning programs; handle special projects for top management.",
    ],
  },
  {
    title: "Assistant Manager – Human Resources",
    company: "A&I Group",
    period: "June 2019 – April 2021",
    duration: "1.11 yrs",
    bullets: [
      "Ensure smooth, profitable HR department operations across sites.",
      "Oversee day-to-day HR activities, recruitment, onboarding, and employee experience.",
      "Manage group-wide payroll for head office, factory, and regional offices.",
      "Coordinate execution of yearly HR strategy and related initiatives, systems, and tactics.",
    ],
  },
  {
    title: "Sr Executive – Human Resources",
    company: "Bengal Group of Industries",
    period: "February 2017 – June 2019",
    duration: "2.5 yrs",
    bullets: [
      "Source and recruit qualified personnel to meet business needs.",
      "Develop orientation and induction programs for new hires.",
      "Assist in performance appraisal system, evaluation, and compilation.",
      "Verify employee contact and address information and maintain service book records.",
    ],
  },
  {
    title: "Executive – Human Resources",
    company: "Farhan Textile Limited",
    period: "January 2014 – February 2016",
    duration: "2.02 yrs",
    bullets: [
      "Conduct recruitment and exit interviews with proper documentation.",
      "Maintain and update employee personal files and database.",
      "Prepare interview letters, reports, and appointment letters for new staff.",
    ],
  },
]

export default function ExperienceSection() {
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

    const section = document.getElementById("experience")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-gradient-to-br from-[#0b2038] via-[#0a2a45] to-[#07314a] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#10436b_1px,transparent_0)] bg-[size:46px_46px] opacity-25" />
      <div className="pointer-events-none absolute -left-24 top-4 h-80 w-80 rounded-full bg-[#1b6fe5]/16 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-8 h-72 w-72 rounded-full bg-[#0bd1e0]/14 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-screen-xl">
        <div className={`mb-10 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#4bb0ff]">
            <Briefcase className="h-5 w-5" />
            Experience
          </div>
          <h2 className="mt-3 text-3xl font-serif font-bold leading-tight sm:text-4xl">Leadership Journey</h2>

          <div className="mt-4 flex flex-wrap gap-2">
            {focusTags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((exp, idx) => (
            <div
              key={exp.company}
              className={`rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:border-[#4bb0ff]/60 ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="mb-4 flex flex-col gap-2">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                    <p className="text-sm font-medium text-[#9ed3ff]">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-end text-xs text-[#c8d9ff]">
                    <span className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      {exp.period}
                    </span>
                    <span className="mt-1 flex items-center gap-1 text-[#85c1ff]">
                      <Clock className="h-3.5 w-3.5" />
                      {exp.duration}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 text-sm leading-relaxed text-[#d7e4ff]">
                {exp.bullets.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#4bb0ff]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

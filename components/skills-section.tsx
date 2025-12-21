"use client"

import { useEffect, useState } from "react"
import { Cpu, Mic, Sparkles, Zap } from "lucide-react"

const cocurricular = {
  title: "Co-curricular Activities (News Presenter)",
  summary:
    "Six years of professional presenting across online TV and FM radio; 300+ broadcasts on national, international, and socio-economic topics.",
  details: [
    "Lead presenter for Millennium Online TV and Dhoni 91.2 FM",
    "Skilled in script review, live delivery, newsroom coordination, and editorial standards",
    "Comfortable across diverse media platforms with high-pressure live formats",
  ],
}

const functionalSkills = [
  {
    title: "Leadership Development",
    desc: "Identify and develop future leaders and successors; mentor, coach, and empower teams to build inclusive, resilient, high-performing culture.",
  },
  {
    title: "Employer Branding",
    desc: "Internal and external branding, employee counselling, engagement programs, internal newsletters and circulars, culture remodeling for cross-functional collaboration.",
  },
  {
    title: "Talent Management",
    desc: "Manpower forecasting and planning, benefits survey, HR budgeting, organogram, recruitment SOPs, JD/assessment center/onboarding design, optimized job ads and recruitment process.",
  },
  {
    title: "Employee Benefits",
    desc: "Performance management and development centers; SOPs for salary structure, OT/commission, incentives, leave, car/laptop/conveyance, recruitment, separation, L&D, deduction; HR manual updates.",
  },
  {
    title: "Training / L&D",
    desc: "TNA, custom training calendar, frameworks and day plans, module design, facilitation, record-keeping, evaluation of effectiveness, continuous development.",
  },
  {
    title: "HR Automation",
    desc: "Led integrated HRIS and modern career site: automated recruitment workflows, digitized employee data, real-time reporting, enhanced employer brand and candidate experience.",
  },
]

const otherSkills = ["Leadership Development", "Team Management", "Performance Coaching", "HR Operations"]

export default function SkillsSection() {
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

    const section = document.getElementById("skills")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-br from-[#0a223f] via-[#0c2f55] to-[#0e3a63] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#12426d_1px,transparent_0)] bg-[size:44px_44px] opacity-25" />
      <div className="pointer-events-none absolute -left-16 top-10 h-72 w-72 rounded-full bg-[#0bd1e0]/18 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-8 h-64 w-64 rounded-full bg-[#1b6fe5]/16 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-screen-xl">
        <div className={`mb-12 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#6cd1ff]">
            <Zap className="h-5 w-5" />
            Skills & Capabilities
          </div>
          <h2 className="mt-3 text-3xl font-serif font-bold leading-tight sm:text-4xl">Expertise Snapshot</h2>
          <p className="mt-3 max-w-3xl text-sm text-[#cfe6ff] sm:text-base">
            Modern HR leadership backed by media presentation experience—blending people strategy, operational rigor,
            and polished communication.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div
            className={`lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-3 text-[#8fd6ff]">
              <Mic className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.08em]">{cocurricular.title}</span>
            </div>
            <h3 className="mt-2 text-xl font-semibold text-white">Communications & Media</h3>
            <p className="mt-2 text-sm text-[#d7e4ff]">{cocurricular.summary}</p>
            <ul className="mt-4 grid gap-3 text-sm text-[#cfe6ff] sm:grid-cols-2">
              {cocurricular.details.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#6cd1ff]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur ${
              isInView ? "animate-fade-in-up animate-delay-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-3 text-[#8fd6ff]">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.08em]">Other Major Skills</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {otherSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-[#e2f0ff]"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-[#0f294c] px-4 py-3 text-xs text-[#cfe6ff]">
              Leadership-first mindset with operational depth—able to build teams, coach performance, and run HR with precision.
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {functionalSkills.map((item, idx) => (
            <div
              key={item.title}
              className={`rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:border-[#6cd1ff]/60 ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${150 + idx * 70}ms` }}
            >
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                <Cpu className="h-4 w-4 text-[#6cd1ff]" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#d7e4ff]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

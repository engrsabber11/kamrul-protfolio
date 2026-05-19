"use client";

import { useEffect, useState } from "react";

const highlights = [
  { value: "11+ years", label: "Strategic HR leadership" },
  { value: "500+ hours", label: "Speaking, training & coaching" },
  { value: "2", label: "International journal publications" },
];

const focusAreas = [
  "Leadership Development",
  "Organizational Transformation",
  "HR Digital Innovation",
  "Talent Management Strategy",
  "Employee Engagement",
  "People Analytics & HRIS",
];

const journals = [
  {
    title:
      "Artificial Intelligence and Cloud-Based Tools in HRM: Transforming Practices in the Digital Era",
    source: "International Journal of Research in Academic World",
  },
  {
    title:
      "The Role of HRIS and People Analytics in Transforming Workforce Management",
    source: "International Journal of Research Publication & Reviews",
  },
];

export default function AboutSection() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0a1a34] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0f2c55] via-[#0b1f40] to-[#09162f]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#123566_1px,transparent_0)] bg-[size:42px_42px] opacity-30" />
      <div className="pointer-events-none absolute -left-16 top-10 h-64 w-64 rounded-full bg-[#1b6fe5]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[#0ea5e9]/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div
          className={`mb-12 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#4bb0ff]">
            <span className="h-px w-10 bg-[#4bb0ff]" />
            About Me
          </div>
          <h2 className="mt-4 text-3xl font-serif font-bold leading-tight sm:text-4xl">
            My Story & Purpose
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div
            className={`${
              isInView ? "animate-slide-in-left animate-delay-100" : "opacity-0"
            }`}
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
              <div className="mb-6 flex flex-wrap gap-3 text-sm font-semibold text-[#9ed3ff]">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1">
                  Head of HR
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1">
                  Lecturer & Mentor
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1">
                  People & Culture Leader
                </span>
              </div>

              <div className="space-y-5 text-base leading-relaxed text-[#d7e4ff] sm:text-lg">
                <p>
                  With over 12 years+ of dedicated experience in Human Resources,
                  I have developed strong strategic and operational expertise in
                  talent management, organizational development, and employee
                  engagement. As Head of HR, I have successfully led initiatives
                  in leadership development, change management, and HR digital
                  transformation.
                </p>
                <p>
                  Passionate about knowledge-sharing and mentorship, I have
                  published international journals on AI and People Analytics
                  and delivered more than 500 hours of public speaking as a
                  trainer and career coach.
                </p>
                <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base italic text-[#bcd4ff] sm:text-lg">
                  My goal as a lecturer is to bring practical industry insights
                  into the classroom—bridging academic learning with real-world
                  HR practices—while inspiring the next generation of HR
                  professionals to lead with resilience and innovation.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div
              className={`${
                isInView ? "animate-fade-in-up animate-delay-150" : "opacity-0"
              }`}
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
                <h3 className="text-lg font-semibold text-white">
                  Career Highlights
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {highlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/5 bg-white/5 p-4"
                    >
                      <div className="text-xl font-bold text-[#4bb0ff] sm:text-2xl">
                        {item.value}
                      </div>
                      <div className="mt-1 text-sm text-[#c8d9ff]">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={`${
                isInView ? "animate-fade-in-up animate-delay-250" : "opacity-0"
              }`}
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
                <h3 className="text-lg font-semibold text-white">
                  International Journals
                </h3>
                <div className="mt-4 space-y-4">
                  {journals.map((journal) => (
                    <div
                      key={journal.title}
                      className="rounded-2xl border border-white/5 bg-white/5 p-4"
                    >
                      <p className="text-sm font-semibold text-[#e2ecff]">
                        {journal.title}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-wide text-[#9bb8e8]">
                        {journal.source}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { GraduationCap, Mic, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  corporateWorkshops,
  stats,
  universitySessions,
} from "./data/speaking-data";

export default function SpeakingSection() {
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

    const section = document.getElementById("speaking");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="speaking"
      className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#0b1220] to-[#050914] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(99,102,241,0.16)_0,transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.16)_0,transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_110%,rgba(250,204,21,0.08)_0,transparent_42%)]" />

      <div className="relative z-10 mx-auto max-w-6xl space-y-14">
        <div
          className={`grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#c7d2fe]">
              <Mic className="h-4 w-4" />
              Public Speaking
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl font-serif font-bold leading-tight sm:text-4xl lg:text-5xl">
                500+ Hours of Talks, Workshops, and Career Coaching
              </h2>
              <p className="max-w-4xl text-sm text-[#d7def2] sm:text-base">
                Engaging universities, social programs, and organizations with
                practical frameworks for HR impact, leadership growth, and
                career acceleration. Sessions blend strategy with hands-on
                coaching to meet students, emerging leaders, and executives
                where they are.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-sm backdrop-blur"
                >
                  <p className="text-xs uppercase tracking-[0.08em] text-[#9fb1e0]">
                    {item.label}
                  </p>
                  <p className="text-xl font-semibold text-white sm:text-2xl">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#c7d2fe]">
                <Sparkles className="h-4 w-4" />
                Signature Formats
              </div>
              <div className="grid gap-3">
                {[
                  "Keynotes on future-ready HR and people leadership",
                  "Career design labs: resumes, interviews, and portfolio readiness",
                  "Leadership bootcamps for managers and student leaders",
                  "Tech + People workshops on automation, AI, and HR analytics",
                ].map((format) => (
                  <div
                    key={format}
                    className="flex items-start gap-3 rounded-2xl bg-white/5 px-4 py-3"
                  >
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <p className="text-sm text-[#e2e8f5]">{format}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.1em] text-[#9fb1e0]">
                  Corporate & Social Platforms
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {corporateWorkshops.map((name) => (
                    <span
                      key={name}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-[#e2e8f5]"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${
            isInView ? "animate-fade-in-up animate-delay-150" : "opacity-0"
          }`}
        >
          {universitySessions.map((speaking, idx) => (
            <div
              key={speaking.name + "-" + idx}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-primary/20"
              style={{ animationDelay: `${180 + idx * 60}ms` }}
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={speaking.image || "/no-image.jpg"}
                  alt={speaking.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>

              <div className="relative space-y-3 p-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-[#c7d2fe]">
                  <GraduationCap className="h-4 w-4" />
                  {speaking.name}
                </div>
                <p className="text-base font-semibold text-white leading-snug">
                  {speaking.topic}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

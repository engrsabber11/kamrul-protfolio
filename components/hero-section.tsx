"use client";

import { BadgeCheck, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "11+", label: "Years in HR leadership" },
  { value: "500+", label: "Hours of speaking" },
  { value: "300+", label: "Media broadcasts" },
];

const highlights = [
  "People & culture strategy",
  "HRIS + people analytics",
  "Career coaching & public speaking",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1024] via-[#0a1835] to-[#06101f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(99,102,241,0.22)_0,transparent_25%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(45,212,191,0.18)_0,transparent_22%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_90%,rgba(252,211,77,0.12)_0,transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-18 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#c7d2fe]">
              <BadgeCheck className="h-4 w-4" />
              Head of HR | HR Strategist | People Leader
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl font-serif font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
                Md. Kamrul <br className="hidden sm:block" />
                Hassan
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-[#d7def2] sm:text-lg">
                Building resilient cultures, modern HR systems, and future-ready
                teams—blending strategy, analytics, and hands-on coaching.
              </p>
            </div>

            {/* <div className="flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold text-[#e5e7eb]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]" />
                  {item}
                </span>
              ))}
            </div> */}

            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#22d3ee] px-6 py-3 font-semibold text-[#04101c] shadow-lg shadow-[#22d3ee]/30 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <Mail className="h-4 w-4" />
                Get in Touch
              </a>

              <a
                href="https://www.linkedin.com/in/hassanbiplob/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>

            <div className="grid max-w-xl grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm shadow-sm"
                >
                  <div className="text-2xl font-bold text-[#38bdf8]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#d7def2]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              <div className="absolute inset-0 rounded-full bg-[#22d3ee]/20 blur-3xl" />
              <div className="relative aspect-square rounded-full border border-white/20 bg-white/5 p-3 shadow-2xl backdrop-blur">
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/10 via-transparent to-white/5" />
                <div className="relative h-full w-full overflow-hidden rounded-full border border-white/15">
                  <Image
                    src="/profile-image.jpg"
                    alt="Md. Kamrul Hassan - HR Professional"
                    fill
                    className="object-cover"
                    priority
                    quality={95}
                  />
                </div>
                <div className="pointer-events-none absolute -left-3 bottom-6 h-10 w-10 rounded-full bg-[#22d3ee]/25 blur" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

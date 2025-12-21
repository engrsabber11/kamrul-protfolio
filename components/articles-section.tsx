"use client";

import { ExternalLink, Newspaper, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Article = {
  title: string;
  outlet: string;
  url: string;
  image?: string;
};

const articles: Article[] = [
  {
    title: "গ্র্যাজুয়েট হয়েও চাকরি মিলছে না? কী করবেন",
    outlet: "Bondhushava",
    url: "https://www.bondhushava.com/career/9hxwgpxc7a",
  },
  {
    title: "চাকরির জন্য কীভাবে রিজিউম লিখবেন? খুঁটিনাটি জানুন",
    outlet: "Bondhushava",
    url: "https://www.bondhushava.com/career/ws8u91cup6",
  },
  {
    title: "এআই টুল দিয়ে কীভাবে রিজিউম আকর্ষণীয় করবেন",
    outlet: "Bondhushava",
    url: "https://www.bondhushava.com/career/wpmwrivww8",
  },
  {
    title: "ইন্টারভিউয়ে কীভাবে নিজেকে প্রস্তুত করবেন",
    outlet: "Bondhushava",
    url: "https://www.bondhushava.com/career/dfg8bf5i9y",
  },
  {
    title: "ইন্টারভিউতে যে জিনিসগুলো খেয়াল রাখবেন",
    outlet: "Bondhushava",
    url: "https://www.bondhushava.com/career/0t0h78n99a",
  },
  {
    title: "ইন্টারভিউ শেষে আপনার করণীয়",
    outlet: "Bondhushava",
    url: "https://www.bondhushava.com/career/qkbpwvfzci",
  },
];

export default function ArticlesSection() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.18 }
    );

    const section = document.getElementById("articles");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="articles"
      className="relative overflow-hidden bg-gradient-to-b from-[#f8f2ff] via-white to-[#eef4ff] px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#e5d4ff_0,transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,#c9e4ff_0,transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-6xl space-y-10">
        <div
          className={`space-y-3 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            <Newspaper className="h-4 w-4" />
            Articles & Op-Eds
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-3xl font-serif font-bold leading-tight text-[#0f172a] sm:text-4xl">
              Writing That Moves People to Act
            </h2>
            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm shadow-primary/10">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                15+ Published Pieces
              </span>
            </div>
          </div>
          <p className="max-w-3xl text-sm text-[#334155] sm:text-base">
            Features in Prothom Alo, Somoy News, Independent Television, Ajker
            Kagoj, and other national platforms— translating complex topics into
            clear, actionable guidance on education, career development, and
            social issues.
          </p>
        </div>

        <div
          className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${
            isInView ? "animate-fade-in-up animate-delay-150" : "opacity-0"
          }`}
        >
          {articles.map((article, idx) => (
            <a
              key={article.url}
              href={article.url}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              style={{ animationDelay: `${180 + idx * 60}ms` }}
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={article.image || "/no-image.jpg"}
                  alt={article.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>

              <div className="relative space-y-3 p-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-[11px] font-semibold text-primary">
                  {article.outlet}
                </div>
                <div className="flex items-start gap-2">
                  <p className="text-base font-semibold text-[#0f172a] leading-snug">
                    {article.title}
                  </p>
                  <ExternalLink className="mt-1 h-4 w-4 text-primary opacity-0 transition group-hover:opacity-100" />
                </div>
                {/* <p className="text-xs text-[#475569]">
                  Career guidance, interview prep, and resume strategy shared in Bangla for maximum reach.
                </p> */}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Speaking", href: "#speaking" },
  { label: "Thesis", href: "#thesis" },
  { label: "Articles", href: "#articles" },
  { label: "Training", href: "#training" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const initialHash = window.location.hash.replace("#", "");
    if (initialHash) setActiveId(initialHash);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.35, rootMargin: "-20% 0px -45% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const linkClasses = (href: string) => {
    const id = href.replace("#", "");
    const isActive = activeId === id;
    return [
      "text-sm transition-colors",
      isActive
        ? "text-foreground font-semibold"
        : "text-muted-foreground hover:text-foreground",
    ].join(" ");
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-border bg-muted">
            <Image
              src="/sm-profile-image.jpg"
              alt="Md. Kamrul Hassan"
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </div>
          <span className="sr-only">Md. Kamrul Hassan</span>
        </Link>

        <div className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={linkClasses(item.href)}
              onClick={() => setActiveId(item.href.replace("#", ""))}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="p-2 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-b border-border bg-background shadow-lg md:hidden">
          <div className="flex flex-col gap-2 p-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`${linkClasses(
                  item.href
                )} rounded-lg px-3 py-2 hover:bg-muted/40`}
                onClick={() => {
                  setActiveId(item.href.replace("#", ""));
                  setIsOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

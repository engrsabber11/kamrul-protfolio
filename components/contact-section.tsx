"use client";

import { Linkedin, Mail, MapPin, Phone, PhoneCall, Shield } from "lucide-react";
import { useEffect, useState } from "react";

export default function ContactSection() {
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

    const section = document.getElementById("contact");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const personalInfo = {
    dob: "June 07, 1990",
    maritalStatus: "Married",
    location: "North Mankidi, Dhaka Cantonment, Dhaka-1206",
  };

  const references = [
    {
      name: "Qazi Moinuddin Mahmud",
      title: "Assistant Professor, University of Dhaka",
      contact: "+8801817064228",
      email: "arafat132@yahoo.com",
    },
    {
      name: "Mohammad Riyad Hossain",
      title: "Head of Human Resources, RAK Ceramics Bangladesh Limited",
      contact: "+8801730736044",
      email: "diponbd@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/5 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-12 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Contact
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
            Let&apos;s plan the next step together
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Direct lines, social links, and trusted references—reach out for
            collaborations, speaking, mentoring, or people strategy.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <div
            className={`relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/15 via-background to-background p-6 shadow-xl sm:p-8 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-primary/12 blur-3xl" />
            <div className="absolute -right-16 bottom-0 h-36 w-36 rounded-full bg-primary/8 blur-3xl" />

            <div className="relative space-y-6 text-center">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-foreground">
                  Contact Kamrul
                </h3>
                <p className="text-sm text-muted-foreground">
                  Quick responses for partnerships, speaking, mentoring, or
                  people strategy discussions.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href="mailto:kamrulhassan.hrprofessional@gmail.com"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-primary/40 bg-primary/10 px-3 py-3 text-[11px] font-semibold text-primary transition hover:bg-primary/15 sm:col-span-2 sm:px-4 sm:text-sm xl:col-span-1"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span className="min-w-0">
                    kamrulhassan.hrprofessional@gmail.com
                  </span>
                </a>
                <a
                  href="tel:+8801736105272"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40"
                >
                  <PhoneCall className="w-4 h-4" />
                  +880 1736-105272
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href="https://www.linkedin.com/in/hassanbiplob/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40"
                >
                  <Linkedin className="w-4 h-4" />
                  linkedin.com/in/hassanbiplob
                </a>
                <div className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-left">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div
              className={`rounded-3xl border border-border bg-background p-8 shadow-sm ${
                isInView ? "animate-fade-in-up animate-delay-100" : "opacity-0"
              }`}
            >
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                <Shield className="w-4 h-4" />
                References
              </div>
              <div className="mt-4 space-y-4">
                {references.map((ref: any) => (
                  <div
                    key={ref.name}
                    className="rounded-2xl border border-border/70 bg-secondary/40 p-4"
                  >
                    <p className="text-sm font-semibold text-foreground">
                      {ref.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{ref.title}</p>
                    {ref.id && (
                      <p className="text-xs text-muted-foreground mt-1">
                        {ref.id}
                      </p>
                    )}
                    <div className="mt-2 space-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3 h-3" />
                        <span>{ref.contact}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-3 h-3" />
                        <span>{ref.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

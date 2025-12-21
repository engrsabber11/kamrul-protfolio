import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Md. Kamrul Hassan - HR Strategist & People Leader",
  description:
    "Explore the professional portfolio of Md. Kamrul Hassan, a Head of HR with 11+ years of experience in talent management, organizational development, and HR digital transformation.",
  generator: "v0.app",
  keywords: "HR, Human Resources, Leadership, Talent Management, Organizational Development",
  openGraph: {
    title: "Md. Kamrul Hassan - HR Strategist & People Leader",
    description: "Head of HR | Strategist | Public Speaker | Researcher",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function BoldDeveloperPortfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Cursor follower */}
      <div
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50 transition-transform duration-100 mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${isLoaded ? 1 : 0})`,
        }}
      />

      {/* Hero Section - Diagonal Split */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Diagonal background split */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black"></div>
          <div
            className="absolute inset-0 bg-white"
            style={{
              clipPath: "polygon(0 0, 60% 0, 40% 100%, 0% 100%)",
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="w-full px-8">
            {/* Left side - Black text on white */}
            <div className="absolute left-8 top-1/2 transform -translate-y-1/2 w-2/5">
              <div className="text-black">
                <h1 className="text-8xl font-black leading-none mb-4 transform -rotate-2">
                  NATE
                </h1>
                <div className="text-2xl font-bold mb-8 transform rotate-1">
                  SOFTWARE ARCHITECT
                </div>
                <div className="w-32 h-1 bg-black mb-8"></div>
                <p className="text-lg font-medium leading-tight">
                  CRAFTING DIGITAL
                  <br />
                  EXPERIENCES THAT
                  <br />
                  BREAK BOUNDARIES
                </p>
              </div>
            </div>

            {/* Right side - White text on black */}
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-2/5 text-right">
              <div className="text-white">
                <h1 className="text-8xl font-black leading-none mb-4 transform rotate-2">
                  DAVIS
                </h1>
                <div className="text-2xl font-bold mb-8 transform -rotate-1">
                  FULL-STACK DEVELOPER
                </div>
                <div className="w-32 h-1 bg-white mb-8 ml-auto"></div>
                <p className="text-lg font-medium leading-tight">
                  CODE IS ART
                  <br />
                  ART IS CODE
                  <br />
                  INNOVATION IS EVERYTHING
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="w-px h-16 bg-white mx-auto mb-4 animate-pulse"></div>
          <div className="text-xs font-bold tracking-widest mix-blend-difference">
            SCROLL
          </div>
        </div>
      </section>

      {/* Experience Section - Brutalist Cards */}
      <section className="py-32 px-8 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-black mb-20 transform -rotate-1">
            EXPERIENCE_
          </h2>

          <div className="space-y-16">
            {[
              {
                year: "2024",
                title: "SOFTWARE ENGINEER INTERN",
                company: "US EMBASSY ADDIS ABABA",
                description:
                  "MANAGED INFRASTRUCTURE FOR 200+ SYSTEMS. DEVELOPED QR INVENTORY MANAGEMENT SYSTEM. BUILT WEB DYNAMIC APPLICATIONS",
                tech: "REACT / FIRESTORE / HTML / QR SCANNING",
              },
              {
                year: "2023",
                title: "FREELANCE WEB DEVELOPER",
                company: "VARIOUS LOCATIONS",
                description:
                  "DELIVERED WEB SOLUTIONS FOR 8+ CLIENTS. INTEGRATED ETHIOPIAN PAYMENT SYSTEMS. BUILT COMPLEX BUSINESS APPLICATIONS WITH REAL-TIME OPTIMIZATION.",
                tech: "NEXT.JS / VITE / WORDPRESS / SUPABASE",
              },
              {
                year: "2019",
                title: "SOFTWARE DEVELOPER",
                company: "DIGITAL AGENCY",
                description:
                  "CLIENT SOLUTIONS. MODERN PRACTICES. AGILE MINDSET.",
                tech: "JAVASCRIPT / PHP / MYSQL / WORDPRESS",
              },
            ].map((job, index) => (
              <div key={index} className="group">
                <div className="border-4 border-black p-8 transform hover:rotate-1 transition-transform duration-300 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-8xl font-black opacity-20 leading-none">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-black mb-2">{job.year}</div>
                      <div className="w-16 h-1 bg-black ml-auto"></div>
                    </div>
                  </div>

                  <h3 className="text-4xl font-black mb-2 group-hover:italic transition-all">
                    {job.title}
                  </h3>
                  <div className="text-xl font-bold mb-4 opacity-70">
                    {job.company}
                  </div>
                  <p className="text-lg font-medium mb-6 leading-tight">
                    {job.description}
                  </p>
                  <div className="text-sm font-black tracking-widest opacity-50">
                    {job.tech}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Grid Chaos */}
      <section className="py-32 px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-black mb-20 text-right transform rotate-1">
            _PROJECTS
          </h2>

          <div className="grid grid-cols-12 gap-4 h-screen">
            {/* Project 1 - Large */}
            <div className="col-span-7 row-span-2 bg-white text-black p-8 flex flex-col justify-between group hover:bg-black hover:text-white transition-all duration-500 border-4 border-white">
              <div>
                <div className="text-xs font-black tracking-widest mb-4 opacity-50">
                  01
                </div>
                <h3 className="text-4xl font-black mb-4 leading-tight">
                  ODERUM
                  <br />
                  AI FRAGRANCE PLATFORM
                </h3>
                <p className="text-lg font-medium mb-6">
                  ML RECOMMENDATION SYSTEM WITH 300+ FRAGRANCES. VECTOR SEARCH
                  ALGORITHMS AND TRAINING PIPELINE THROUGH WEB SCRAPING.
                </p>
              </div>
              <div className="flex justify-between items-end">
                <div className="text-xs font-black tracking-widest opacity-70">
                  NEXT.JS / DRIZZLE / POSTGRESQL / OPENAI / STRIPE
                </div>
                <ExternalLink className="w-6 h-6 group-hover:rotate-45 transition-transform" />
              </div>
            </div>

            {/* Project 2 - Medium */}
            <div className="col-span-5 bg-white text-black p-6 flex flex-col justify-between group hover:bg-black hover:text-white transition-all duration-500 border-4 border-white">
              <div>
                <div className="text-xs font-black tracking-widest mb-4 opacity-50">
                  02
                </div>

                <h3 className="text-2xl font-black mb-4">
                  JAZZIO
                  <br />
                  MEMBERSHIP SYSTEM
                </h3>
                <p className="text-sm font-medium">
                  MEMBERSHIP, VERIFICATION, AND AUDITING PLATFORM FOR US EMBASSY
                  ADDIS ABABA WITH 20,000+ MEMBERS
                </p>
              </div>
              <div className="text-xs font-black tracking-widest opacity-70 mt-4">
                REACT / TAILWIND / FIREBASE
              </div>
            </div>

            {/* Project 3 - Small */}
            <div className="col-span-3 bg-white text-black p-6 flex flex-col justify-between group hover:bg-black hover:text-white transition-all duration-500 border-4 border-white">
              <div>
                <div className="text-xs font-black tracking-widest mb-4 opacity-50">
                  03
                </div>
                <h3 className="text-xl font-black mb-4">
                  SHRINE <br /> CHESS ENGINE
                </h3>
              </div>
              <div className="text-xs font-black tracking-widest opacity-70">
                RUST / BITBOARDS / MINIMAX / ALPHA-BETA PRUNING
              </div>
            </div>

            {/* Project 4 - Wide */}
            <div className="col-span-9 bg-white text-black p-6 flex items-center justify-between group hover:bg-black hover:text-white transition-all duration-500 border-4 border-white">
              <div>
                <div className="text-xs font-black tracking-widest mb-2 opacity-50">
                  04
                </div>
                <h3 className="text-3xl font-black">
                  MIASMA
                  <br />
                  AUTONOMOUS CONTENT
                </h3>
              </div>
              <div className="text-right">
                <div className="text-xs font-black tracking-widest opacity-70 mb-2">
                  PYTHON / MOVIEPY / AI TTS
                </div>
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Typography Chaos */}
      <section className="py-32 px-8 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h2 className="text-6xl font-black mb-16 transform -rotate-2">
                SKILLS_
              </h2>

              <div className="space-y-8">
                <div className="group">
                  <div className="text-4xl font-black mb-2 group-hover:italic transition-all">
                    LANGUAGES
                  </div>
                  <div className="text-lg font-medium opacity-70 leading-tight">
                    TYPESCRIPT • PYTHON • RUST • JAVA
                    <br />
                    SQL • HTML/CSS
                  </div>
                </div>

                <div className="group">
                  <div className="text-4xl font-black mb-2 group-hover:italic transition-all">
                    DATABASES
                  </div>
                  <div className="text-lg font-medium opacity-70 leading-tight">
                    POSTGRESQL • SQLITE • MONGODB • REDIS
                    <br />
                    PINECONE
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-32">
              <div className="space-y-8">
                <div className="group">
                  <div className="text-4xl font-black mb-2 group-hover:italic transition-all">
                    FRAMEWORKS
                  </div>
                  <div className="text-lg font-medium opacity-70 leading-tight">
                    REACT • NEXT.JS • SVELTE • REMIX
                    <br />
                    FASTAPI • TAILWIND • STRIPE • PYTORCH
                  </div>
                </div>

                <div className="group">
                  <div className="text-4xl font-black mb-2 group-hover:italic transition-all">
                    PROVIDERS
                  </div>
                  <div className="text-lg font-medium opacity-70 leading-tight">
                    AWS • GCP • AZURE • VERCEL • NETLIFY
                    <br />
                    FIREBASE • SUPABASE • CLOUDFLARE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Minimal Bold */}
      <section className="py-32 px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-8xl font-black mb-16">LET'S BUILD_</h2>

          <div className="flex justify-center space-x-16 mb-16">
            <Link href="https://github.com/ntedvs" target="_blank">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-xl font-black px-8 py-4 transform hover:rotate-2"
              >
                GITHUB
              </Button>
            </Link>

            <Link href="https://linkedin.com/in/ntedvs" target="_blank">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-xl font-black px-8 py-4 transform hover:-rotate-2"
              >
                LINKEDIN
              </Button>
            </Link>
          </div>

          <div className="text-2xl font-black tracking-widest opacity-50">
            NATE@QSTREET.ORG
          </div>
        </div>
      </section>
    </div>
  )
}

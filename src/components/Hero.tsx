import { ArrowDownRight, Terminal } from "lucide-react"
import { contact, profile } from "../data/content"
import { GithubIcon } from "./Icons"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-32">
      {/* Ambient background glows */}
      <div className="grid-veil pointer-events-none absolute inset-0 opacity-60" />
      <div className="glow-orb absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan/20 blur-3xl" />
      <div className="glow-orb absolute top-40 right-[-4rem] h-72 w-72 rounded-full bg-violet/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5">
        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 text-xs font-medium text-cyan backdrop-blur-md mb-8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
          </span>
          <span>Google Student Ambassador 2026 · VIT Bhopal</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-display max-w-4xl text-4xl leading-[1.08] font-extrabold tracking-tight text-foam sm:text-6xl lg:text-7xl">
          Crafting software, scaling communities &amp; exploring AI.
        </h1>

        {/* Subhead with Name & Role */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="text-xl sm:text-2xl font-bold text-cyan font-display">
            {profile.firstName} {profile.lastName}
          </span>
          <span className="text-mist hidden sm:inline">•</span>
          <span className="text-base sm:text-lg text-mist">
            {profile.degree} at {profile.university}
          </span>
        </div>

        {/* Intro */}
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
          {profile.intro}
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-ink transition hover:bg-cyan/90 hover:shadow-[0_0_28px_color-mix(in_oklab,var(--color-cyan)_45%,transparent)]"
          >
            View Projects
            <ArrowDownRight size={16} aria-hidden="true" />
          </a>
          <a
            href="#terminal"
            className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-6 py-3 text-sm font-semibold text-foam backdrop-blur-sm transition hover:bg-cyan/20 hover:border-cyan/70"
          >
            <Terminal size={16} className="text-cyan" aria-hidden="true" />
            Launch Terminal
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foam backdrop-blur-sm transition hover:border-cyan/50 hover:bg-white/10"
          >
            <GithubIcon size={16} aria-hidden="true" />
            GitHub
          </a>
        </div>

        {/* Notice for placeholder */}
        <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-500/5 px-3 py-1.5 text-xs text-amber-300/80">
          <span className="font-semibold text-amber-400">Notice:</span>
          <span>Social links and contact endpoints are placeholders configured in <code className="font-mono text-cyan/90">src/data/content.ts</code>.</span>
        </div>
      </div>
    </section>
  )
}

import { GraduationCap, Award, Code2, Users } from "lucide-react"
import { about, profile } from "../data/content"
import { SectionHeading } from "./SectionHeading"

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      label: "Education",
      title: profile.degree,
      subtitle: profile.university,
      tag: "Undergraduate",
    },
    {
      icon: Award,
      label: "Ambassadorship",
      title: "Google Student Ambassador 2026",
      subtitle: "VIT Bhopal Campus Representative",
      tag: "Leadership",
    },
    {
      icon: Code2,
      label: "Focus Areas",
      title: "Backend & Applied AI/ML",
      subtitle: "Python, Flask, React, Intelligent Agents",
      tag: "Engineering",
    },
    {
      icon: Users,
      label: "Community",
      title: "Developer Enablement",
      subtitle: "Mentoring, Workshops & Hackathons",
      tag: "Collaboration",
    },
  ]

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20" aria-label="About Me">
      <SectionHeading
        eyebrow="About"
        title="Building software, community, and curiosity"
        description="A look at what drives my engineering practice, my academic journey at VIT Bhopal, and how I collaborate."
      />

      <div className="mx-auto max-w-5xl space-y-8">
        {/* Highlight Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="glass relative rounded-2xl p-5 transition hover:-translate-y-1 hover:border-cyan/40"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-lg bg-cyan/10 p-2 text-cyan">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] uppercase font-semibold text-mist">
                    {item.tag}
                  </span>
                </div>
                <p className="mt-4 text-xs font-medium text-cyan tracking-wider uppercase">
                  {item.label}
                </p>
                <h3 className="mt-1 font-display text-base font-semibold text-foam">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-mist">{item.subtitle}</p>
              </div>
            )
          })}
        </div>

        {/* Story Card */}
        <div className="glass rounded-3xl p-6 sm:p-10 md:grid md:grid-cols-[1fr_1.8fr] md:gap-10 items-center">
          <div>
            <div className="inline-block rounded-full bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan mb-3">
              Developer Profile
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foam">
              {profile.firstName} {profile.lastName}
            </h3>
            <p className="mt-2 text-sm text-mist">{profile.role}</p>

            <div className="mt-6 border-t border-white/10 pt-4 space-y-2 text-xs text-foam/80 font-mono">
              <div className="flex justify-between">
                <span className="text-mist">Institution:</span>
                <span>{profile.university}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-mist">Cohort:</span>
                <span>Class of 2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-mist">Location:</span>
                <span>Bhopal, India</span>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-0 space-y-4 text-base leading-relaxed text-mist">
            {about.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

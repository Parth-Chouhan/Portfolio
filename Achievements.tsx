import { Award, Sparkles, CheckCircle2 } from "lucide-react"
import { achievements } from "../data/content"
import { SectionHeading } from "./SectionHeading"
import { GoogleIcon } from "./Icons"

export function Achievements() {
  const metaDetails = [
    {
      category: "Global Student Program",
      badge: "Google Selected",
      badgeColor: "bg-cyan/10 border-cyan/30 text-cyan",
      points: [
        "Campus evangelist for Google Developer technologies & AI tools",
        "Driving student workshops, hackathons, and tech study groups",
        "Bridging academia with industry engineering practices",
      ],
      customIcon: <GoogleIcon size={24} className="flex-shrink-0" />,
    },
    {
      category: "Competitive Engineering",
      badge: "Hackathon Innovation",
      badgeColor: "bg-violet/10 border-violet/30 text-violet",
      points: [
        "Rapid system architecture and prototyping within 24-48 hour sprints",
        "Engineered HealthBridge AI for accessible healthcare assistance",
        "Effective cross-functional collaboration and shipping under constraints",
      ],
      customIcon: <Sparkles size={24} className="text-violet flex-shrink-0" />,
    },
  ]

  return (
    <section id="achievements" className="mx-auto max-w-6xl px-5 py-20" aria-label="Achievements & Leadership">
      <SectionHeading
        eyebrow="Milestones"
        title="Leadership & competitive building"
        description="Recognition, ambassadorship, and intensive engineering collaborations."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {achievements.map((item, index) => {
          const meta = metaDetails[index] ?? {
            category: "Milestone",
            badge: "Achievement",
            badgeColor: "bg-cyan/10 border-cyan/30 text-cyan",
            points: [],
            customIcon: <Award size={24} className="text-cyan" />,
          }

          return (
            <article
              key={item.title}
              className="glass rounded-3xl p-6 sm:p-8 transition duration-300 hover:border-violet/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] flex flex-col"
            >
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    {meta.customIcon}
                  </div>
                  <div>
                    <span className="text-xs uppercase font-medium tracking-wider text-mist">
                      {meta.category}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-foam mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="inline-flex self-start items-center rounded-full border px-3 py-1 text-xs font-semibold mb-4 gap-1.5"
                   style={{ borderColor: "rgba(255,255,255,0.12)" }}>
                <span className={`h-1.5 w-1.5 rounded-full ${index === 0 ? "bg-cyan" : "bg-violet"}`} />
                <span className={index === 0 ? "text-cyan" : "text-violet"}>{meta.badge}</span>
              </div>

              <p className="text-sm leading-relaxed text-mist">
                {item.detail}
              </p>

              {meta.points.length > 0 && (
                <ul className="mt-5 space-y-2.5 border-t border-white/8 pt-4">
                  {meta.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-foam/85">
                      <CheckCircle2 size={14} className={index === 0 ? "text-cyan mt-0.5 flex-shrink-0" : "text-violet mt-0.5 flex-shrink-0"} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}

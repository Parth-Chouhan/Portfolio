import { Code, Layout, Database, Wrench } from "lucide-react"
import { skillGroups } from "../data/content"
import { SectionHeading } from "./SectionHeading"

const categoryIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Programming: Code,
  "Web Development": Layout,
  Databases: Database,
  Tools: Wrench,
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20" aria-label="Skills & Expertise">
      <SectionHeading
        eyebrow="Skills & Stack"
        title="Tools I actually build with"
        description="Honest proficiencies — real hands-on coursework, active projects, and continuous learning tracks."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => {
          const Icon = categoryIcons[group.title] ?? Code
          return (
            <article
              key={group.title}
              className="glass rounded-3xl p-6 sm:p-8 transition duration-300 hover:border-cyan/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            >
              <div className="flex items-center gap-3 border-b border-white/8 pb-4">
                <span className="rounded-xl border border-cyan/30 bg-cyan/10 p-2.5 text-cyan">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foam">
                    {group.title}
                  </h3>
                  <p className="text-xs text-mist">{group.items.length} Core proficiencies</p>
                </div>
              </div>

              <ul className="mt-5 space-y-3.5">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-col gap-1 border-b border-white/6 pb-3 last:border-b-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan/80" aria-hidden="true" />
                      <span className="font-medium text-foam">{item.name}</span>
                    </div>
                    <span className="text-xs text-mist font-mono pl-3.5 sm:pl-0">{item.note}</span>
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}

import { ExternalLink, FolderGit2 } from "lucide-react"
import { projects } from "../data/content"
import { SectionHeading } from "./SectionHeading"
import { GithubIcon } from "./Icons"

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20" aria-label="Featured Projects">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Software built to solve real problems"
        description="Core portfolio builds spanning backend architectures, client applications, and AI experimentation."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="glass group flex flex-col rounded-3xl p-6 sm:p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <span className="inline-block rounded-full bg-cyan/10 px-2.5 py-0.5 text-[11px] font-mono font-medium text-cyan mb-2">
                  {project.stack[0]}
                </span>
                <h3 className="font-display text-2xl font-bold text-foam group-hover:text-cyan transition-colors">
                  {project.title}
                </h3>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 p-2.5 text-cyan group-hover:border-cyan/40 group-hover:bg-cyan/10 transition">
                <FolderGit2 size={18} aria-hidden="true" />
              </span>
            </div>

            <p className="flex-1 text-sm leading-relaxed text-mist">
              {project.description}
            </p>

            <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies used">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-foam/80"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-white/8 pt-4 flex flex-wrap items-center justify-between gap-3 text-sm min-h-[44px]">
              <div className="flex items-center gap-3">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-foam hover:text-cyan transition"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <GithubIcon size={14} aria-hidden="true" />
                    <span>Code</span>
                    <ExternalLink size={12} className="opacity-70" aria-hidden="true" />
                  </a>
                )}

                {project.repoUrl && project.demoUrl && (
                  <span className="text-white/20">•</span>
                )}

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-foam hover:text-cyan transition"
                    aria-label={`${project.title} live demo`}
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={12} className="opacity-70" aria-hidden="true" />
                  </a>
                )}

                {!project.repoUrl && !project.demoUrl && (
                  <span className="text-xs text-mist/70 font-mono">
                    Hackathon prototype · Details available upon request
                  </span>
                )}
              </div>

              {project.repoUrl && (
                <span className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-mono text-mist/70 border border-white/10">
                  Open Source
                </span>
              )}
              {!project.repoUrl && project.demoUrl && (
                <span className="rounded bg-cyan/10 px-2 py-0.5 text-[10px] font-mono text-cyan/90 border border-cyan/20">
                  Live Demo
                </span>
              )}
              {!project.repoUrl && !project.demoUrl && (
                <span className="rounded bg-violet/10 px-2 py-0.5 text-[10px] font-mono text-violet/90 border border-violet/20">
                  Hackathon Build
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

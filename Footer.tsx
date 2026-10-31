import { ArrowUp } from "lucide-react"
import { profile, contact } from "../data/content"
import { GithubIcon, LinkedinIcon } from "./Icons"

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-white/8 bg-ink/80 py-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-md border border-cyan/40 bg-cyan/10 font-display text-xs font-bold text-cyan">
                {profile.monogram}
              </span>
              <span className="font-display font-semibold text-foam">
                {profile.firstName} {profile.lastName}
              </span>
            </div>
            <p className="text-xs text-mist">
              {profile.degree} · {profile.university} · Google Student Ambassador 2026
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-2 text-mist hover:text-cyan hover:border-cyan/40 transition"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-2 text-mist hover:text-cyan hover:border-cyan/40 transition"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-mist hover:text-foam hover:border-cyan/40 transition"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-8 border-t border-white/6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-mist/60">
          <p>© {CURRENT_YEAR} {profile.firstName} {profile.lastName}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Compatible with AWS Amplify Hosting</span>
            <span>•</span>
            <span className="text-cyan/80">Vite + React 19 + Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

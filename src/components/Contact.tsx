import { useState } from "react"
import { Mail, Copy, Check, AlertCircle, ArrowUpRight } from "lucide-react"
import { contact } from "../data/content"
import { SectionHeading } from "./SectionHeading"
import { GithubIcon, LinkedinIcon } from "./Icons"

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  const channels = [
    {
      label: "GitHub",
      href: contact.github,
      displayVal: "github.com/your-username",
      hint: "Update your GitHub username in src/data/content.ts",
      icon: GithubIcon,
      isPlaceholder: true,
    },
    {
      label: "LinkedIn",
      href: contact.linkedin,
      displayVal: "linkedin.com/in/your-profile",
      hint: "Update your LinkedIn handle in src/data/content.ts",
      icon: LinkedinIcon,
      isPlaceholder: true,
    },
    {
      label: "Email",
      href: `mailto:${contact.email}`,
      displayVal: contact.email,
      hint: "Update your primary email in src/data/content.ts",
      icon: Mail,
      isPlaceholder: true,
    },
  ]

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20" aria-label="Contact">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Let's connect & collaborate"
        description="Whether you're organizing a campus hackathon, exploring developer tools, or discussing an AI/backend project."
      />

      {/* Prominent Placeholder Notice */}
      <div className="mx-auto mb-10 max-w-2xl rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs text-amber-200/90 flex items-start gap-3 backdrop-blur-md">
        <AlertCircle size={18} className="text-amber-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
        <div className="space-y-1">
          <p className="font-semibold text-amber-300">
            ⚠️ Contact Placeholders Notice:
          </p>
          <p className="leading-relaxed">
            All social profiles and email addresses below are currently configured as template placeholders.
            Please update them in <code className="font-mono text-cyan bg-cyan/10 px-1.5 py-0.5 rounded">src/data/content.ts</code> before deploying to production.
          </p>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        {channels.map((channel) => {
          const Icon = channel.icon
          const isEmail = channel.label === "Email"

          return (
            <div
              key={channel.label}
              className="glass group relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition duration-300 hover:border-cyan/50 hover:bg-white/[0.07]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-2xl border border-cyan/25 bg-cyan/10 p-3 text-cyan">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-mono text-amber-300">
                    Placeholder
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold text-foam group-hover:text-cyan transition-colors">
                  {channel.label}
                </h3>
                <p className="mt-2 text-xs font-mono text-mist/90 break-all">
                  {channel.displayVal}
                </p>
                <p className="mt-3 text-[11px] leading-relaxed text-mist/70">
                  {channel.hint}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/8 flex items-center justify-between gap-2">
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-cyan hover:underline"
                  aria-label={`Open ${channel.label} (placeholder)`}
                >
                  <span>{isEmail ? "Send Email" : "Visit Profile"}</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>

                {isEmail && (
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-mono text-foam hover:bg-white/10 transition"
                    title="Copy placeholder email address"
                  >
                    {copied ? <Check size={12} className="text-cyan" /> : <Copy size={12} />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

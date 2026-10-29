import { Menu, X } from "lucide-react"
import { useState } from "react"
import { navLinks, profile } from "../data/content"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-ink/70 backdrop-blur-xl">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-cyan focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="group flex items-center gap-3 rounded-md"
          aria-label={`${profile.firstName} ${profile.lastName} home`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-cyan/40 bg-cyan/10 font-display text-sm font-bold text-cyan transition group-hover:border-cyan/80 group-hover:shadow-[0_0_18px_color-mix(in_oklab,var(--color-cyan)_35%,transparent)]">
            {profile.monogram}
          </span>
          <span className="font-display text-sm font-semibold tracking-wide text-foam sm:text-base">
            {profile.firstName} {profile.lastName}
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-mist transition hover:bg-white/5 hover:text-foam"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-md p-2 text-foam md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </nav>

      {open ? (
        <ul
          id="mobile-nav"
          className="space-y-1 border-t border-white/8 px-5 py-3 md:hidden"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-md px-3 py-2 text-sm text-mist hover:bg-white/5 hover:text-foam"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  )
}

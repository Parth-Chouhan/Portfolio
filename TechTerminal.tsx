import { useState, useRef, useEffect, useCallback, type FormEvent, type KeyboardEvent, type ReactNode } from "react"
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, RotateCcw, Copy, Check } from "lucide-react"
import { profile, projects, contact } from "../data/content"
import { SectionHeading } from "./SectionHeading"

interface HistoryEntry {
  id: string
  command: string
  output: ReactNode
  timestamp: string
}

let entryCounter = 0
function generateEntryId(): string {
  entryCounter += 1
  return `cmd-${entryCounter}`
}

function getCurrentTimestamp(): string {
  const now = new Date()
  const hours = String(now.getHours()).padStart(2, "0")
  const minutes = String(now.getMinutes()).padStart(2, "0")
  return `${hours}:${minutes}`
}

function buildInitialWelcome(): HistoryEntry {
  return {
    id: "welcome-entry",
    command: "welcome",
    timestamp: "10:00",
    output: (
      <div className="space-y-2 text-mist">
        <p className="text-cyan font-semibold">
          ⚡ Welcome to Parth Chouhan&apos;s Tech Superpowers Terminal [v2.6.0]
        </p>
        <p className="text-xs text-foam/80">
          B.Tech Computer Science &amp; Engineering · VIT Bhopal · Google Student Ambassador 2026
        </p>
        <p className="text-xs text-mist/90">
          Type <span className="text-cyan font-mono font-semibold">help</span> or click any shortcut chip below to explore my technical powers and projects.
        </p>
      </div>
    ),
  }
}

export function TechTerminal() {
  const [inputVal, setInputVal] = useState("")
  const [history, setHistory] = useState<HistoryEntry[]>(() => [buildInitialWelcome()])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyPointer, setHistoryPointer] = useState<number>(-1)
  const [copied, setCopied] = useState(false)

  const terminalEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-scroll to bottom on terminal updates
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [history])

  const executeCommand = useCallback((rawCmd: string) => {
    const cmd = rawCmd.trim()
    if (!cmd) return

    setCommandHistory((prev) => [...prev, cmd])
    setHistoryPointer(-1)

    const lowerCmd = cmd.toLowerCase()
    const timestamp = getCurrentTimestamp()
    const entryId = generateEntryId()

    let outputNode: ReactNode

    if (lowerCmd === "clear") {
      setHistory([])
      setInputVal("")
      return
    } else if (lowerCmd === "help") {
      outputNode = (
        <div className="space-y-2 font-mono text-xs">
          <p className="text-cyan font-semibold">Available Superpower Commands:</p>
          <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-x-4 gap-y-1.5 text-foam/90">
            <span className="text-cyan">superpowers</span>
            <span className="text-mist">List engineering superpowers &amp; proficiencies</span>
            <span className="text-cyan">projects</span>
            <span className="text-mist">Deep dive into key projects (Attendance Tracker, HealthBridge AI, etc.)</span>
            <span className="text-cyan">ambassador</span>
            <span className="text-mist">Google Student Ambassador 2026 role &amp; community missions</span>
            <span className="text-cyan">about</span>
            <span className="text-mist">Parth&apos;s background, education &amp; philosophy</span>
            <span className="text-cyan">contact</span>
            <span className="text-mist">Display social links &amp; contact coordinates</span>
            <span className="text-cyan">whoami</span>
            <span className="text-mist">Display current user session information</span>
            <span className="text-cyan">clear</span>
            <span className="text-mist">Wipe the terminal screen</span>
          </div>
        </div>
      )
    } else if (lowerCmd === "superpowers" || lowerCmd === "skills") {
      outputNode = (
        <div className="space-y-3 font-mono text-xs">
          <p className="text-cyan font-semibold">⚡ Technical Superpowers Matrix:</p>
          <div className="space-y-2">
            <div className="rounded-lg border border-white/10 bg-white/5 p-2.5">
              <div className="flex justify-between items-center text-foam font-semibold">
                <span>🐍 Python &amp; Backend Engineering</span>
                <span className="text-cyan text-[11px] font-sans">Primary Strength</span>
              </div>
              <p className="text-mist text-[11px] mt-1">
                Flask web services, RESTful API design, Python scripting, MySQL database schemas, and structured data handling.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-2.5">
              <div className="flex justify-between items-center text-foam font-semibold">
                <span>🌐 Modern Web Development</span>
                <span className="text-cyan text-[11px] font-sans">Active Track</span>
              </div>
              <p className="text-mist text-[11px] mt-1">
                Responsive layouts with HTML5 &amp; CSS3, modern JavaScript (ES6+), React component architecture, Tailwind CSS v4 styling.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-2.5">
              <div className="flex justify-between items-center text-foam font-semibold">
                <span>🧠 AI &amp; Machine Learning Exploration</span>
                <span className="text-violet text-[11px] font-sans">Hackathons &amp; R&amp;D</span>
              </div>
              <p className="text-mist text-[11px] mt-1">
                Prototyping generative AI solutions (HealthBridge AI), LLM API integrations, prompt engineering, and intelligent assistive tooling.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-2.5">
              <div className="flex justify-between items-center text-foam font-semibold">
                <span>⚙️ Systems &amp; Core Foundations</span>
                <span className="text-foam/70 text-[11px] font-sans">VIT Bhopal Coursework</span>
              </div>
              <p className="text-mist text-[11px] mt-1">
                C and C++ programming, data structures, algorithms, operating system concepts, and Git version control workflows.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-2.5">
              <div className="flex justify-between items-center text-foam font-semibold">
                <span>🚀 Community Leadership &amp; Developer Advocacy</span>
                <span className="text-cyan text-[11px] font-sans">Google Ambassador 2026</span>
              </div>
              <p className="text-mist text-[11px] mt-1">
                Public speaking, peer mentorship, organizing technical workshops, and building collaborative developer cohorts on campus.
              </p>
            </div>
          </div>
        </div>
      )
    } else if (lowerCmd === "projects") {
      outputNode = (
        <div className="space-y-3 font-mono text-xs">
          <p className="text-cyan font-semibold">Featured Projects Catalog ({projects.length} Key Builds):</p>
          <div className="grid gap-2">
            {projects.map((proj, idx) => (
              <div key={proj.title} className="rounded-lg border border-white/10 bg-white/5 p-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-foam font-semibold">
                    {idx + 1}. {proj.title}
                  </span>
                  <div className="flex gap-1.5">
                    {proj.stack.map((s) => (
                      <span key={s} className="rounded bg-cyan/10 px-1.5 py-0.5 text-[10px] text-cyan">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-mist text-[11px] mt-1">{proj.description}</p>
                <div className="mt-2 flex flex-wrap gap-3 text-[10px] text-foam/60">
                  {proj.repoUrl ? (
                    <span>
                      Repo:{" "}
                      <a
                        href={proj.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan/80 underline hover:text-cyan"
                      >
                        {proj.repoUrl}
                      </a>
                    </span>
                  ) : (
                    <span className="text-mist/70 italic">Repo: Hackathon build (code upon request)</span>
                  )}
                  {proj.demoUrl && (
                    <span>
                      Demo:{" "}
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan/80 underline hover:text-cyan"
                      >
                        {proj.demoUrl}
                      </a>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    } else if (lowerCmd === "ambassador" || lowerCmd === "gsa") {
      outputNode = (
        <div className="space-y-2 font-mono text-xs">
          <p className="text-cyan font-semibold">🏆 Google Student Ambassador 2026 Initiative:</p>
          <div className="rounded-lg border border-violet/30 bg-violet/5 p-3 text-foam/90 space-y-2">
            <p className="text-xs text-foam leading-relaxed">
              Selected to represent Google on campus at <span className="text-cyan font-semibold">VIT Bhopal</span> for the 2026 cohort.
            </p>
            <ul className="list-disc list-inside space-y-1 text-mist text-[11px]">
              <li>Facilitating student adoption of Google Developer tools &amp; Cloud technologies</li>
              <li>Hosting hands-on workshops covering AI/ML and modern engineering stacks</li>
              <li>Cultivating an active campus developer network and hackathon culture</li>
            </ul>
          </div>
        </div>
      )
    } else if (lowerCmd === "about" || lowerCmd === "bio") {
      outputNode = (
        <div className="space-y-2 font-mono text-xs text-mist">
          <p className="text-foam font-semibold">
            {profile.firstName} {profile.lastName} — {profile.degree}
          </p>
          <p className="text-[11px] leading-relaxed">
            University: <span className="text-cyan">{profile.university}</span>
          </p>
          <p className="text-[11px] leading-relaxed text-foam/80">
            {profile.intro}
          </p>
        </div>
      )
    } else if (lowerCmd === "contact") {
      outputNode = (
        <div className="space-y-2 font-mono text-xs">
          <p className="text-cyan font-semibold">📬 Contact Coordinates:</p>
          <div className="space-y-1.5 text-mist text-[11px]">
            <p>
              • GitHub:{" "}
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foam underline hover:text-cyan"
              >
                {contact.github}
              </a>
            </p>
            <p>
              • LinkedIn:{" "}
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foam underline hover:text-cyan"
              >
                {contact.linkedin}
              </a>
            </p>
            <p>
              • Email:{" "}
              <a
                href={`mailto:${contact.email}`}
                className="text-foam underline hover:text-cyan"
              >
                {contact.email}
              </a>
            </p>
          </div>
        </div>
      )
    } else if (lowerCmd === "whoami") {
      outputNode = (
        <div className="font-mono text-xs text-mist">
          <p className="text-cyan">visitor@parth-portfolio</p>
          <p className="text-[11px] mt-1">
            Permissions: Read-only access to Parth Chouhan&apos;s developer credentials.
          </p>
        </div>
      )
    } else if (lowerCmd === "sudo") {
      outputNode = (
        <div className="font-mono text-xs text-violet font-semibold">
          Permission granted! Just remember: with great super-powers comes great clean code.
        </div>
      )
    } else {
      outputNode = (
        <div className="font-mono text-xs text-red-400">
          command not found: {rawCmd}. Type &quot;help&quot; to see valid commands.
        </div>
      )
    }

    setHistory((prev) => [
      ...prev,
      {
        id: entryId,
        command: rawCmd,
        output: outputNode,
        timestamp,
      },
    ])
    setInputVal("")
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    executeCommand(inputVal)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length === 0) return
      const nextIndex = historyPointer === -1 ? commandHistory.length - 1 : Math.max(0, historyPointer - 1)
      setHistoryPointer(nextIndex)
      setInputVal(commandHistory[nextIndex] ?? "")
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyPointer === -1) return
      const nextIndex = historyPointer + 1
      if (nextIndex >= commandHistory.length) {
        setHistoryPointer(-1)
        setInputVal("")
      } else {
        setHistoryPointer(nextIndex)
        setInputVal(commandHistory[nextIndex] ?? "")
      }
    }
  }

  const copyTerminalOutput = () => {
    const text = history
      .map((h) => (h.id === "welcome-entry" ? "Parth Chouhan Terminal" : `$ ${h.command}`))
      .join("\n")
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shortcutChips = [
    { label: "help", cmd: "help" },
    { label: "superpowers", cmd: "superpowers" },
    { label: "projects", cmd: "projects" },
    { label: "ambassador", cmd: "ambassador" },
    { label: "about", cmd: "about" },
    { label: "contact", cmd: "contact" },
    { label: "clear", cmd: "clear" },
  ]

  return (
    <section id="terminal" className="relative mx-auto max-w-6xl px-5 py-20" aria-label="Interactive Terminal">
      <SectionHeading
        eyebrow="Interactive CLI"
        title="Tech Superpowers Terminal"
        description="Interact directly with Parth's terminal to inspect technical superpowers, project architectures, and campus initiatives."
      />

      {/* Terminal Container */}
      <div className="glass mx-auto max-w-4xl rounded-2xl overflow-hidden border border-white/12 shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
        {/* Window Chrome / Title Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-white/10 bg-black/40 px-4 py-3 backdrop-blur-md gap-2">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" aria-hidden="true" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" aria-hidden="true" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" aria-hidden="true" />
            <span className="ml-2 font-mono text-xs text-mist/90 flex items-center gap-1.5">
              <TerminalIcon size={13} className="text-cyan" />
              parth@vit-bhopal: ~ (tech-superpowers)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={copyTerminalOutput}
              className="inline-flex items-center gap-1 rounded px-2 py-1 text-[11px] font-mono text-mist hover:bg-white/10 hover:text-foam transition"
              title="Copy terminal session"
            >
              {copied ? <Check size={12} className="text-cyan" /> : <Copy size={12} />}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
            <button
              type="button"
              onClick={() => setHistory([])}
              className="inline-flex items-center gap-1 rounded px-2 py-1 text-[11px] font-mono text-mist hover:bg-white/10 hover:text-foam transition"
              title="Reset terminal"
            >
              <RotateCcw size={12} />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Visible Usage Hint Bar */}
        <div className="border-b border-white/8 bg-cyan/5 px-4 py-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-cyan">
              <Sparkles size={12} />
              Usage Hint: Click a command shortcut or type below:
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              {shortcutChips.map((chip) => (
                <button
                  key={chip.label}
                  type="button"
                  onClick={() => executeCommand(chip.cmd)}
                  className="rounded border border-cyan/30 bg-cyan/10 px-2 py-0.5 font-mono text-[11px] text-cyan hover:bg-cyan/25 hover:border-cyan/60 active:scale-95 transition"
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Terminal Screen / Output Body */}
        <div
          className="min-h-[260px] max-h-[460px] overflow-y-auto bg-black/60 p-4 sm:p-5 font-mono text-sm space-y-4"
          onClick={() => inputRef.current?.focus()}
          tabIndex={-1}
          role="log"
          aria-live="polite"
        >
          {history.map((item) => (
            <div key={item.id} className="space-y-1.5">
              {item.id !== "welcome-entry" && (
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-cyan font-semibold">parth@vit-bhopal:~$</span>
                  <span className="text-foam font-medium">{item.command}</span>
                  <span className="ml-auto text-[10px] text-mist/60">{item.timestamp}</span>
                </div>
              )}
              <div className="pl-0 sm:pl-2">{item.output}</div>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Command Input Form */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 border-t border-white/10 bg-black/70 px-4 py-3 font-mono"
        >
          <span className="text-cyan text-xs sm:text-sm font-semibold select-none flex-shrink-0">
            parth@vit-bhopal:~$
          </span>
          <label htmlFor="terminal-input" className="sr-only">
            Terminal command input
          </label>
          <input
            id="terminal-input"
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' or any command..."
            autoComplete="off"
            spellCheck="false"
            className="flex-1 bg-transparent text-xs sm:text-sm text-foam placeholder:text-mist/40 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded bg-cyan/15 px-2.5 py-1 text-xs text-cyan hover:bg-cyan/25 active:scale-95 transition flex items-center gap-1 select-none flex-shrink-0"
            title="Execute command"
          >
            <span>Run</span>
            <CornerDownLeft size={11} aria-hidden />
          </button>
        </form>
      </div>
    </section>
  )
}

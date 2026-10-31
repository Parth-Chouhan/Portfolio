export const profile = {
  firstName: "Parth",
  lastName: "Chouhan",
  monogram: "PC",
  role: "Developer | Community Builder | AI/ML Explorer",
  university: "VIT Bhopal",
  degree: "B.Tech Computer Science and Engineering",
  intro:
    "I am a B.Tech Computer Science and Engineering student at VIT Bhopal. I build practical software, explore AI/ML, and grow developer communities as a Google Student Ambassador 2026.",
}

export const about = {
  paragraphs: [
    "I study Computer Science and Engineering at VIT Bhopal, where I spend most of my time writing code, understanding systems, and turning ideas into working software.",
    "Software development and AI/ML are the two tracks I keep coming back to. I enjoy backend-flavored projects, clean interfaces, and learning how models and data can support real problems.",
    "Community is a core part of how I learn. As a Google Student Ambassador 2026 I help students discover tools, share knowledge, and ship together — because building in public with others is how I grow fastest.",
  ],
}

export const skillGroups = [
  {
    title: "Programming",
    items: [
      { name: "Python", note: "Comfortable — used in coursework and projects" },
      { name: "C", note: "Coursework foundation" },
      { name: "C++", note: "Coursework foundation" },
    ],
  },
  {
    title: "Web Development",
    items: [
      { name: "HTML", note: "Used to structure interfaces" },
      { name: "CSS", note: "Used for layout and visual design" },
      { name: "JavaScript", note: "Used for interactive front-end work" },
      { name: "React", note: "Currently learning" },
    ],
  },
  {
    title: "Databases",
    items: [{ name: "MySQL", note: "Used in Flask-backed projects" }],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", note: "Version control for personal projects" },
      { name: "GitHub", note: "Collaboration and code hosting" },
    ],
  },
] as const

export interface Project {
  title: string
  stack: readonly string[]
  description: string
  repoUrl: string | null
  demoUrl: string | null
}

export const projects: readonly Project[] = [
  {
    title: "Attendance Tracker",
    stack: ["Flask", "MySQL"],
    description:
      "A web app for recording and reviewing attendance with a Flask backend and MySQL storage.",
    repoUrl: "https://github.com/Parth-Chouhan/attendance-tracker",
    demoUrl: null,
  },
  {
    title: "URL Shortener",
    stack: ["Flask", "MySQL"],
    description:
      "A short-link service that maps custom codes to original URLs and stores them in MySQL.",
    repoUrl: "https://github.com/Parth-Chouhan/URL-Shortener",
    demoUrl: null,
  },
  {
    title: "Currency Converter",
    stack: ["JavaScript"],
    description:
      "A browser-based converter for translating amounts between currencies using JavaScript.",
    repoUrl: "https://github.com/Parth-Chouhan/Currency-Converter-JS",
    demoUrl: null,
  },
  {
    title: "HealthBridge AI",
    stack: ["Hackathon", "AI"],
    description:
      "A health-focused hackathon project exploring how AI can support accessible care and information.",
    repoUrl: null,
    demoUrl: null,
  },
]

export const achievements = [
  {
    title: "Google Student Ambassador 2026",
    detail:
      "Selected to represent Google on campus, help students learn Google technologies, and grow the developer community at VIT Bhopal.",
  },
  {
    title: "Hackathon participation",
    detail:
      "Collaborated on time-boxed builds including HealthBridge AI, practicing rapid prototyping, teamwork, and shipping under constraints.",
  },
] as const

export interface ContactInfo {
  github: string
  linkedin: string
  email: string
}

export const contact: ContactInfo = {
  github: "https://github.com/Parth-Chouhan",
  linkedin: "https://www.linkedin.com/in/parth-chouhan-8709ab257/",
  email: "parthchouhann@gmail.com",
}

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#terminal", label: "Terminal" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
] as const

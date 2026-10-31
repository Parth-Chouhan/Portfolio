# Parth Chouhan — Developer Portfolio

A modern, responsive portfolio website showcasing software projects, technical proficiencies, campus leadership, and an interactive terminal CLI.

Developed by **Parth Chouhan**, B.Tech Computer Science and Engineering student at VIT Bhopal and Google Student Ambassador 2026.

---

## Contact & Links

- **GitHub**: [https://github.com/Parth-Chouhan](https://github.com/Parth-Chouhan)
- **LinkedIn**: [https://www.linkedin.com/in/parth-chouhan-8709ab257/](https://www.linkedin.com/in/parth-chouhan-8709ab257/)
- **Email**: [parthchouhann@gmail.com](mailto:parthchouhann@gmail.com)

---

## Tech Stack

- **Framework / UI**: [React 19](https://react.dev/)
- **Bundler & Dev Server**: [Vite 8](https://vitejs.dev/) with `@vitejs/plugin-react`
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Code Quality**: [Oxlint](https://oxc.rs/docs/guide/usage/linter)

---

## Features

- **Interactive Tech Superpowers Terminal**: Built-in interactive CLI with command history navigation (`Up` / `Down` arrows), shortcut chips, session reset, and commands including `superpowers`, `projects`, `ambassador`, `about`, `contact`, `whoami`, and `clear`.
- **Verified Project Catalog**: Balanced project cards displaying genuine repository links and technology badges without broken links or placeholders.
- **Leadership & Achievements**: Dedicated section highlighting the Google Student Ambassador 2026 program at VIT Bhopal and competitive hackathon participation.
- **Modern Glassmorphic Design**: Clean dark interface with ambient glow effects, responsive grid layouts, and mobile-friendly drawer navigation.
- **Single-Source Data Architecture**: All biography details, project metadata, skill matrix items, and contact channels are centrally maintained in `src/data/content.ts`.
- **One-Click Utilities**: Clipboard copy functionality for the primary email address and interactive terminal output.

---

## Featured Projects

| Project | Technologies | Repository / Status | Description |
| :--- | :--- | :--- | :--- |
| **Attendance Tracker** | Flask, MySQL | [GitHub Repo](https://github.com/Parth-Chouhan/attendance-tracker) | A web app for recording and reviewing attendance with a Flask backend and MySQL storage. |
| **URL Shortener** | Flask, MySQL | [GitHub Repo](https://github.com/Parth-Chouhan/URL-Shortener) | A short-link service mapping custom codes to target URLs with persistent MySQL storage. |
| **Currency Converter** | JavaScript | [GitHub Repo](https://github.com/Parth-Chouhan/Currency-Converter-JS) | A browser-based converter translating amounts between world currencies using JavaScript. |
| **HealthBridge AI** | Hackathon, AI | Prototype (Code upon request) | A healthcare hackathon build exploring assistive AI and accessible health information. |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js)

### Clone the Repository

```bash
git clone https://github.com/Parth-Chouhan/Portfolio.git
cd Portfolio
```

### Install Dependencies

```bash
npm install
```

### Available Scripts

- **Start Development Server**:
  ```bash
  npm run dev
  ```
  Launches Vite local dev server with Hot Module Replacement (HMR).

- **Production Build**:
  ```bash
  npm run build
  ```
  Runs TypeScript type checking (`tsc -b`) and bundles optimized production assets into `dist/`.

- **Lint Codebase**:
  ```bash
  npm run lint
  ```
  Runs fast linting checks via Oxlint across project files.

- **Preview Production Build**:
  ```bash
  npm run preview
  ```
  Locally serves the built `dist/` directory to inspect production output.

---

## Deployment

The application compiles to a static single-page application (SPA).

1. Build the production bundle:
   ```bash
   npm run build
   ```
2. The compiled assets are placed in the `dist/` folder.
3. Deploy the `dist/` directory to any static hosting provider:
   - **AWS Amplify Hosting** (Build command: `npm run build`, Output directory: `dist`)
   - **Vercel** / **Netlify** / **GitHub Pages** / **Cloudflare Pages**

> **Note**: This portfolio is structured for client-side static hosting. It is not currently deployed to a live domain; all confirmed source repositories are linked directly.

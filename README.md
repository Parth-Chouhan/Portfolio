# Parth Chouhan | Developer Portfolio

> A personal portfolio showcasing my projects, technical skills, achievements, and journey as a developer.

**Built with React, TypeScript, Vite, and Tailwind CSS.**

## Overview

Hey, I'm **Parth Chouhan**, a Computer Science and Engineering student at VIT Bhopal, Google Student Ambassador 2026, and an aspiring software developer exploring AI/ML.

This portfolio is my personal space on the web to showcase what I'm learning, what I'm building, and how I approach solving problems through technology.

The website combines a clean, modern interface with an interactive terminal that lets visitors explore my technical interests and projects.

## Features

- **Modern UI:** Minimal dark theme, glassmorphism, gradients, and subtle animations.
- **About Me:** My background, interests, and development journey.
- **Technical Skills:** An organized overview of my programming languages, web technologies, databases, and tools.
- **Project Showcase:** Selected development and hackathon projects.
- **Achievements:** Highlights from community engagement and student leadership.
- **Interactive Tech Terminal:** Explore portfolio sections through interactive commands.
- **Contact Links:** Direct links to my professional profiles and contact information.
- **Responsive Design:** Optimized for desktop, tablet, and mobile screens.

## Tech Stack

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| TypeScript | Type-safe application development |
| Vite | Development server and production build |
| Tailwind CSS | Responsive styling and layout |
| Lucide React | Interface icons |

## Featured Projects

### 1. Attendance Tracker
A web application designed to manage and track attendance records.

**Tech:** Python, Flask, MySQL

### 2. URL Shortener
A web application that converts long URLs into shorter, shareable links.

**Tech:** Python, Flask, MySQL

### 3. Currency Converter
A JavaScript-based application for converting currency values.

**Tech:** HTML, CSS, JavaScript

### 4. HealthBridge AI
A health-focused hackathon project exploring how technology and AI can help address healthcare challenges.

**Tech:** Project-specific technologies

*Visit the Projects section of the portfolio for available repository and demo links.*

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (an active LTS version recommended)
- npm
- Git (optional, for version control)

### Installation

**1. Clone the repository**

Replace the URL below with your actual public GitHub repository URL.

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

**2. Navigate to the project directory**

```bash
cd parth-portfolio
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually `http://localhost:5173`.

### Production Build

To generate an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

The production output is generated in the `dist/` directory.

## Interactive Tech Terminal

The portfolio includes an interactive terminal experience that allows visitors to discover information about my work.

Suggested commands include:

- `about` — Learn about me.
- `skills` — Explore my technical skills.
- `projects` — View my projects.

The terminal also provides guidance for interacting with it and handles unsupported commands.

*Available commands depend on the implementation in the current version of the project.*

## Deployment

The project is designed as a frontend application and can be hosted using a compatible static web hosting service.

### AWS Amplify Hosting

The intended deployment target for the AWS Student Builder Challenge is AWS Amplify Hosting.

General deployment workflow:

1. Push the project to a GitHub repository.
2. Sign in to the [AWS Management Console](https://console.aws.amazon.com/).
3. Open AWS Amplify and connect the GitHub repository.
4. Configure the build settings for the existing Vite project.
5. Deploy the application and verify the generated public URL.

Typical Vite build settings:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

**Deployment status:** AWS Amplify deployment is not confirmed by this README. Account permissions and hosting configuration must be verified before deployment.

## Project Structure

```text
parth-portfolio/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── data/           # Portfolio content and project data
│   ├── App.tsx         # Main application component
│   └── ...             # Styles, entry points, and other files
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.ts
```

*The exact files and folders may vary slightly depending on the current implementation.*

## What I'm Exploring

- Software development and problem-solving
- Data structures and algorithms with C++
- Modern frontend development
- AI/ML applications
- Open-source collaboration and community building

## Connect With Me

- **GitHub:** [Parth-Chouhan](https://github.com/Parth-Chouhan)
- **LinkedIn:** (https://www.linkedin.com/in/parth-chouhan-8709ab257/)
- **Email:** parthchouhann@gmail.com

## Acknowledgements

Built as part of my journey toward becoming a better developer and creating useful, meaningful technology.

This portfolio is a work in progress. I'm continuously learning, building, and improving.

---

**Designed and built by Parth Chouhan**  
B.Tech Computer Science and Engineering · VIT Bhopal · Google Student Ambassador 2026

import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Skills } from "./components/Skills"
import { TechTerminal } from "./components/TechTerminal"
import { Projects } from "./components/Projects"
import { Achievements } from "./components/Achievements"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink text-foam selection:bg-cyan/20 selection:text-foam antialiased font-sans">
      <Navbar />
      <Hero />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <About />
        <Skills />
        <TechTerminal />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

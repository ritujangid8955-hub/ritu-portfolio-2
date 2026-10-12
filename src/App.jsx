import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import CaseStudies from './components/CaseStudies'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <CaseStudies />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-navy/10 px-5 py-8 text-center text-sm text-navy/60">
        © {new Date().getFullYear()} Ritu Jangid. Built with React, Vite, Tailwind CSS and Framer Motion.
      </footer>
    </>
  )
}

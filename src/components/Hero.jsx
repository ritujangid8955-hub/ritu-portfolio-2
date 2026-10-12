import { motion, useReducedMotion } from 'framer-motion'
import HeroScene from './HeroScene'
import { profile } from '../data/content'

export default function Hero() {
  const reduce = useReducedMotion()
  const item = (i) =>
    reduce ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] } }

  return (
    <section id="top" className="relative overflow-hidden pt-24 md:pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_85%_20%,rgba(183,177,214,0.35),transparent),radial-gradient(50%_40%_at_0%_90%,rgba(127,151,184,0.25),transparent)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:pb-24">
        <div>
          <motion.p {...item(0)} className="text-sm text-navy/70">
            Seeking Associate Product Manager and Product Manager roles
          </motion.p>
          <motion.h1 {...item(1)} className="mt-4 text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Ritu Jangid
          </motion.h1>
          <motion.p {...item(2)} className="mt-5 max-w-xl font-display text-2xl leading-snug text-navy-soft sm:text-3xl">
            A product designer turned product manager, building AI-powered products people can trust.
          </motion.p>
          <motion.p {...item(3)} className="mt-5 max-w-xl text-base leading-relaxed text-navy/75">
            I take a product from customer need to production-ready, and I bring that maker's sense of what is feasible to every product decision.
          </motion.p>
          <motion.div {...item(4)} className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="btn btn-primary">View case studies</a>
            <a href={profile.resume} download className="btn btn-ghost">Download resume</a>
            <a href="#contact" className="btn btn-ghost">Contact me</a>
          </motion.div>
        </div>
        <HeroScene />
      </div>
    </section>
  )
}

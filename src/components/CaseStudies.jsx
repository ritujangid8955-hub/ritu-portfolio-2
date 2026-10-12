import Reveal from './Reveal'
import TiltCard from './TiltCard'
import { caseStudies } from '../data/content'

export default function CaseStudies() {
  return (
    <section id="work" className="bg-gradient-to-b from-ivory to-lavender-light/40">
      <div className="section">
        <Reveal>
          <h2 className="max-w-2xl text-4xl font-medium leading-tight sm:text-5xl">Selected product case studies</h2>
          <p className="mt-4 max-w-xl text-lg text-navy/75">Three consumer products, each framed around a user problem, a scoped solution and the metrics that would prove it works.</p>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-start">
          {caseStudies.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.08}><TiltCard study={s} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

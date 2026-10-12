import Reveal from './Reveal'
import { about } from '../data/content'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <h2 className="text-4xl font-medium leading-tight sm:text-5xl">From making products to shaping them</h2>
        </Reveal>
        <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-navy/80">
          {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </Reveal>
      </div>
      <ul className="mt-14 grid gap-5 md:grid-cols-3">
        {about.strengths.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 0.08} className="rounded-2xl bg-ivory-deep p-6">
            <h3 className="text-xl font-medium">{s.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-navy/75">{s.body}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}

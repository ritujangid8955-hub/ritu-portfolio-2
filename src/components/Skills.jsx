import Reveal from './Reveal'
import { skillGroups, tools } from '../data/content'

const Chip = ({ children }) => (
  <li className="rounded-full border border-navy/15 bg-white/60 px-3.5 py-1.5 text-sm">{children}</li>
)

export default function Skills() {
  return (
    <section id="skills" className="bg-navy-ink text-ivory">
      <div className="section">
        <Reveal>
          <h2 className="text-4xl font-medium leading-tight sm:text-5xl">Skills and tools</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.07} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-medium">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="rounded-full bg-lavender/20 px-3 py-1 text-sm text-ivory/90">{s}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14">
          <h3 className="text-2xl font-medium">Tools I have used</h3>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {tools.map((t) => (
              <li key={t} className="rounded-full border border-dusty/50 px-4 py-2 text-sm text-ivory/90">{t}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

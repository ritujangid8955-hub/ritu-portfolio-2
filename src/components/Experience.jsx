import Reveal from './Reveal'
import { experience, education } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal>
        <h2 className="text-4xl font-medium leading-tight sm:text-5xl">Professional experience</h2>
      </Reveal>
      <ol className="mt-12 space-y-10 border-l border-navy/20 pl-6 sm:pl-10">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.company} delay={i * 0.06} className="relative">
            <span aria-hidden="true" className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border-2 border-navy bg-ivory sm:-left-[47px]" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-2xl font-medium">{job.company}</h3>
              <p className="text-sm text-navy/60">{job.period}</p>
            </div>
            <p className="mt-1 italic text-navy/70">{job.role}</p>
            <ul className="mt-4 max-w-3xl space-y-2.5 text-[15px] leading-relaxed text-navy/80">
              {job.points.map((p) => (
                <li key={p} className="flex gap-3"><span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-navy/50" />{p}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
      <Reveal className="mt-14 grid gap-4 sm:grid-cols-2">
        {education.map((e) => (
          <div key={e.title} className="rounded-2xl bg-ivory-deep p-5">
            <p className="text-sm text-navy/60">{e.year}</p>
            <h3 className="mt-1 text-xl font-medium">{e.title}</h3>
            <p className="text-navy/75">{e.place}</p>
          </div>
        ))}
      </Reveal>
    </section>
  )
}

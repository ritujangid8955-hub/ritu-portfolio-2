import { useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'

export default function TiltCard({ study }) {
  const reduce = useReducedMotion()
  const [open, setOpen] = useState(false)
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, { stiffness: 150, damping: 18 })
  const sy = useSpring(py, { stiffness: 150, damping: 18 })
  const rotY = useTransform(sx, [-0.5, 0.5], [-6, 6])
  const rotX = useTransform(sy, [-0.5, 0.5], [5, -5])

  const move = (e) => {
    if (reduce || e.pointerType === 'touch') return
    const r = e.currentTarget.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width - 0.5)
    py.set((e.clientY - r.top) / r.height - 0.5)
  }
  const leave = () => { px.set(0); py.set(0) }
  const panelId = `panel-${study.id}`

  return (
    <div style={{ perspective: 1000 }}>
      <motion.article
        onPointerMove={move}
        onPointerLeave={leave}
        style={reduce ? undefined : { rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' }}
        className="flex h-full flex-col rounded-3xl border border-navy/10 bg-white/60 p-6 shadow-soft transition-colors hover:border-navy/25"
      >
        <p className="text-sm text-navy/60">{study.year}</p>
        <h3 className="mt-2 text-2xl font-medium leading-snug" style={reduce ? undefined : { transform: 'translateZ(24px)' }}>
          {study.title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-navy/75">{study.summary}</p>

        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="mt-5 self-start rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-ivory transition-colors hover:bg-navy-soft"
        >
          {open ? 'Hide details' : 'See approach and metrics'}
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              key="panel"
              initial={reduce ? false : { height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-5">
                <h4 className="font-sans text-sm font-semibold">Approach</h4>
                <p className="mt-1 text-[15px] leading-relaxed text-navy/80">{study.approach}</p>
                <h4 className="mt-4 font-sans text-sm font-semibold">Success metrics (proposed)</h4>
                <ul className="mt-2 space-y-1.5 text-[15px] text-navy/80">
                  {study.metrics.map((m) => (
                    <li key={m} className="flex gap-2"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dusty" />{m}</li>
                  ))}
                </ul>
                {study.link ? (
                  <a href={study.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-medium underline underline-offset-4">
                    Read the full case study
                  </a>
                ) : (
                  <p className="mt-4 text-sm text-navy/50">Full write-up link: add your URL in src/data/content.js</p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.article>
    </div>
  )
}

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'

const face = 'absolute inset-0 border border-white/40'
const half = 36 // half of the 72px cube

function Cube({ reduce }) {
  const faces = [
    'rotateY(0deg)', 'rotateY(90deg)', 'rotateY(180deg)', 'rotateY(270deg)', 'rotateX(90deg)', 'rotateX(-90deg)',
  ]
  return (
    <motion.div
      className="relative h-[72px] w-[72px]"
      style={{ transformStyle: 'preserve-3d' }}
      animate={reduce ? { rotateX: 24, rotateY: 32 } : { rotateX: [20, 380], rotateY: [30, 390] }}
      transition={reduce ? { duration: 0 } : { duration: 36, ease: 'linear', repeat: Infinity }}
    >
      {faces.map((t, i) => (
        <div
          key={t}
          className={face}
          style={{
            transform: `${t} translateZ(${half}px)`,
            background: i % 2 ? 'linear-gradient(135deg,#C3D0E2,#7F97B8)' : 'linear-gradient(135deg,#DAD6EC,#B7B1D6)',
            opacity: 0.92,
          }}
        />
      ))}
    </motion.div>
  )
}

export default function HeroScene() {
  const reduce = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 18 })
  const sy = useSpring(my, { stiffness: 60, damping: 18 })

  const rotY = useTransform(sx, [-1, 1], [-9, 9])
  const rotX = useTransform(sy, [-1, 1], [7, -7])
  const farX = useTransform(sx, [-1, 1], [-14, 14])
  const farY = useTransform(sy, [-1, 1], [-10, 10])
  const nearX = useTransform(sx, [-1, 1], [22, -22])
  const nearY = useTransform(sy, [-1, 1], [16, -16])

  const onMove = (e) => {
    if (reduce || e.pointerType === 'touch') return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1)
    my.set(((e.clientY - r.top) / r.height) * 2 - 1)
  }
  const onLeave = () => { mx.set(0); my.set(0) }

  const float = (dist, dur, delay = 0) =>
    reduce ? {} : { animate: { y: [0, -dist, 0] }, transition: { duration: dur, delay, repeat: Infinity, ease: 'easeInOut' } }

  return (
    <div
      className="relative mx-auto aspect-[5/6] w-full max-w-[460px]"
      style={{ perspective: 1200 }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <motion.div
        className="absolute inset-0"
        style={{ rotateX: reduce ? 0 : rotX, rotateY: reduce ? 0 : rotY, transformStyle: 'preserve-3d' }}
      >
        {/* far layer: soft lavender disc */}
        <motion.div className="absolute -right-4 top-2 h-[58%] w-[58%] rounded-full bg-gradient-to-br from-lavender-light to-lavender" style={{ x: farX, y: farY, z: -120 }} aria-hidden="true" />
        {/* mid layer: navy arch */}
        <motion.div className="absolute bottom-0 left-[10%] h-[82%] w-[80%] rounded-t-full bg-gradient-to-b from-navy-soft to-navy-ink shadow-soft" style={{ z: -50 }} aria-hidden="true" />
        {/* portrait */}
        <motion.div className="absolute inset-x-0 bottom-0 flex h-[96%] justify-center" style={{ z: 10 }}><picture className="flex h-full justify-center">
          <source srcSet="/images/ritu.webp" type="image/webp" />
          <img
            src="/images/ritu.png"
            alt="Portrait of Ritu Jangid in a cream jacket and white top"
            width="841"
            height="1870"
            fetchpriority="high"
            decoding="async"
            className="h-full w-auto object-contain drop-shadow-[0_18px_30px_rgba(14,23,48,0.35)]"
          />
        </picture></motion.div>
        {/* near layer: ring, cube, sphere */}
        <motion.div className="absolute bottom-[14%] left-[-2%]" style={{ x: nearX, y: nearY, z: 70 }} aria-hidden="true">
          <motion.div {...float(10, 7)} className="h-24 w-24 rounded-full border-[14px] border-dusty/80" style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.4)' }} />
        </motion.div>
        <motion.div className="absolute left-[2%] top-[8%]" style={{ x: nearX, y: nearY, z: 90 }} aria-hidden="true">
          <motion.div {...float(14, 6, 0.6)}><Cube reduce={reduce} /></motion.div>
        </motion.div>
        <motion.div className="absolute bottom-[30%] right-[0%]" style={{ x: farX, y: farY, z: 110 }} aria-hidden="true">
          <motion.div {...float(12, 8, 1)} className="h-12 w-12 rounded-full" style={{ background: 'radial-gradient(circle at 30% 30%, #DAD6EC, #7F97B8 70%)' }} />
        </motion.div>
      </motion.div>
    </div>
  )
}

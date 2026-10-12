import { useState } from 'react'
import { nav, profile } from '../data/content'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-navy/10 bg-ivory/85 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:rounded focus:bg-navy focus:px-3 focus:py-2 focus:text-ivory">
        Skip to content
      </a>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-display text-lg font-medium" onClick={close}>Ritu Jangid</a>
        <ul className="hidden items-center gap-8 text-sm md:flex">
          {nav.map((n) => (
            <li key={n.id}><a className="text-navy/75 transition-colors hover:text-navy" href={`#${n.id}`}>{n.label}</a></li>
          ))}
          <li><a className="btn btn-primary !py-2" href={profile.resume} download>Download resume</a></li>
        </ul>
        <button
          type="button"
          className="rounded-md p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-navy/10 bg-ivory px-5 pb-5 pt-2 md:hidden">
          {nav.map((n) => (
            <li key={n.id}><a className="block py-3 text-base" href={`#${n.id}`} onClick={close}>{n.label}</a></li>
          ))}
          <li className="pt-2"><a className="btn btn-primary w-full" href={profile.resume} download onClick={close}>Download resume</a></li>
        </ul>
      )}
    </header>
  )
}

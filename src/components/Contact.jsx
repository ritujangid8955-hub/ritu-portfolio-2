import Reveal from './Reveal'
import { profile } from '../data/content'

export default function Contact() {
  const links = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'Phone', value: profile.phone, href: profile.phoneHref },
    profile.linkedin && { label: 'LinkedIn', value: 'Connect with me', href: profile.linkedin, external: true },
    profile.github && { label: 'GitHub', value: 'See my code', href: profile.github, external: true },
  ].filter(Boolean)

  return (
    <section id="contact" className="section">
      <Reveal className="rounded-[2rem] bg-gradient-to-br from-lavender-light via-ivory-deep to-dusty-light/60 p-8 sm:p-14">
        <h2 className="max-w-2xl text-4xl font-medium leading-tight sm:text-5xl">Let's talk about your product</h2>
        <p className="mt-4 max-w-xl text-lg text-navy/75">I am open to Associate Product Manager and Product Manager roles. Based in {profile.location}.</p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="block rounded-2xl bg-white/60 p-5 transition-colors hover:bg-white"
              >
                <span className="block text-sm text-navy/60">{l.label}</span>
                <span className="mt-1 block break-all text-lg font-medium">{l.value}</span>
              </a>
            </li>
          ))}
        </ul>
        <a href={profile.resume} download className="btn btn-primary mt-8">Download resume (PDF)</a>
      </Reveal>
    </section>
  )
}

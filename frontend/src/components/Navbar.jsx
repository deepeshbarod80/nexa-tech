import { useState, useEffect } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Industries', href: '#industries' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <a href="#home" className="navbar-logo" onClick={() => handleNav('#home')}>
            <span className="logo-icon">N</span>
            NexaTech
          </a>

          <div className="navbar-links">
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={(e) => { e.preventDefault(); handleNav(l.href) }}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="nav-cta" onClick={(e) => { e.preventDefault(); handleNav('#contact') }}>
              Get Free Demo
            </a>
          </div>

          <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <a key={l.label} href={l.href} onClick={(e) => { e.preventDefault(); handleNav(l.href) }}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="nav-cta" onClick={(e) => { e.preventDefault(); handleNav('#contact') }}>
          Get Free Demo
        </a>
      </div>
    </>
  )
}

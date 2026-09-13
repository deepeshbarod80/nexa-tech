const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Solutions', href: '#industries' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Us', href: '#contact' },
]

const solutions = [
  'School Management',
  'Hospital Management',
  'Hotel Management',
  'Billing & Invoicing',
  'Manufacturing ERP',
  'Inventory Management',
  'Pharma Management',
]

const company = [
  { label: 'About Us', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Case Studies', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
]

const socials = [
  { label: 'in', title: 'LinkedIn',  href: '#' },
  { label: 'tw', title: 'Twitter',   href: '#' },
  { label: 'fb', title: 'Facebook',  href: '#' },
  { label: 'yt', title: 'YouTube',   href: '#' },
]

export default function Footer() {
  const scrollTo = (href) => {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon">N</span>
              NexaTech Solutions
            </div>
            <p>
              We build custom SaaS software that helps businesses automate operations,
              reduce costs, and grow faster — across 15+ industries all over India.
            </p>
            <div className="social-links">
              {socials.map(s => (
                <a key={s.label} href={s.href} className="social-link" title={s.title}
                   target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} onClick={(e) => { e.preventDefault(); scrollTo(l.href) }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Solutions</h4>
            <ul>
              {solutions.map(s => (
                <li key={s}>
                  <a href="#industries" onClick={(e) => { e.preventDefault(); scrollTo('#industries') }}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              {company.map(c => (
                <li key={c.label}>
                  <a href={c.href}>{c.label}</a>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: 24 }}>
              <h4 style={{ marginBottom: 12 }}>Contact</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontSize: '0.85rem' }}>📞 +91 98765 43210</span>
                <span style={{ fontSize: '0.85rem' }}>✉️ hello@nexatech.in</span>
                <span style={{ fontSize: '0.85rem' }}>📍 Noida, UP — India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>© {new Date().getFullYear()} NexaTech Solutions Pvt. Ltd. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

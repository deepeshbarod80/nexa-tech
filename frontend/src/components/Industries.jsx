import { useEffect, useRef } from 'react'

const industries = [
  {
    icon: '🏫',
    title: 'School Management',
    desc: 'Complete ERP for schools — admissions, attendance, fees, timetable, results, and parent portal.',
    color: 'icon-blue',
  },
  {
    icon: '🏥',
    title: 'Hospital Management',
    desc: 'End-to-end HMS covering OPD, IPD, pharmacy, lab, billing, and doctor scheduling.',
    color: 'icon-green',
  },
  {
    icon: '🏨',
    title: 'Hotel Management',
    desc: 'Smart PMS with room booking, housekeeping, restaurant, front desk, and revenue reports.',
    color: 'icon-orange',
  },
  {
    icon: '🧾',
    title: 'Billing & Invoicing',
    desc: 'GST-compliant billing software with auto-invoice generation, payment tracking, and reports.',
    color: 'icon-purple',
  },
  {
    icon: '🏭',
    title: 'Manufacturing ERP',
    desc: 'Full manufacturing suite — production planning, BOM, MRP, quality control, and dispatch.',
    color: 'icon-red',
  },
  {
    icon: '📦',
    title: 'Inventory Management',
    desc: 'Real-time stock tracking with multi-warehouse support, reorder alerts, and barcode scanning.',
    color: 'icon-teal',
  },
  {
    icon: '💊',
    title: 'Pharma Management',
    desc: 'Pharmacy shop software with drug inventory, expiry alerts, purchase orders, and sales billing.',
    color: 'icon-pink',
  },
  {
    icon: '⚙️',
    title: 'Custom Solutions',
    desc: 'Have a unique requirement? We build fully custom software tailored to your exact workflow.',
    color: 'icon-yellow',
  },
]

export default function Industries() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section industries" id="industries" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">🏢 Industry Solutions</div>
          <h2 className="section-title">
            Software Built for <span>Every Industry</span>
          </h2>
          <p className="section-desc">
            From schools to hospitals, factories to pharmacies — we have deep domain expertise
            and a proven track record delivering software that actually works.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((ind, i) => (
            <div
              key={ind.title}
              className="industry-card reveal"
              style={{ transitionDelay: `${(i % 4) * 0.08}s` }}
            >
              <div className={`industry-icon ${ind.color}`}>{ind.icon}</div>
              <h3 className="industry-title">{ind.title}</h3>
              <p className="industry-desc">{ind.desc}</p>
              <span className="industry-learn">Learn more →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

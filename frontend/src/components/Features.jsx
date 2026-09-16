import { useEffect, useRef } from 'react'

const featureList = [
  {
    icon: '🎯',
    title: 'Fully Custom-Built',
    desc: 'No off-the-shelf templates. Every line of code is written to match your exact business workflow.',
  },
  {
    icon: '☁️',
    title: 'Cloud-Based & Scalable',
    desc: 'Start small, scale big. Our cloud infrastructure grows with your business without extra hassle.',
  },
  {
    icon: '🔒',
    title: 'Bank-Level Security',
    desc: 'End-to-end encryption, role-based access, and regular security audits to keep your data safe.',
  },
  {
    icon: '🔗',
    title: 'Easy Integration',
    desc: 'Connect seamlessly with Tally, Razorpay, WhatsApp, SMS gateways, and 50+ third-party tools.',
  },
  {
    icon: '📱',
    title: 'Mobile-First Design',
    desc: 'Access your software from any device — phone, tablet, or desktop — anywhere, anytime.',
  },
  {
    icon: '🛠️',
    title: '24/7 Dedicated Support',
    desc: 'Our support team is always available via chat, call, or remote access whenever you need help.',
  },
]

const miniCards = [
  { icon: '⚡', title: 'Fast Delivery', desc: 'Go live in as little as 7 days' },
  { icon: '🌐', title: 'Multi-Language', desc: 'Hindi, English, and regional languages' },
  { icon: '📊', title: 'Analytics', desc: 'Real-time dashboards and reports' },
  { icon: '🔄', title: 'Auto Updates', desc: 'Always on the latest version' },
]

export default function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section features" id="features" ref={sectionRef}>
      <div className="container">
        <div className="features-layout">
          <div className="features-text reveal">
            <div className="section-tag">⚡ Why Aaosa International</div>
            <h2 className="section-title">
              Everything You Need to <span>Run Smarter</span>
            </h2>
            <p className="section-desc">
              We don't just build software — we build systems that transform how your
              business operates, saves costs, and stays ahead of the competition.
            </p>

            <div className="features-list">
              {featureList.map(f => (
                <div key={f.title} className="feature-item">
                  <div className="feature-icon-wrap">{f.icon}</div>
                  <div className="feature-item-text">
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="features-visual reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="features-card-stack">
              <div className="feature-showcase-card">
                <div className="fsc-label">Client Satisfaction Score</div>
                <div className="fsc-value">98.6%</div>
                <div className="fsc-desc">Based on post-deployment surveys across 200+ clients</div>
                <div className="fsc-bar-container">
                  {[
                    { label: 'Reliability',  pct: 99 },
                    { label: 'Performance',  pct: 97 },
                    { label: 'Support',      pct: 98 },
                    { label: 'Value',        pct: 96 },
                  ].map(b => (
                    <div key={b.label} className="fsc-bar-row">
                      <span className="fsc-bar-label">{b.label}</span>
                      <div className="fsc-bar-track">
                        <div className="fsc-bar-fill" style={{ width: `${b.pct}%` }} />
                      </div>
                      <span className="fsc-bar-pct">{b.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="feature-mini-cards">
                {miniCards.map(c => (
                  <div key={c.title} className="feature-mini-card">
                    <div className="fmc-icon">{c.icon}</div>
                    <div className="fmc-title">{c.title}</div>
                    <div className="fmc-desc">{c.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

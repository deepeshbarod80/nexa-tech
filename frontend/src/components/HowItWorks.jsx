import { useEffect, useRef } from 'react'

const steps = [
  {
    icon: '🔍',
    number: '01',
    title: 'Discovery Call',
    desc: 'We start by understanding your business, pain points, and requirements through a free consultation session.',
  },
  {
    icon: '🎨',
    number: '02',
    title: 'Solution Design',
    desc: 'Our architects design the perfect software solution with wireframes, tech stack selection, and a project roadmap.',
  },
  {
    icon: '💻',
    number: '03',
    title: 'Agile Development',
    desc: 'We build your software in sprints, sharing weekly demos so you stay in control of every feature and iteration.',
  },
  {
    icon: '🚀',
    number: '04',
    title: 'Launch & Support',
    desc: 'We deploy your software, train your team, and provide ongoing 24/7 support and maintenance.',
  },
]

export default function HowItWorks() {
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
    <section className="section how-it-works" id="how-it-works" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">🗺️ Our Process</div>
          <h2 className="section-title">
            How We <span>Build Your Software</span>
          </h2>
          <p className="section-desc">
            A proven 4-step process that takes you from idea to a live, production-ready
            software system — on time and within budget.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="step-item reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="step-number">
                <span className="step-icon">{step.icon}</span>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

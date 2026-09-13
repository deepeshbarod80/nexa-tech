import { useEffect, useRef } from 'react'

const testimonials = [
  {
    stars: 5,
    text: 'NexaTech completely transformed how we manage our school. Admissions, fees, attendance, and results — everything is now digital and error-free. Our teachers and parents love the system.',
    name: 'Rajesh Kumar',
    role: 'Principal, Sunrise Public School, Jaipur',
    avatar: 'RK',
    avatarBg: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    featured: true,
  },
  {
    stars: 5,
    text: 'Our hospital billing and pharmacy management is 10x faster. The NexaTech team understood our workflows perfectly and delivered exactly what we needed in just 3 weeks.',
    name: 'Dr. Sunita Patel',
    role: 'Administrator, City Multi-Specialty Hospital',
    avatar: 'SP',
    avatarBg: 'linear-gradient(135deg, #22c55e, #16a34a)',
    featured: false,
  },
  {
    stars: 5,
    text: 'The inventory and billing module they built for our pharma shop saved us hours every day. Stock alerts, GST billing, expiry tracking — it handles everything automatically.',
    name: 'Amit Mehta',
    role: 'Owner, Mehta Medical Store, Surat',
    avatar: 'AM',
    avatarBg: 'linear-gradient(135deg, #f97316, #ef4444)',
    featured: false,
  },
]

export default function Testimonials() {
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
    <section className="section testimonials" id="testimonials" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">💬 Client Stories</div>
          <h2 className="section-title">
            Trusted by Businesses <span>Across India</span>
          </h2>
          <p className="section-desc">
            Don't take our word for it — hear from the 200+ business owners and managers
            who have transformed their operations with NexaTech.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`testimonial-card reveal ${t.featured ? 'featured' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="quote-mark">"</div>
              <div className="stars">{'★'.repeat(t.stars)}</div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar" style={{ background: t.avatarBg }}>
                  {t.avatar}
                </div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

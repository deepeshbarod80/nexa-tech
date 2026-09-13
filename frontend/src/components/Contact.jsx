import { useState, useEffect, useRef } from 'react'

const industries = [
  'School Management', 'Hospital Management', 'Hotel Management',
  'Billing & Invoicing', 'Manufacturing ERP', 'Inventory Management',
  'Pharma Management', 'Custom Solution',
]

const contactDetails = [
  { icon: '📍', label: 'Office Address', value: '24/144, Swarn path, Sector-2, Mansarovar, Jaipur, Rajasthan - 302020' },
  { icon: '📞', label: 'Phone / WhatsApp', value: '+1-7869993231' },
  { icon: '✉️', label: 'Email', value: 'contact@aaosainternational.com' },
  { icon: '⏰', label: 'Working Hours', value: 'Mon–Fri, 9:00 AM – 6:00 PM PST' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', industry: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        const data = await res.json().catch(() => ({}))
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Could not connect to server. Please email us directly.')
      setStatus('error')
    }
  }

  return (
    <section className="section contact" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">📬 Get In Touch</div>
          <h2 className="section-title">
            Let's Build Your <span>Dream Software</span>
          </h2>
          <p className="section-desc">
            Tell us about your project and we'll get back to you within 24 hours
            with a free consultation and a rough project estimate.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info reveal">
            <h3>Talk to Our Experts</h3>
            <p>
              We've helped 200+ businesses automate their operations.
              Let us show you what we can do for yours — absolutely free.
            </p>

            <div className="contact-details">
              {contactDetails.map(d => (
                <div key={d.label} className="contact-detail-item">
                  <div className="cd-icon">{d.icon}</div>
                  <div>
                    <div className="cd-label">{d.label}</div>
                    <div className="cd-value">{d.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
              color: 'white',
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>💬</div>
              <div style={{ fontWeight: 700, marginBottom: 6, fontSize: '0.95rem' }}>
                Prefer WhatsApp?
              </div>
              <div style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.6)', marginBottom: 16 }}>
                Chat with our team directly on WhatsApp for a quick response.
              </div>
              <a
                href="https://wa.me/17869993231"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#25d366',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                }}
              >
                📱 Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="contact-form-card reveal" style={{ transitionDelay: '0.15s' }}>
            {status === 'success' ? (
              <div className="form-success">
                <div className="success-icon">🎉</div>
                <h4>Thank You! We'll Be In Touch.</h4>
                <p>
                  Your message has been received. One of our solution experts will
                  contact you within 24 hours to schedule your free demo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="Your Name"
                      value={form.name} onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email" name="email" type="email"
                      placeholder="username@company.com"
                      value={form.email} onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone / WhatsApp *</label>
                    <input
                      id="phone" name="phone" type="tel"
                      placeholder="+1-7869993231"
                      value={form.phone} onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company / Organization</label>
                    <input
                      id="company" name="company" type="text"
                      placeholder="Your Company Name"
                      value={form.company} onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="industry">Industry / Solution Needed *</label>
                  <select
                    id="industry" name="industry"
                    value={form.industry} onChange={handleChange}
                    required
                  >
                    <option value="">Select an industry...</option>
                    {industries.map(ind => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tell Us About Your Requirement</label>
                  <textarea
                    id="message" name="message"
                    placeholder="Briefly describe what you need — number of users, key features, timeline, or any specific requirements..."
                    value={form.message} onChange={handleChange}
                    rows={4}
                  />
                </div>

                {status === 'error' && (
                  <p className="form-error-msg">⚠️ {errorMsg}</p>
                )}

                <button type="submit" className="form-submit" disabled={status === 'loading'}>
                  {status === 'loading' ? '⏳ Sending...' : '🚀 Send My Request — It\'s Free!'}
                </button>

                <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 12 }}>
                  🔒 Your information is 100% secure and never shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

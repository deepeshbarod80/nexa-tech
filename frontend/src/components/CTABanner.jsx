export default function CTABanner() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="cta-banner">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-tag" style={{ justifyContent: 'center', background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)' }}>
          🎯 Limited Time Offer
        </div>
        <h2 className="section-title">
          Ready to Digitize Your Business?<br />
          <span>Get a Free Demo Today.</span>
        </h2>
        <p className="section-desc" style={{ marginTop: 16 }}>
          Join 200+ businesses that have already transformed their operations with our
          custom SaaS solutions. Your first consultation is completely free.
        </p>

        <div className="cta-actions">
          <button className="btn btn-orange btn-lg" onClick={() => scrollTo('#contact')}>
            🚀 Book Free Demo
          </button>
          <button className="btn btn-outline btn-lg" onClick={() => scrollTo('#industries')}>
            Explore Solutions
          </button>
        </div>

        <div className="cta-features">
          {[
            'No Setup Fee',
            'Free Training Included',
            'Dedicated Account Manager',
            '30-Day Money Back Guarantee',
          ].map(f => (
            <div key={f} className="cta-feature-item">
              <span className="check">✓</span>
              {f}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

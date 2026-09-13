export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="home">
      <div className="hero-grid-overlay" />

      <div className="hero-inner">
        {/* Left content */}
        <div className="hero-content">
          <div className="hero-badge animate-fade-up">
            <span className="badge-dot" />
            Trusted by 200+ businesses across India
          </div>

          <h1 className="hero-title animate-fade-up delay-1">
            Build Smarter Business with{' '}
            <span className="gradient-text">Custom SaaS Solutions</span>
          </h1>

          <p className="hero-subtitle animate-fade-up delay-2">
            We craft tailored software for schools, hospitals, hotels, manufacturing plants,
            and more — designed to automate operations, cut costs, and scale with your growth.
          </p>

          <div className="hero-actions animate-fade-up delay-3">
            <button className="btn btn-orange btn-lg" onClick={() => scrollTo('#contact')}>
              🚀 Get Free Demo
            </button>
            <button className="btn btn-outline btn-lg" onClick={() => scrollTo('#industries')}>
              Explore Solutions →
            </button>
          </div>

          <div className="hero-trust animate-fade-up delay-4">
            <div className="trust-avatars">
              <div className="avatar">RK</div>
              <div className="avatar">SP</div>
              <div className="avatar">AM</div>
              <div className="avatar">VJ</div>
            </div>
            <div className="trust-text">
              <strong>200+ Happy Clients</strong>
              ⭐⭐⭐⭐⭐ Rated 4.9 / 5
            </div>
          </div>
        </div>

        {/* Right — Dashboard Mockup */}
        <div className="hero-visual animate-fade-up delay-2">
          <div className="floating-badge badge-1">
            <div className="badge-icon">📊</div>
            <div>
              <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Revenue Today</div>
              <div style={{ fontWeight: 800, color: '#0f172a' }}>₹2,48,500</div>
            </div>
          </div>

          <div className="dashboard-mockup">
            <div className="mockup-header">
              <div className="mockup-dots">
                <span /><span /><span />
              </div>
              <div className="mockup-title-bar" />
            </div>

            <div className="mockup-stats-row">
              <div className="mockup-stat-card">
                <div className="mockup-stat-label">Users</div>
                <div className="mockup-stat-value blue">1,284</div>
                <div className="mockup-stat-change">↑ 12%</div>
              </div>
              <div className="mockup-stat-card">
                <div className="mockup-stat-label">Revenue</div>
                <div className="mockup-stat-value green">₹4.8L</div>
                <div className="mockup-stat-change">↑ 8%</div>
              </div>
              <div className="mockup-stat-card">
                <div className="mockup-stat-label">Orders</div>
                <div className="mockup-stat-value orange">348</div>
                <div className="mockup-stat-change">↑ 23%</div>
              </div>
            </div>

            <div className="mockup-chart">
              <div className="mockup-chart-header">
                <span className="mockup-chart-title">Monthly Growth</span>
                <span className="mockup-chart-badge">+18.4%</span>
              </div>
              <div className="mockup-chart-bars">
                {[35, 55, 42, 70, 58, 80, 65, 90, 72, 100, 84, 95].map((h, i) => (
                  <div key={i} className="mockup-bar" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>

            <div className="mockup-table">
              {[
                { icon: '🏫', name: 'Sunrise School', sub: 'School ERP', amount: '+₹18,000', color: 'rgba(37,99,235,0.15)' },
                { icon: '🏥', name: 'City Hospital', sub: 'HMS Module', amount: '+₹32,500', color: 'rgba(34,197,94,0.15)' },
                { icon: '🏨', name: 'Grand Hotel', sub: 'PMS Suite', amount: '+₹14,200', color: 'rgba(249,115,22,0.15)' },
              ].map((row, i) => (
                <div key={i} className="mockup-table-row">
                  <div className="mockup-table-icon" style={{ background: row.color }}>{row.icon}</div>
                  <div className="mockup-table-text">
                    <div className="mockup-table-name">{row.name}</div>
                    <div className="mockup-table-sub">{row.sub}</div>
                  </div>
                  <div className="mockup-table-amount">{row.amount}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="floating-badge badge-2">
            <div className="badge-icon">✅</div>
            <div>
              <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Deployment</div>
              <div style={{ fontWeight: 800, color: '#0f172a' }}>Live in 7 Days</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

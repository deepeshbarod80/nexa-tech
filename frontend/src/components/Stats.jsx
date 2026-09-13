import { useEffect, useRef, useState } from 'react'

const stats = [
  { number: 200, suffix: '+', label: 'Happy Clients',       color: 'blue' },
  { number: 50,  suffix: '+', label: 'Products Built',       color: 'orange' },
  { number: 15,  suffix: '+', label: 'Industries Served',    color: 'green' },
  { number: 7,   suffix: '+', label: 'Years of Excellence',  color: 'purple' },
]

function useCountUp(target, duration, start) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

function StatItem({ stat, started }) {
  const count = useCountUp(stat.number, 1600, started)
  return (
    <div className="stat-item">
      <div className={`stat-number ${stat.color}`}>
        {count}{stat.suffix}
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats" ref={ref}>
      <div className="stats-grid">
        {stats.map(stat => (
          <StatItem key={stat.label} stat={stat} started={started} />
        ))}
      </div>
    </section>
  )
}

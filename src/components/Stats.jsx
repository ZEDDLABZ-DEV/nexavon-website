import { useEffect, useRef, useState } from 'react'

const metrics = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 25, suffix: '+', label: 'Industries Served' },
  { value: 10, suffix: '+', label: 'Countries Reached' },
]

function useCountUp(target, active, duration = 1600) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    let frame
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, target, duration])
  return value
}

function Metric({ value, suffix, label, active }) {
  const count = useCountUp(value, active)
  return (
    <div className="text-center">
      <div className="text-4xl font-extrabold text-white sm:text-5xl">
        {count}
        <span className="text-accent">{suffix}</span>
      </div>
      <p className="mt-2 text-sm font-medium text-blue-100/80">{label}</p>
    </div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container-x">
        <div
          ref={ref}
          className="rounded-[2rem] bg-gradient-to-r from-navy-deep to-royal px-8 py-12 shadow-xl lg:px-12"
        >
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Driving Impact. Delivering Growth.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {metrics.map((m) => (
              <Metric key={m.label} {...m} active={active} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

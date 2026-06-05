import { Globe2, Check } from 'lucide-react'

const benefits = [
  'Global Delivery Model',
  '24/7 Support & Collaboration',
  'Trusted by Startups & Enterprises',
]

export default function GlobalPresence() {
  return (
    <section id="solutions" className="bg-blue-50/50 py-20 lg:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        {/* globe illustration */}
        <div className="reveal order-2 flex justify-center lg:order-1">
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-royal/15 blur-3xl" />
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-gradient-to-br from-royal to-navy-deep shadow-2xl shadow-royal/30 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <div className="absolute inset-4 animate-spin-slow rounded-full border border-dashed border-white/30" />
              <div className="absolute inset-10 rounded-full border border-white/20" />
              <Globe2
                size={140}
                strokeWidth={1}
                className="text-white/90"
              />
              <span className="absolute -right-3 top-12 rounded-full bg-white px-3 py-1 text-xs font-semibold text-navy shadow-lg">
                🌍 10+ Countries
              </span>
            </div>
          </div>
        </div>

        {/* content */}
        <div className="reveal order-1 lg:order-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-royal/20 bg-white px-4 py-1.5 text-xs font-semibold text-royal shadow-sm">
            🌍 India · Global Services
          </span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
            Local expertise, global perspective
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
            We combine local expertise with a global perspective to deliver
            impactful digital solutions worldwide — serving an international
            client base from India.
          </p>

          <ul className="mt-8 space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-royal/10 text-royal">
                  <Check size={16} strokeWidth={3} />
                </span>
                <span className="text-base font-medium text-navy">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

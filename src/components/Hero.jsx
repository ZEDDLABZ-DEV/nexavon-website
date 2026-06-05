import { ArrowRight, Sparkles, BrainCircuit, ShieldCheck, Rocket } from 'lucide-react'
import Logo from './Logo.jsx'

const highlights = [
  {
    icon: BrainCircuit,
    title: 'AI-Powered Solutions',
    desc: 'Advanced AI and automation services.',
  },
  {
    icon: ShieldCheck,
    title: 'Scalable & Secure',
    desc: 'Enterprise-ready systems.',
  },
  {
    icon: Rocket,
    title: 'Innovation Driven',
    desc: 'Focus on cutting-edge technology.',
  },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/60 to-white pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      {/* decorative background shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-royal/10 blur-3xl" />
        <div className="absolute top-40 -left-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(37,99,235,0.08)_1px,_transparent_0)] [background-size:32px_32px]" />
      </div>

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
        {/* left content */}
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-royal/20 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-royal shadow-sm">
            <Sparkles size={14} className="text-accent" />
            TECH · AI · BRANDING · GROWTH
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Building Intelligent{' '}
            <span className="text-royal">Solutions</span> for a{' '}
            <span className="text-royal">Smarter</span> Tomorrow
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Nexavon Tech Private Limited delivers next-generation digital
            products and strategies that help businesses innovate, automate, and
            grow in the digital era.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-royal px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-royal/30 transition-all hover:bg-royal-light hover:shadow-royal/45"
            >
              Explore Services
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-navy transition-all hover:border-royal hover:text-royal"
            >
              Get Free Consultation
            </a>
          </div>

          {/* feature highlights */}
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-royal/10 text-royal">
                  <Icon size={20} />
                </div>
                <h3 className="text-sm font-bold text-navy">{title}</h3>
                <p className="text-xs leading-relaxed text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* right graphic */}
        <div className="reveal relative flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 -z-10 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,_rgba(37,99,235,0.18),_rgba(249,115,22,0.16),_rgba(37,99,235,0.18))] blur-2xl" />
            <div className="relative flex h-72 w-72 items-center justify-center rounded-[2.5rem] border border-white/60 bg-gradient-to-br from-navy via-royal to-navy-deep shadow-2xl shadow-royal/30 sm:h-80 sm:w-80 lg:h-96 lg:w-96 animate-float">
              <div className="scale-[2.6] sm:scale-[3]">
                <Logo size={64} withWordmark={false} />
              </div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                <span className="block text-lg font-extrabold tracking-[0.25em] text-white">
                  NEXAVON
                </span>
                <span className="block text-[10px] font-semibold tracking-[0.3em] text-blue-200">
                  TECH PVT. LTD.
                </span>
              </div>
            </div>

            {/* floating chips */}
            <div className="absolute -left-8 top-10 hidden animate-float-slow rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:block">
              <p className="text-xs font-semibold text-navy">⚡ Automation</p>
            </div>
            <div className="absolute -right-6 bottom-16 hidden animate-float rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:block">
              <p className="text-xs font-semibold text-navy">🤖 AI Driven</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

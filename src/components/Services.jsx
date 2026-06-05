import {
  Smartphone,
  Globe,
  Palette,
  Megaphone,
  Workflow,
  Vote,
  BarChart3,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Smartphone,
    title: 'Apps',
    desc: 'Custom mobile applications for Android and iOS.',
    tags: ['Android', 'iOS'],
  },
  {
    icon: Globe,
    title: 'Websites',
    desc: 'High-performance business websites focused on speed, scalability and growth.',
    tags: ['Speed', 'Scalability', 'Growth'],
  },
  {
    icon: Palette,
    title: 'UI/UX',
    desc: 'User-centered designs offering better usability and modern interfaces.',
    tags: ['Usability', 'Modern UI', 'Experience'],
  },
  {
    icon: Megaphone,
    title: 'Marketing',
    desc: 'Data-driven marketing services that generate measurable results.',
    tags: ['SEO', 'Social Media', 'Paid Ads', 'Leads'],
  },
  {
    icon: Workflow,
    title: 'Automation',
    desc: 'Business process automation to save time and reduce manual work.',
    tags: ['Efficiency', 'Time-saving'],
  },
  {
    icon: Vote,
    title: 'Election Tech',
    desc: 'Specialized political technology solutions and election war rooms.',
    tags: ['Campaigns', 'Voter Analytics', 'Political CRM'],
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    desc: 'Business intelligence with dashboards and data-driven decision-making.',
    tags: ['Insights', 'Dashboards', 'Reporting'],
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="reveal overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy via-royal to-navy-deep p-8 shadow-2xl shadow-navy/20 sm:p-12 lg:p-16">
          {/* intro panel */}
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                What We Do
              </span>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                End-to-end digital solutions to transform ideas into impactful
                products
              </h2>
              <p className="mt-4 text-base leading-relaxed text-blue-100/80">
                We turn ambitious ideas into powerful experiences — combining
                design, engineering and intelligence to drive growth.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy transition-transform hover:scale-[1.03]"
            >
              View All Services
              <ArrowRight size={16} />
            </a>
          </div>

          {/* service cards */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map(({ icon: Icon, title, desc, tags }) => (
              <div
                key={title}
                className="group rounded-2xl bg-white/95 p-6 shadow-lg ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-royal/10 text-royal transition-colors group-hover:bg-royal group-hover:text-white">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-medium text-royal"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

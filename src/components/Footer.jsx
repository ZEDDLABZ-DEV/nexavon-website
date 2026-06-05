import Logo from './Logo.jsx'

const columns = [
  {
    title: 'Company',
    links: ['About Us', 'Portfolio', 'Insights', 'Careers'],
  },
  {
    title: 'Services',
    links: ['Apps', 'Websites', 'UI/UX', 'Automation', 'Analytics'],
  },
  {
    title: 'Solutions',
    links: ['AI Solutions', 'Election Tech', 'Marketing', 'Consulting'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-blue-100">
      <div className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo size={42} light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-blue-200/70">
              Building intelligent solutions for a smarter tomorrow. Delivering
              next-generation digital products and strategies for businesses
              worldwide.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-blue-200/70 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-blue-200/60">
            © {new Date().getFullYear()} NEXAVON TECH PRIVATE LIMITED. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-blue-200/60">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

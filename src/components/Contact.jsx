import { useState } from 'react'
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react'

const services = [
  'Apps',
  'Websites',
  'UI/UX',
  'Marketing',
  'Automation',
  'Election Tech',
  'Analytics',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-blue-50/50 py-20 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        {/* info */}
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-royal/20 bg-white px-4 py-1.5 text-xs font-semibold text-royal shadow-sm">
            🚀 Get In Touch
          </span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
            Get a free consultation for your next big idea
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
            Tell us about your goals and our team will get back to you with a
            tailored plan to innovate, automate, and grow.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href="mailto:hello@nexavontech.com"
              className="flex items-center gap-4 text-navy transition-colors hover:text-royal"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-royal/10 text-royal">
                <Mail size={20} />
              </span>
              <span className="font-medium">hello@nexavontech.com</span>
            </a>
            <a
              href="tel:+910000000000"
              className="flex items-center gap-4 text-navy transition-colors hover:text-royal"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-royal/10 text-royal">
                <Phone size={20} />
              </span>
              <span className="font-medium">+91 00000 00000</span>
            </a>
            <div className="flex items-center gap-4 text-navy">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-royal/10 text-royal">
                <MapPin size={20} />
              </span>
              <span className="font-medium">India · Serving Globally</span>
            </div>
          </div>
        </div>

        {/* form */}
        <div className="reveal rounded-3xl bg-white p-8 shadow-xl shadow-royal/5 ring-1 ring-slate-100 sm:p-10">
          {submitted ? (
            <div className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
              <CheckCircle2 size={56} className="text-royal" />
              <h3 className="mt-4 text-xl font-bold text-navy">Thank you!</h3>
              <p className="mt-2 text-slate-500">
                Your request has been received. We'll be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" placeholder="Jane Doe" />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="jane@company.com"
                />
              </div>
              <Field
                label="Company"
                name="company"
                placeholder="Company name"
                required={false}
              />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-navy">
                  Service of Interest
                </label>
                <select
                  name="service"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy outline-none transition focus:border-royal focus:ring-2 focus:ring-royal/20"
                >
                  {services.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-navy">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy outline-none transition focus:border-royal focus:ring-2 focus:ring-royal/20"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-royal px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-royal/30 transition-all hover:bg-royal-light"
              >
                Get Free Consultation
                <ArrowRight size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', placeholder, required = true }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-navy">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy outline-none transition placeholder:text-slate-400 focus:border-royal focus:ring-2 focus:ring-royal/20"
      />
    </div>
  )
}

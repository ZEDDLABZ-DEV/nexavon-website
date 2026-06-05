const badges = [
  { name: 'Startup India', note: 'Recognized startup' },
  { name: 'Digital India', note: 'Digital initiative' },
  { name: 'NASSCOM', note: 'Industry member' },
  { name: 'ISO 9001:2015', note: 'Quality certified' },
  { name: 'Clutch', note: 'Verified reviews' },
  { name: 'Google Partner', note: 'Ads & digital' },
]

export default function Trust() {
  return (
    <section id="insights" className="bg-white py-16 lg:py-20">
      <div className="container-x">
        <div className="reveal text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-royal">
            Trust &amp; Recognition
          </span>
          <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-bold text-navy sm:text-3xl">
            Backed by credibility and industry recognition
          </h2>
        </div>

        <div className="reveal mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {badges.map((badge) => (
            <div
              key={badge.name}
              className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-slate-50/60 px-4 py-6 text-center transition-all hover:border-royal/30 hover:bg-white hover:shadow-lg"
            >
              <span className="text-sm font-bold text-navy">{badge.name}</span>
              <span className="mt-1 text-[11px] text-slate-400">
                {badge.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

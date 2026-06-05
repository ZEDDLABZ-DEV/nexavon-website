export default function Logo({ size = 40, withWordmark = true, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#3b82f6" />
            <stop offset="1" stopColor="#0b1f4d" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill="url(#logoGrad)" />
        {/* pixel / circuit dots */}
        <rect x="11" y="11" width="3" height="3" rx="1" fill="#60a5fa" opacity="0.7" />
        <rect x="11" y="50" width="3" height="3" rx="1" fill="#60a5fa" opacity="0.7" />
        <rect x="50" y="50" width="3" height="3" rx="1" fill="#60a5fa" opacity="0.7" />
        {/* stylized N */}
        <path d="M18 47V17h6l16 20V17h6v30h-6L24 27v20z" fill="#fff" />
        {/* orange orbital swoosh */}
        <path
          d="M12 40a26 26 0 0 0 44 6"
          stroke="#f97316"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="49" cy="16" r="5" fill="#f97316" />
      </svg>
      {withWordmark && (
        <div className="leading-tight">
          <span
            className={`block text-base font-extrabold tracking-tight ${
              light ? 'text-white' : 'text-navy'
            }`}
          >
            NEXAVON
          </span>
          <span
            className={`block text-[10px] font-semibold tracking-[0.18em] ${
              light ? 'text-blue-200' : 'text-royal'
            }`}
          >
            TECH PVT. LTD.
          </span>
        </div>
      )}
    </div>
  )
}

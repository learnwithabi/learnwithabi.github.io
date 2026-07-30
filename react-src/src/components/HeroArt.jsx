export default function HeroArt() {
  return (
    <svg className="hero-art" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#5eead4" />
        </linearGradient>
        <linearGradient id="g2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fbbf6a" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>

      {/* flowing connector lines feeding into the lakehouse */}
      <path d="M40 90 C 120 90, 120 170, 190 190" stroke="url(#g2)" strokeWidth="2" strokeDasharray="4 6" opacity="0.7" fill="none"/>
      <path d="M380 70 C 300 70, 300 160, 225 185" stroke="url(#g1)" strokeWidth="2" strokeDasharray="4 6" opacity="0.7" fill="none"/>
      <path d="M50 320 C 130 320, 140 250, 195 220" stroke="url(#g1)" strokeWidth="2" strokeDasharray="4 6" opacity="0.7" fill="none"/>

      {/* source nodes */}
      <circle cx="40" cy="90" r="7" fill="#fbbf6a"/>
      <circle cx="380" cy="70" r="7" fill="#5eead4"/>
      <circle cx="50" cy="320" r="7" fill="#a78bfa"/>

      {/* stacked lakehouse layers */}
      <g opacity="0.95">
        <path d="M210 150 L 300 190 L 210 230 L 120 190 Z" fill="url(#g1)" opacity="0.25"/>
        <path d="M210 150 L 300 190 L 210 230 L 120 190 Z" stroke="url(#g1)" strokeWidth="2" fill="none"/>

        <path d="M210 205 L 300 245 L 210 285 L 120 245 Z" fill="url(#g1)" opacity="0.35"/>
        <path d="M210 205 L 300 245 L 210 285 L 120 245 Z" stroke="url(#g1)" strokeWidth="2" fill="none"/>

        <path d="M210 260 L 300 300 L 210 340 L 120 300 Z" fill="url(#g1)" opacity="0.55"/>
        <path d="M210 260 L 300 300 L 210 340 L 120 300 Z" stroke="url(#g1)" strokeWidth="2" fill="none"/>
      </g>

      {/* orbiting AI node */}
      <circle cx="330" cy="330" r="26" fill="none" stroke="url(#g2)" strokeWidth="1.5" opacity="0.5"/>
      <circle cx="330" cy="330" r="9" fill="url(#g2)"/>

      <circle cx="90" cy="190" r="4" fill="#5eead4" opacity="0.8"/>
      <circle cx="330" cy="150" r="4" fill="#fbbf6a" opacity="0.8"/>
    </svg>
  );
}

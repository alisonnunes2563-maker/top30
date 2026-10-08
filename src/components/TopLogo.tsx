import React from 'react';

interface TopLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const TopLogo: React.FC<TopLogoProps> = ({ className = '', size = 'md' }) => {
  const dimensions = {
    sm: { width: 140, height: 60 },
    md: { width: 210, height: 90 },
    lg: { width: 280, height: 120 },
  }[size];

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 320 130"
        width={dimensions.width}
        height={dimensions.height}
        className="w-auto h-12 sm:h-14 md:h-16 max-w-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Top Academia Logo"
        role="img"
      >
        <defs>
          {/* Subtle glossy sheen for TOP wordmark */}
          <linearGradient id="topBlackGloss" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2b2b2b" />
            <stop offset="48%" stopColor="#121212" />
            <stop offset="52%" stopColor="#050505" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>

          {/* Intense blood red gradient matching brand identity */}
          <linearGradient id="brandRedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="60%" stopColor="#a81c1c" />
            <stop offset="100%" stopColor="#7f1d1d" />
          </linearGradient>

          {/* Stroke filter for clean white double-outline definition */}
          <filter id="crispShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.8" />
          </filter>
        </defs>

        {/* LOGO GRAPHIC MARK (RUNNING ATHLETE SYMBOL) */}
        <g transform="translate(165, 8)">
          {/* White outer contour for the athletic emblem */}
          <path
            d="M 46,65 
               C 56,48 76,28 92,12 
               C 85,8 78,5 70,5 
               C 55,20 40,42 22,60 
               C 18,50 16,38 24,25 
               C 12,35 6,52 6,65 
               C 6,78 14,88 28,88 
               C 34,78 40,70 46,65 Z"
            fill="#ffffff"
            stroke="#0a0a0a"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          {/* Head dot outer outline */}
          <circle cx="86" cy="14" r="11" fill="#ffffff" stroke="#0a0a0a" strokeWidth="4" />

          {/* Inner Athletic Silhouette in Intense Blood Red */}
          <path
            d="M 46,65 
               C 56,48 76,28 92,12 
               C 85,8 78,5 70,5 
               C 55,20 40,42 22,60 
               C 18,50 16,38 24,25 
               C 12,35 6,52 6,65 
               C 6,78 14,88 28,88 
               C 34,78 40,70 46,65 Z"
            fill="url(#brandRedGradient)"
          />
          {/* Athlete head */}
          <circle cx="86" cy="14" r="8" fill="url(#brandRedGradient)" />
        </g>

        {/* WORDMARK: "TOP" */}
        {/* Outer White Border of "TOP" */}
        <g
          fontFamily="'Barlow Condensed', 'Teko', 'Impact', sans-serif"
          fontWeight="900"
          fontStyle="italic"
          fontSize="76"
          letterSpacing="-1"
        >
          {/* Black shadow layer */}
          <text
            x="8"
            y="72"
            fill="#000000"
            stroke="#000000"
            strokeWidth="12"
            strokeLinejoin="miter"
          >
            TOP
          </text>
          
          {/* White outline border */}
          <text
            x="8"
            y="72"
            fill="#ffffff"
            stroke="#ffffff"
            strokeWidth="9"
            strokeLinejoin="round"
          >
            TOP
          </text>

          {/* Inner Black Face */}
          <text
            x="8"
            y="72"
            fill="url(#topBlackGloss)"
          >
            TOP
          </text>
        </g>

        {/* WORDMARK: "ACADEMIA" */}
        <g
          fontFamily="'Barlow Condensed', 'Teko', sans-serif"
          fontWeight="800"
          fontSize="24"
          letterSpacing="4"
          transform="translate(8, 102)"
        >
          {/* Outer white outline */}
          <text
            x="2"
            y="0"
            fill="#ffffff"
            stroke="#ffffff"
            strokeWidth="5"
            strokeLinejoin="round"
          >
            ACADEMIA
          </text>
          {/* Inner blood red text */}
          <text
            x="2"
            y="0"
            fill="#a81c1c"
          >
            ACADEMIA
          </text>
        </g>
      </svg>
    </div>
  );
};

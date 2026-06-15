import React from 'react';

interface LogoItem {
  name: string;
  src: string;
  gradientClass: string;
  gradient?: string;
}

const LOGO_LIST: LogoItem[] = [
  {
    name: 'Procure',
    src: 'https://cdn.svgl.app/keys/procure.svg',
    gradient: 'linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(29, 78, 216, 0.08) 100%)',
    gradientClass: '',
  },
  {
    name: 'Shopify',
    src: 'https://cdn.svgl.app/keys/shopify.svg',
    gradient: 'linear-gradient(135deg, rgba(234, 179, 8, 0.15) 0%, rgba(202, 138, 4, 0.08) 100%)',
    gradientClass: '',
  },
  {
    name: 'Blender',
    src: 'https://cdn.svgl.app/keys/blender.svg',
    gradient: 'linear-gradient(135deg, rgba(14, 165, 233, 0.15) 0%, rgba(2, 132, 199, 0.08) 100%)',
    gradientClass: '',
  },
  {
    name: 'Figma',
    src: 'https://cdn.svgl.app/keys/figma.svg',
    gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(147, 51, 234, 0.08) 100%)',
    gradientClass: '',
  },
  {
    name: 'Spotify',
    src: 'https://cdn.svgl.app/keys/spotify.svg',
    gradient: 'linear-gradient(135deg, rgba(244, 63, 94, 0.15) 0%, rgba(225, 29, 72, 0.08) 100%)',
    gradientClass: '',
  },
  {
    name: 'Lottielab',
    src: 'https://cdn.svgl.app/keys/lottielab.svg',
    gradient: 'linear-gradient(135deg, rgba(234, 179, 8, 0.12) 0%, rgba(34, 197, 94, 0.12) 100%)',
    gradientClass: '',
  },
  {
    name: 'Google Cloud',
    src: 'https://cdn.svgl.app/keys/google-cloud.svg',
    gradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(14, 116, 144, 0.08) 100%)',
    gradientClass: '',
  },
  {
    name: 'Bing',
    src: 'https://cdn.svgl.app/keys/bing.svg',
    gradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(13, 148, 136, 0.08) 100%)',
    gradientClass: '',
  },
];

export default function Marquee() {
  // Render twice inline to ensure a seamless looping effect
  const doubleLogos = [...LOGO_LIST, ...LOGO_LIST];

  return (
    <div id="marquee-section" className="w-full relative py-2 overflow-hidden select-none">
      <div 
        className="w-full flex"
        style={{
          maskImage: 'linear-gradient(to right, transparent, white 15%, white 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, white 15%, white 85%, transparent)',
        }}
      >
        <div 
          className="flex gap-6 py-4 animate-marquee hover:[animation-play-state:paused]"
          style={{
            display: 'flex',
            width: 'max-content',
          }}
        >
          {doubleLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              id={`marquee-card-${logo.name}-${index}`}
              className="group relative h-24 w-40 shrink-0 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all overflow-hidden cursor-pointer"
            >
              {/* Absolute gradient overlay with transition using exact hex gradient as specified */}
              <div
                className="absolute inset-0 transition-all duration-500 ease-out transform scale-150 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                style={{ background: logo.gradient }}
              />
              
              {/* Logo SVG Image - group-hover:brightness-0 group-hover:invert */}
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback if svgl.app cdn lacks the exact key path
                  // We show beautiful typography for premium aesthetics
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = "text-[14px] font-bold text-slate-700 uppercase tracking-widest relative z-10 transition-colors group-hover:text-black";
                    fallback.innerText = logo.name;
                    parent.appendChild(fallback);
                  }
                }}
                className="max-w-[85px] max-h-[30px] w-auto h-auto object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert relative z-10"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

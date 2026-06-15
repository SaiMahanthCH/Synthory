import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  inverted?: boolean;
}

export default function Logo({ className = '', iconOnly = false, invert = false }: LogoProps & { invert?: boolean }) {
  const colorClass = invert ? 'text-white' : className.includes('text-') ? '' : 'text-[#0a0a0a]';

  if (iconOnly) {
    return (
      <svg 
        id="logo-svg-icon"
        viewBox="0 0 100 115" 
        className={`transition-transform duration-300 group-hover:scale-105 shrink-0 ${colorClass} ${className}`}
        fill="currentColor"
      >
        {/* Piece A: Top-Left Hook */}
        <polygon points="5,31 47.5,6.5 47.5,82.5 5,58" />
        
        {/* Piece B: Bottom-Left Block */}
        <polygon points="5,65 47.5,89.5 47.5,108.5 5,84" />
        
        {/* Piece C: Bottom-Right Hook */}
        <polygon points="95,84 52.5,108.5 52.5,32.5 95,57" />
        
        {/* Piece D: Top-Right Block */}
        <polygon points="95,50 52.5,25.5 52.5,6.5 95,31" />
      </svg>
    );
  }

  return (
    <div id="synthory-logo" className={`flex items-center gap-3 select-none ${className}`}>
      {/* Pristine geometrically engineered Isometric S-Hexagon Logo Icon */}
      <svg 
        id="logo-svg-icon"
        viewBox="0 0 100 115" 
        className={`w-8 h-8 md:w-9 md:h-9 transition-transform duration-300 group-hover:scale-105 shrink-0 ${colorClass}`}
        fill="currentColor"
      >
        {/* Piece A: Top-Left Hook */}
        <polygon points="5,31 47.5,6.5 47.5,82.5 5,58" />
        
        {/* Piece B: Bottom-Left Block */}
        <polygon points="5,65 47.5,89.5 47.5,108.5 5,84" />
        
        {/* Piece C: Bottom-Right Hook */}
        <polygon points="95,84 52.5,108.5 52.5,32.5 95,57" />
        
        {/* Piece D: Top-Right Block */}
        <polygon points="95,50 52.5,25.5 52.5,6.5 95,31" />
      </svg>
      
      {!iconOnly && (
        <span 
          id="logo-text-wordmark"
          className={`font-sans text-xl md:text-2xl font-black tracking-[0.12em] uppercase leading-none ${colorClass}`}
          style={{ fontFamily: 'Outfit, var(--font-sans)' }}
        >
          Synthory
        </span>
      )}
    </div>
  );
}

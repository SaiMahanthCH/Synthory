import React from 'react';
import { motion } from 'motion/react';

export default function HeroBackground() {
  return (
    <div 
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* Background radial gradient wrapper to fade grid edges */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(255,255,255,0)_40%,rgba(255,255,255,1)_100%] z-10" />

      {/* Grid Pattern Background - Option A */}
      <div 
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, #bdbdbd 1px, transparent 1px),
            linear-gradient(to right, #f0f0f0 1px, transparent 1px),
            linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px, 48px 48px, 48px 48px',
        }}
      />

      {/* Slow-moving Abstract Globe - Option B */}
      <div className="absolute right-[-10%] top-[-20%] md:right-[5%] md:top-[-10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-[0.2] flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* Concentric Spherical SVG Grid Lines */}
          <svg className="w-full h-full text-slate-800" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.25">
            {/* Outer ring */}
            <circle cx="50" cy="50" r="48" strokeDasharray="2 2" />
            <circle cx="50" cy="50" r="38" />
            <circle cx="50" cy="50" r="28" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="18" />
            
            {/* Horizontal lines */}
            <line x1="2" y1="50" x2="98" y2="50" />
            <line x1="6.8" y1="30" x2="93.2" y2="30" strokeDasharray="4 2" />
            <line x1="6.8" y1="70" x2="93.2" y2="70" strokeDasharray="4 2" />

            {/* Vertical longitude ellipse arcs to create 3D globe effect */}
            <ellipse cx="50" cy="50" rx="36" ry="48" strokeDasharray="2 4" />
            <ellipse cx="50" cy="50" rx="20" ry="48" />
            <ellipse cx="50" cy="50" rx="8" ry="48" strokeDasharray="5 2" />
            
            {/* Rotating network node indicator circles */}
            <circle cx="14" cy="50" r="1.5" fill="currentColor" />
            <circle cx="50" cy="10" r="1.5" fill="currentColor" />
            <circle cx="86" cy="50" r="1.5" fill="currentColor" />
            <circle cx="50" cy="90" r="1.5" fill="currentColor" />
            <circle cx="30" cy="30" r="1" fill="currentColor" />
            <circle cx="70" cy="70" r="1" fill="currentColor" />
            <circle cx="70" cy="30" r="1.2" fill="currentColor" />
            <circle cx="30" cy="70" r="1.2" fill="currentColor" />
          </svg>
        </motion.div>
      </div>

      {/* Floating abstract slow particle lights */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -50, 30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[20%] top-[40%] w-72 h-72 rounded-full bg-slate-300/10 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -30, 40, 0],
            y: [0, 60, -30, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-[25%] bottom-[15%] w-96 h-96 rounded-full bg-indigo-300/5 blur-[140px]"
        />
      </div>
    </div>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { EXPANSION_DOMAINS } from '../data/synthoryData';
import { Cpu, Layers, Video, GraduationCap, Users, Briefcase, Terminal, TrendingUp, Sparkles, Repeat, Globe, ArrowRight } from 'lucide-react';

interface VisionSectionProps {
  onNavigate: (page: string) => void;
  key?: string;
}

export default function VisionSection({ onNavigate }: VisionSectionProps) {
  // Mapping domain strings to real Lucide icons for high-performance visual fidelity
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#0a0a0a]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#0a0a0a]" />;
      case 'Video': return <Video className="w-5 h-5 text-[#0a0a0a]" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-[#0a0a0a]" />;
      case 'Users': return <Users className="w-5 h-5 text-[#0a0a0a]" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-[#0a0a0a]" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-[#0a0a0a]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#0a0a0a]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#0a0a0a]" />;
      case 'Repeat': return <Repeat className="w-5 h-5 text-[#0a0a0a]" />;
      case 'Globe': return <Globe className="w-5 h-5 text-[#0a0a0a]" />;
      default: return <Sparkles className="w-5 h-5 text-[#0a0a0a]" />;
    }
  };

  const manifestoLines = [
    'The future belongs to ecosystems.',
    'Businesses need more than software.',
    'Founders need more than funding.',
    'People need more than information.',
    'They need community, mentorship, opportunities, systems, partnerships, and support.',
    'Synthory exists to build that future.'
  ];

  return (
    <div id="vision-page" className="w-full flex flex-col gap-16 md:gap-24">
      {/* Editorial Header */}
      <div id="vision-hero-header" className="w-full max-w-[1200px] mx-auto px-6 pt-12 flex flex-col items-center text-center gap-4">
        <span className="text-[11px] font-bold text-slate-400 tracking-widest uppercase animate-pulse">
          MANIFESTO ARCHIVE
        </span>
        <h1 className="font-display text-[42px] md:text-[54px] font-bold text-[#0a0a0a] tracking-tight">
          The Future We Are Building
        </h1>
        <p className="font-sans text-[16px] text-[#888888] max-w-[600px] leading-relaxed">
          Decisive statements setting our direction for operational excellence over generational timescales.
        </p>
      </div>

      {/* Manifesto Section: Standalone, generously-spaced large reading experience */}
      <section 
        id="vision-manifesto"
        className="w-full bg-[#f9fafb] py-16 border-t border-b border-slate-150/40 relative"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,rgba(0,0,0,0.01)_100%)] pointer-events-none" />
        <div className="w-full max-w-[800px] mx-auto px-6 flex flex-col gap-10 md:gap-14 relative z-10">
          {manifestoLines.map((line, idx) => {
            const isLast = idx === manifestoLines.length - 1;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: 'easeOut' }}
                className={`${
                  isLast 
                    ? 'text-[28px] md:text-[38px] font-bold text-[#0a0a0a] italic border-l-4 border-[#0a0a0a] pl-6 py-2 mt-4' 
                    : 'text-[22px] md:text-[28px] font-medium text-[#444444] tracking-normal border-b border-slate-100 pb-4'
                }`}
                style={{ fontFamily: 'var(--font-display), sans-serif' }}
              >
                {line}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Grid of Expansion Domains */}
      <section id="vision-expansion-grid" className="w-full max-w-[1200px] mx-auto px-6 flex flex-col gap-10 pb-8">
        <div className="flex flex-col gap-2 items-center text-center">
          <span className="text-[11px] font-bold text-slate-400 tracking-widest uppercase">
            ROADMAP DOMAINS
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0a0a0a] tracking-tight">
            Ecosystem Expansion Map
          </h2>
          <p className="text-[14px] text-[#888888] max-w-[450px]">
            The critical internet industry vectors that the Synthory ecosystem intends to scale into over time.
          </p>
        </div>

        {/* Clean, high-performance modular grid of the 11 expansion domains */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
          {EXPANSION_DOMAINS.map((domain, index) => (
            <motion.div
              key={domain.domain}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -3, borderColor: '#888888' }}
              className="bg-white border border-[#e0e0e0] p-6 rounded-lg flex items-center gap-4 transition-all duration-200"
              style={{ borderRadius: '8px' }}
            >
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-md shrink-0">
                {getIcon(domain.icon)}
              </div>
              <span className="font-display text-[14px] font-bold text-[#0a0a0a] tracking-tight leading-snug">
                {domain.domain}
              </span>
            </motion.div>
          ))}
          
          {/* Extra placeholder indicating future additions */}
          <div 
            className="border-2 border-dashed border-slate-200 p-6 rounded-lg flex items-center justify-center bg-slate-50 opacity-[0.6] select-none"
            style={{ borderRadius: '8px' }}
          >
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              + Compounding More Nodes
            </span>
          </div>
        </div>
      </section>

      {/* Dark section at bottom with single CTA back to portfolio or contact */}
      <section 
        id="vision-footer-cta"
        className="w-full bg-[#0a0a0a] rounded-[36px] max-w-[1200px] mx-auto py-16 md:py-20 px-6 text-center text-white"
        style={{ color: '#ffffff' }}
      >
        <div className="max-w-[500px] mx-auto flex flex-col items-center gap-6">
          <span className="text-[11px] font-bold text-slate-400 tracking-widest uppercase">
            ECOSYSTEM LAUNCH
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            See the Node specs live
          </h2>
          <p className="font-sans text-[13px] md:text-[14px] text-slate-400 leading-relaxed max-w-[400px]">
            Understand how Varta, Flowzio, Flodon, and Conquer are currently mapping and compounding value in the digital epoch.
          </p>

          <div className="flex flex-wrap gap-4 mt-2 justify-center">
            <button
              onClick={() => {
                onNavigate('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white text-[#0a0a0a] font-bold px-6 py-3.5 rounded-[4px] text-[13px] tracking-wider uppercase hover:bg-slate-100 transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <span>Explore Portfolio</span>
              <ArrowRight size={14} />
            </button>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-transparent text-white border border-white/30 hover:border-white font-bold px-6 py-3.5 rounded-[4px] text-[13px] tracking-wider uppercase hover:bg-white/5 transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

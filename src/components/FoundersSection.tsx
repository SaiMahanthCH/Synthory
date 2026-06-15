import React from 'react';
import { motion } from 'motion/react';
import { FOUNDERS } from '../data/synthoryData';
import { Linkedin, Twitter, Sparkles } from 'lucide-react';

export default function FoundersSection() {
  return (
    <div id="founders-page" className="w-full max-w-[1000px] mx-auto px-6 py-12 flex flex-col gap-12">
      {/* Header */}
      <div id="founders-hero" className="flex flex-col items-center text-center gap-4 max-w-[650px] mx-auto py-8">
        <span className="text-[11px] font-bold text-slate-400 tracking-widest uppercase">
          FOUNDING PARTNERS
        </span>
        <h1 className="font-display text-[42px] md:text-[52px] font-bold text-[#0a0a0a] tracking-tight">
          Meet The Builders
        </h1>
        <p className="font-sans text-[16px] text-[#888888] leading-relaxed">
          The duo compounding resources, software templates, and community pipelines for internet-scale platforms.
        </p>
      </div>

      {/* Side-by-Side balanced cards (50/50 on desktop, stacked on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4 max-w-[850px] mx-auto w-full">
        {FOUNDERS.map((founder, idx) => (
          <motion.div
            key={founder.name}
            id={`founders-page-card-${idx}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="flex flex-col items-center text-center gap-6 p-8 border border-slate-100 rounded-2xl bg-white hover:shadow-md transition-shadow"
            style={{ borderRadius: '16px' }}
          >
            {/* Square Photo / Monogram with 8px radius per spec */}
            <div
              className="w-[240px] h-[240px] bg-[#f5f5f5] text-slate-800 font-display text-[72px] font-bold tracking-tight flex items-center justify-center relative select-none border border-slate-100/50"
              style={{ borderRadius: '8px' }}
            >
              <span>{founder.initials}</span>
              <div className="absolute right-3 top-3">
                <Sparkles size={16} className="text-slate-350 opacity-40" />
              </div>
            </div>

            {/* Vertically stacked details */}
            <div className="flex flex-col gap-1.5 items-center">
              <h2 className="font-display text-[26px] font-bold text-[#0a0a0a] tracking-tight leading-none">
                {founder.name}
              </h2>
              <span className="text-[12px] font-bold text-[#888888] tracking-widest uppercase">
                {founder.role}
              </span>
            </div>

            <p className="font-sans text-[14px] leading-relaxed text-slate-600 max-w-[340px] h-auto flex-1">
              {founder.bio}
            </p>

            {/* Social links (LinkedIn, Twitter icons only, 20px, gray, hover -> black) */}
            <div className="flex items-center gap-4 pt-2 border-t border-slate-50 w-full justify-center">
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#888888] hover:text-[#0a0a0a] transition-colors p-1"
                title={`${founder.name}'s LinkedIn`}
              >
                <Linkedin size={20} />
              </a>
              <a
                href={founder.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#888888] hover:text-[#0a0a0a] transition-colors p-1"
                title={`${founder.name}'s Twitter`}
              >
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

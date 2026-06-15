import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_COMPANIES } from '../data/synthoryData';
import { ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function PortfolioSection() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'Communication Infrastructure', 'Artificial Intelligence', 'Business Growth', 'Community'];

  const filteredCompanies = selectedFilter === 'All' 
    ? PORTFOLIO_COMPANIES 
    : PORTFOLIO_COMPANIES.filter(c => c.category === selectedFilter);

  return (
    <div id="portfolio-page" className="w-full max-w-[1200px] mx-auto px-6 py-12 flex flex-col gap-12">
      {/* Hero Section */}
      <div id="portfolio-hero" className="flex flex-col items-center text-center gap-4 max-w-[700px] mx-auto py-8">
        <span className="text-[11px] font-bold text-slate-400 tracking-widest uppercase">
          VENTURE DIRECTORY
        </span>
        <h1 className="font-display text-[42px] md:text-[52px] font-bold text-[#0a0a0a] tracking-tight">
          The Synthory Portfolio
        </h1>
        <p className="font-sans text-[16px] text-[#888888] leading-relaxed">
          A growing collection of companies built, tested, scaled, and operated by Synthory's venture ecosystem.
        </p>
      </div>

      {/* Category Filtering Tabs */}
      <div id="category-filter-tabs" className="flex flex-wrap justify-center items-center gap-2 border-b border-slate-100 pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`px-4 py-2 text-[12px] font-semibold uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer ${
              selectedFilter === cat
                ? 'bg-[#0a0a0a] text-white'
                : 'bg-slate-50 text-slate-500 hover:text-[#0a0a0a] border border-slate-100 hover:border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Company Cards (2-column grid desktop, 1-column stack mobile) */}
      <div id="portfolio-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {filteredCompanies.map((company) => (
          <motion.div
            key={company.id}
            id={`portfolio-company-card-${company.id}`}
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="group relative bg-white border border-[#e0e0e0] hover:border-[#888888] rounded-lg p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-lg cursor-pointer h-full"
            style={{ borderRadius: '8px' }}
          >
            {/* Subtle Gradient background matching svgl.app logo color theme on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${company.gradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg`} />

            <div className="relative z-10 flex flex-col gap-6">
              {/* Category, Status Pill */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 tracking-widest uppercase">
                  {company.categoryLabel}
                </span>
                
                {/* Status Badges */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 text-slate-600 border border-slate-200/50 text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{company.status}</span>
                </div>
              </div>

              {/* Company Info */}
              <div className="flex flex-col gap-3">
                <h2 className="font-display text-[24px] md:text-[28px] font-bold text-[#0a0a0a] tracking-tight">
                  {company.name}
                </h2>
                {/* Horizontal divider per spec */}
                <div className="w-full h-[1px] bg-[#e0e0e0]" />
                <p className="font-sans text-[14px] md:text-[15px] leading-relaxed text-[#888888]">
                  {company.description}
                </p>
              </div>

              {/* Core Features bullets */}
              <div className="flex flex-col gap-3 pt-2">
                <span className="text-[11px] font-bold text-[#0a0a0a] tracking-wider uppercase flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#0a0a0a]" />
                  <span>Core Platform Capabilities</span>
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-1">
                  {company.features.map((feat, idx) => (
                    <li 
                      key={idx}
                      className="text-[13px] text-slate-600 flex items-start gap-2"
                    >
                      <CheckCircle2 size={13} className="text-[#0a0a0a] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Link Anchor */}
            <div className="relative z-10 pt-10 mt-auto flex items-center justify-between border-t border-slate-100/80">
              <span className="text-[11px] font-bold text-slate-400 tracking-wider">
                Ecosystem Node v1.0
              </span>
              <a
                href={company.url}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0a0a0a] uppercase tracking-wider hover:underline"
              >
                <span>Launch platform console</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer CTA on Portfolio page */}
      <div id="portfolio-footer-cta" className="text-center pt-16 pb-8 border-t border-slate-100 max-w-[500px] mx-auto flex flex-col items-center gap-2">
        <p className="text-[14px] font-medium text-[#888888] italic">
          "More companies coming soon."
        </p>
        <span className="text-[11px] text-slate-300 font-semibold tracking-widest uppercase">
          No external placeholders or simulated domains.
        </span>
      </div>
    </div>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass, Shield, Users, Rocket, Zap, HeartHandshake } from 'lucide-react';

interface AboutSectionProps {
  onNavigate: (page: string) => void;
  key?: string;
}

export default function AboutSection({ onNavigate }: AboutSectionProps) {
  const milestones = [
    {
      year: 'Phase 1',
      title: 'Venture Studio Inception',
      description: 'Conceptualization of a unified, high-performance ecosystem where digital assets and engineering resources are shared seamlessly to compound scale and capability.',
    },
    {
      year: 'Phase 2',
      title: 'Infrastructure Building',
      description: 'Launch of Varta (WhatsApp engagement technology) and Flowzio (direct prompt Al WhatsApp agent builders), proving operational capabilities in high-frequency messaging spheres.',
    },
    {
      year: 'Phase 3',
      title: 'Operational Expansion & Outreaches',
      description: 'Creation of Flodon (systems operations consulting) and Conquer (entrepreneurial ecosystem community) to fully encapsulate the scale requirements of next-generation digital builders.',
    }
  ];

  return (
    <div id="about-page" className="w-full max-w-[900px] mx-auto px-6 py-12 flex flex-col gap-16 md:gap-20">
      {/* Editorial Header */}
      <div id="about-editorial-header" className="flex flex-col items-start gap-4 pt-8">
        <span className="text-[11px] font-bold text-slate-400 tracking-widest uppercase">
          OUR GENESIS
        </span>
        <h1 className="font-display text-[42px] md:text-[54px] font-bold text-[#0a0a0a] tracking-tight leading-tight">
          Building Companies<br />That Compound
        </h1>
        <div className="w-20 h-[2px] bg-[#0a0a0a] mt-4" />
      </div>

      {/* Main Philosophy Editorial Column */}
      <article id="about-manifesto" className="flex flex-col gap-8 text-[16px] md:text-[18px] text-slate-700 leading-relaxed font-sans">
        <p className="font-medium text-[#0a0a0a] text-lg md:text-xl selection:bg-slate-200">
          Synthory was founded on the belief that one successful company creates value, but an ecosystem of companies creates opportunities.
        </p>
        <p>
          Rather than building a single business, Synthory focuses on building a network of ventures that strengthen one another while creating long-term value. We maintain tight, specialized operations with reusable data patterns, reducing overhead while accelerating time-to-market.
        </p>
        <p>
          We do not believe in traditional "agency" models where resources are rented indefinitely. Nor are we a traditional passive holding firm. We design products, power ecosystems and lay the foundation of operational digital architectures that will define workflows for enterprises inside scaling demographics.
        </p>
      </article>

      {/* Value Pillars */}
      <section id="about-pillars" className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-100">
        <div className="flex flex-col gap-3">
          <Compass className="w-6 h-6 text-[#0a0a0a]" />
          <h3 className="font-display text-lg font-bold text-[#0a0a0a]">Vision Over Hype</h3>
          <p className="text-[14px] text-[#888888] leading-relaxed">
            We avoid quick valuation tricks, fake metric counts, and startup clichés. We focus on genuine operational utility.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Shield className="w-6 h-6 text-[#0a0a0a]" />
          <h3 className="font-display text-lg font-bold text-[#0a0a0a]">Operational Integrity</h3>
          <p className="text-[14px] text-[#888888] leading-relaxed">
            Our systems and software are built with extreme precision and minimal bloat, ensuring long-term durability.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <HeartHandshake className="w-6 h-6 text-[#0a0a0a]" />
          <h3 className="font-display text-lg font-bold text-[#0a0a0a]">Compunding Loops</h3>
          <p className="text-[14px] text-[#888888] leading-relaxed">
            Every venture under our studio shares technical modules, templates, user networks, and core design learnings.
          </p>
        </div>
      </section>

      {/* Structured Milestone Timeline */}
      <section id="about-milestones" className="flex flex-col gap-8 pt-12 border-t border-slate-100">
        <div className="flex flex-col gap-2">
          <span className="text-[11px] font-bold text-slate-400 tracking-widest uppercase">
            STUDIO TRACEABILITY
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0a0a0a] tracking-tight">
            Ecosystem Landmarks
          </h2>
        </div>

        <div className="flex flex-col gap-8 border-l border-slate-200 pl-4 md:pl-6">
          {milestones.map((landmark) => (
            <div key={landmark.year} className="relative flex flex-col gap-1.5 pl-4">
              {/* Timeline Indicator dot */}
              <div className="absolute left-[-21px] md:left-[-29px] top-1.5 w-2 h-2 rounded-full bg-[#0a0a0a]" />
              <span className="text-[12px] font-bold text-slate-400 tracking-wider uppercase">
                {landmark.year}
              </span>
              <h3 className="font-display text-lg font-bold text-[#0a0a0a]">
                {landmark.title}
              </h3>
              <p className="text-[14px] text-[#888888] leading-relaxed max-w-[650px]">
                {landmark.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Redirection Buttons */}
      <section id="about-navigation-cta" className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8 border-t border-slate-100 mt-6">
        <button
          onClick={() => {
            onNavigate('founders');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-2 text-sm font-bold text-[#0a0a0a] hover:underline cursor-pointer"
        >
          <span>Meet the builders & leadership</span>
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </button>

        <button
          onClick={() => {
            onNavigate('vision');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-2 text-sm font-bold text-[#0a0a0a] hover:underline cursor-pointer"
        >
          <span>Explore our long-term vision roadmap</span>
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </button>
      </section>
    </div>
  );
}

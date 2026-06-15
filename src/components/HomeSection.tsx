import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe, Linkedin, Twitter, Sparkles, AlertCircle, ArrowUpRight, ChevronRight } from 'lucide-react';
import HeroBackground from './HeroBackground';
import Logo from './Logo';
import { PORTFOLIO_COMPANIES, VALUE_CARDS, FOUNDERS, ROADMAP_YEARS } from '../data/synthoryData';

interface HomeSectionProps {
  onNavigate: (page: string) => void;
}

export default function HomeSection({ onNavigate }: HomeSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div id="home-page-container" className="w-full flex flex-col gap-16 md:gap-24">
      {/* ================= S1 HERO ================= */}
      <section 
        id="s1-hero"
        className="relative w-full max-w-[1400px] mx-auto rounded-[48px] bg-white border border-slate-200/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] overflow-hidden h-[600px] flex flex-col"
      >
        {/* Absolutely positioned underlying layer for background video */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
          <video 
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4"
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover scale-105 transition-transform duration-1000"
          />
        </div>

        {/* Content wrapper positioned relative */}
        <div 
          id="hero-content"
          className="relative z-20 flex-1 px-8 md:px-16 pt-12 md:pt-16 flex flex-col items-start max-w-[800px] justify-center"
        >
          <motion.div
            id="hero-content-animator"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-start gap-5 md:gap-6"
          >
            {/* Headline */}
            <h1
              id="hero-headline"
              className="font-display text-[42px] md:text-[56px] font-bold tracking-tight text-[#0a1b33] leading-[1.1] text-left"
              style={{ fontFamily: 'Outfit, var(--font-sans)', maxWidth: '650px' }}
            >
              Building Businesses.<br />
              Backing Founders.<br />
              Creating Opportunities.
            </h1>

            {/* Subheadline */}
            <p
              id="hero-subheadline"
              className="font-sans text-[14px] md:text-[15px] leading-relaxed text-[#64748b] max-w-[550px]"
            >
              Synthory is an ecosystem of companies, communities, and future investment initiatives helping businesses and entrepreneurs grow through technology, systems, mentorship, and strategic support.
            </p>

            {/* Contact Button */}
            <motion.button
              id="hero-btn-contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#0a152d] text-white px-8 py-3.5 rounded-full text-[13px] font-bold tracking-wide shadow-md transition-colors cursor-pointer"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>

        {/* Floating Bottom Navbar */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex items-center bg-white/90 backdrop-blur-2xl px-1.5 py-1.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-200/40"
          >
            {/* Real geometrically matched brand logo */}
            <div className="w-9 h-9 bg-white border border-slate-150/80 shadow-sm rounded-full flex items-center justify-center select-none shrink-0 mr-2 p-1.5">
              <Logo iconOnly={true} className="w-full h-full text-[#0a1b33]" />
            </div>

            {/* Two standard text buttons */}
            <button
              onClick={() => {
                onNavigate('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] px-3 py-1.5 cursor-pointer hover:bg-slate-50 rounded-full transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => {
                onNavigate('docs');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] px-3 py-1.5 cursor-pointer hover:bg-slate-50 rounded-full transition-colors mr-2"
            >
              Docs
            </button>

            {/* Get in touch button on the right */}
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white px-5 py-2 rounded-full text-[12px] font-semibold text-[#0a1b33] border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Get in touch</span>
              <ChevronRight size={13} />
            </button>
          </motion.nav>
        </div>
      </section>


      {/* ================= S2 WHAT IS SYNTHORY ================= */}
      <section 
        id="s2-what-is-synthory"
        className="w-full max-w-[1200px] mx-auto px-6 py-16 md:py-24 border-t border-slate-100 flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[700px] text-center flex flex-col items-center gap-6"
        >
          <div className="text-[11px] font-bold text-slate-400 tracking-widest uppercase">
            STUDIO POSITIONING
          </div>
          <h2 className="font-display text-[36px] md:text-[44px] font-bold text-[#0a0a0a] tracking-tight leading-tight">
            More Than A Company
          </h2>
          <div className="w-12 h-[2px] bg-[#0a0a0a] my-2" />
          <p className="font-sans text-[16px] md:text-[17px] leading-relaxed text-[#888888]">
            Synthory exists to build, support, and scale internet businesses. We create ventures, help companies grow, support ambitious founders, and aim to provide opportunities that accelerate entrepreneurship. Every company within Synthory contributes to a larger mission: Helping people build bigger futures.
          </p>
        </motion.div>
      </section>


      {/* ================= S3 CURRENT ECOSYSTEM / PORTFOLIO ================= */}
      <section 
        id="s3-current-portfolio"
        className="w-full max-w-[1200px] mx-auto px-6 py-12 flex flex-col gap-10"
      >
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-bold text-slate-400 tracking-widest uppercase">
              ACTIVE VENTURES
            </span>
            <h2 className="font-display text-[32px] md:text-[40px] font-bold text-[#0a0a0a] tracking-tight">
              Current Portfolio
            </h2>
          </div>
          <button
            onClick={() => {
              onNavigate('portfolio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#0a0a0a] hover:underline cursor-pointer"
          >
            <span>View all detailed specs</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 2-Column Grid of Companies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {PORTFOLIO_COMPANIES.map((company) => (
            <motion.div
              key={company.id}
              id={`portfolio-card-${company.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onClick={() => {
                onNavigate('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group bg-white border border-[#e0e0e0] hover:border-[#888888] rounded-xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg cursor-pointer h-full relative overflow-hidden"
            >
              {/* Subtle hover background highlight */}
              <div className={`absolute inset-0 bg-gradient-to-br ${company.gradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative z-10 flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400 tracking-widest uppercase">
                    {company.categoryLabel}
                  </span>
                  
                  {/* Status Pill */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-550/10 text-emerald-600 border border-emerald-500/20 text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Active</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-[#0a0a0a]">
                    {company.name}
                  </h3>
                  <p className="font-sans text-[14px] leading-relaxed text-[#888888]">
                    {company.description}
                  </p>
                </div>

                {/* Core Features bullets */}
                <div className="flex flex-col gap-2 pt-2">
                  <span className="text-[10px] font-bold text-[#0a0a0a] tracking-wider uppercase">
                    Core Capabilities
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {company.features.slice(0, 3).map((feat, idx) => (
                      <span 
                        key={idx}
                        className="text-[11px] bg-[#f5f5f5] text-slate-700 px-2.5 py-1 rounded border border-slate-100"
                        style={{ borderRadius: '4px' }}
                      >
                        {feat}
                      </span>
                    ))}
                    {company.features.length > 3 && (
                      <span className="text-[11px] text-slate-400 italic px-1 self-center">
                        +{company.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-6 flex items-center gap-1 text-[13px] font-bold text-[#0a0a0a] group-hover:underline">
                <span>View platform layout</span>
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* ================= S4 HOW WE CREATE VALUE ================= */}
      <section 
        id="s4-how-we-create-value"
        className="w-full bg-[#f9fafb] py-16 md:py-24"
      >
        <div className="w-full max-w-[1200px] mx-auto px-6 flex flex-col gap-10">
          <div className="flex flex-col gap-2 text-center items-center">
            <span className="text-[11px] font-bold text-slate-400 tracking-widest uppercase">
              OPERATIONAL WORKFLOW
            </span>
            <h2 className="font-display text-[32px] md:text-[40px] font-bold text-[#0a0a0a] tracking-tight">
              How We Create Value
            </h2>
            <p className="text-[15px] text-[#888888] max-w-[500px]">
              We offer integrated systems and guidance to take internet businesses from zero to scale.
            </p>
          </div>

          {/* 5 equal-width cards in a row (desktop), scrollable or stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-4">
            {VALUE_CARDS.map((card, i) => (
              <motion.div
                key={card.tag}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, backgroundColor: '#ececec' }}
                className="bg-[#f5f5f5] p-6 rounded-lg flex flex-col gap-4 border border-transparent hover:border-[#e0e0e0] transition-all duration-200"
                style={{ borderRadius: '8px' }}
              >
                <div className="text-[11px] font-bold text-[#0a0a0a] tracking-widest uppercase">
                  {card.tag}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-[16px] font-bold text-[#0a0a0a]">
                    {card.title}
                  </h3>
                  <p className="font-sans text-[13px] leading-relaxed text-[#888888]">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= S5 WHY WE EXIST ================= */}
      <section 
        id="s5-why-we-exist"
        className="w-full max-w-[1200px] mx-auto px-6 py-16 md:py-24 flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-[800px] text-center flex flex-col items-center gap-6"
        >
          <span className="text-[11px] font-bold text-slate-400 tracking-widest uppercase">
            WHY WE EXIST
          </span>
          <h2 className="font-display text-[32px] md:text-[40px] font-bold text-[#0a0a0a] tracking-tight">
            Ambition Needs Opportunity
          </h2>
          <div className="w-16 h-[1px] bg-[#e0e0e0]" />

          <div className="font-display text-2xl md:text-3xl text-[#0a0a0a] font-medium leading-relaxed max-w-[700px] py-4">
            "Many people have ambition. <span className="font-bold underline decoration-[#888888] decoration-wavy underline-offset-8">Few people have access.</span>"
          </div>
          
          <p className="font-sans text-[15px] leading-relaxed text-[#888888] max-w-[650px]">
            Synthory exists to close that gap through businesses, communities, technology, mentorship, partnerships, and future investment initiatives. We provide high-potential builders the execution ecosystem necessary to actualize scalable digital systems.
          </p>
        </motion.div>
      </section>


      {/* ================= S6 FOUNDERS ================= */}
      <section 
        id="s6-founders"
        className="w-full bg-white py-16 md:py-24 border-t border-b border-slate-150/50"
      >
        <div className="w-full max-w-[1200px] mx-auto px-6 flex flex-col gap-12">
          <div className="flex flex-col gap-2 text-center items-center">
            <span className="text-[11px] font-bold text-slate-400 tracking-widest uppercase">
              LEADERSHIP Team
            </span>
            <h2 className="font-display text-[32px] md:text-[40px] font-bold text-[#0a0a0a] tracking-tight">
              Meet The Builders
            </h2>
            <p className="text-[14px] text-[#888888] max-w-[450px]">
              Balanced, visionary execution across business engineering and community scaling.
            </p>
          </div>

          {/* Two founder cards side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[900px] mx-auto w-full">
            {FOUNDERS.map((founder) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center md:items-start text-center md:text-left gap-5"
              >
                {/* Photo monogram placeholder (400x400 minimum in specs, styled clean) */}
                <div 
                  className="w-[220px] h-[220px] bg-[#f5f5f5] text-slate-800 font-display text-[64px] font-bold tracking-tight flex items-center justify-center relative group overflow-hidden border border-slate-100 hover:border-slate-300 transition-colors"
                  style={{ borderRadius: '8px' }}
                >
                  <span>{founder.initials}</span>
                  {/* Dynamic background lighting */}
                  <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(0,0,0,0)_60%,rgba(0,0,0,0.03)_100%]" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-[22px] md:text-[24px] font-bold text-[#0a0a0a]">
                    {founder.name}
                  </h3>
                  <div className="text-[12px] font-bold text-[#888888] tracking-widest uppercase">
                    {founder.role}
                  </div>
                </div>

                <p className="font-sans text-[13px] md:text-[14px] leading-relaxed text-[#888888] max-w-[360px]">
                  {founder.bio}
                </p>

                {/* Social Links (20px, gray, hover -> black) */}
                <div className="flex items-center gap-3">
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
      </section>


      {/* ================= S7 VISION ================= */}
      <section 
        id="s7-vision"
        className="w-full max-w-[1200px] mx-auto px-6 py-12 flex flex-col gap-12"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#e0e0e0] pb-6">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-bold text-slate-400 tracking-widest uppercase">
              DECADAL STRATEGY
            </span>
            <h2 className="font-display text-[32px] md:text-[40px] font-bold text-[#0a0a0a] tracking-tight">
              Building For Decades
            </h2>
          </div>
          <button
            onClick={() => {
              onNavigate('vision');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#0a0a0a] hover:underline cursor-pointer"
          >
            <span>Explore full expansion roadmap</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-4">
          <div className="flex flex-col gap-6">
            <p className="font-sans text-[16px] leading-relaxed text-[#888888]">
              Today's portfolio is only the foundation. Over time Synthory intends to expand into new industries, launch additional ventures, support founders, create strategic partnerships, and eventually establish investment initiatives. 
            </p>
            <p className="font-sans text-[16px] leading-relaxed text-[#888888]">
              The goal is simple: Build a world-class ecosystem that helps businesses and people grow with sustainable compounding loops.
            </p>
          </div>

          {/* Clean text-based roadmap timeline */}
          <div className="flex flex-col gap-6 pl-4 border-l-2 border-slate-100">
            {ROADMAP_YEARS.map((year, idx) => (
              <div key={idx} className="relative flex flex-col gap-1 group pl-4">
                {/* Dot marker */}
                <div className="absolute left-[-21px] top-1.5 w-2 h-2 rounded-full bg-slate-400 group-hover:bg-[#0a0a0a] transition-colors" />
                <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">
                  {year.phase}
                </span>
                <h4 className="font-display text-[15px] font-bold text-[#0a0a0a]">
                  {year.title}
                </h4>
                <p className="font-sans text-[13px] text-[#888888]">
                  {year.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= S8 FINAL CTA ================= */}
      <section 
        id="s8-final-cta"
        className="w-full bg-[#0a0a0a] rounded-[36px] max-w-[1200px] mx-auto py-16 md:py-20 px-6 text-center text-white"
        style={{ color: '#ffffff' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[600px] mx-auto flex flex-col items-center gap-6"
        >
          <span className="text-[11px] font-bold text-slate-400 tracking-widest uppercase">
            ENGAGE WITH US
          </span>
          <h2 className="font-display text-[36px] md:text-[44px] font-bold text-white tracking-tight">
            Join The Journey
          </h2>
          <p className="font-sans text-[14px] md:text-[15px] text-slate-400 leading-relaxed max-w-[450px]">
            Whether you're a founder, business, or partner — let's connect. Share your vision and lets scale together.
          </p>
          <motion.button
            id="final-cta-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-white text-[#0a0a0a] font-bold px-8 py-4 rounded-[4px] text-[14px] tracking-wider uppercase shadow-lg hover:bg-slate-100 transition-colors cursor-pointer mt-2"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}

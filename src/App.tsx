import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import Marquee from './components/Marquee';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import VisionSection from './components/VisionSection';
import FoundersSection from './components/FoundersSection';
import ContactSection from './components/ContactSection';
import DocsSection from './components/DocsSection';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Sync state with location hash for back button and bookmarks
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/portfolio') {
        setActivePage('portfolio');
      } else if (hash === '#/vision') {
        setActivePage('vision');
      } else if (hash === '#/about') {
        setActivePage('about');
      } else if (hash === '#/founders') {
        setActivePage('founders');
      } else if (hash === '#/docs') {
        setActivePage('docs');
      } else if (hash === '#/contact') {
        setActivePage('contact');
      } else {
        setActivePage('home');
      }
      window.scrollTo(0, 0);
    };

    // Initialize on load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPage = (pageId: string) => {
    if (pageId === 'home') {
      window.location.hash = '#/';
    } else {
      window.location.hash = `#/${pageId}`;
    }
  };

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return (
          <div key="home-page" className="w-full flex flex-col gap-10">
            <HomeSection onNavigate={navigateToPage} />
            
            {/* Seamless Logo Marquee directly below Hero (between S1 and S2) is placed natively in HomeSection, 
                or we can render it beautifully here right under index [S1 Hero is index 0 in HomeSection] */}
          </div>
        );
      case 'portfolio':
        return <PortfolioSection key="portfolio-page" />;
      case 'about':
        return <AboutSection key="about-page" onNavigate={navigateToPage} />;
      case 'vision':
        return <VisionSection key="vision-page" onNavigate={navigateToPage} />;
      case 'founders':
        return <FoundersSection key="founders-page" />;
      case 'docs':
        return <DocsSection key="docs-page" onNavigate={navigateToPage} />;
      case 'contact':
        return <ContactSection key="contact-page" />;
      default:
        return <HomeSection onNavigate={navigateToPage} />;
    }
  };

  return (
    <div id="app-root-wrapper" className="min-h-screen bg-[#f9fafb] text-[#0a0a0a] flex flex-col selection:bg-slate-200">
      {/* 1. Header Site Navigation */}
      <Header activePage={activePage} onNavigate={navigateToPage} />

      {/* Main Container Wrapper with Top Padding to compensate for standard fixed Header (py-4 is ~80px) */}
      <main 
        id="main-scroller" 
        className="flex-1 w-full pt-24 md:pt-32 px-4 md:px-8 max-w-[1400px] mx-auto flex flex-col items-center justify-start pb-12"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="w-full focus:outline-none"
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>

        {/* Seamless Marquee Scroller shown on Home page, integrated spacing */}
        {activePage === 'home' && (
          <div id="home-marquee-wrapper" className="w-full max-w-[1200px] mx-auto mt-12">
            <div className="flex flex-col gap-2 items-center text-center pb-2">
              <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                INTEGRATION ECOSYSTEM SPHERE
              </span>
            </div>
            <Marquee />
          </div>
        )}
      </main>

      {/* Footer Navigation */}
      <Footer activePage={activePage} onNavigate={navigateToPage} />
    </div>
  );
}

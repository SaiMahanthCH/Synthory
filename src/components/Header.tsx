import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ activePage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll to style the header dynamically
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Portfolio', id: 'portfolio', path: '#/portfolio' },
    { label: 'Vision', id: 'vision', path: '#/vision' },
    { label: 'About', id: 'about', path: '#/about' },
    { label: 'Founders', id: 'founders', path: '#/founders' },
    { label: 'Docs', id: 'docs', path: '#/docs' },
  ];

  const handleLinkClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="site-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-[#e0e0e0] shadow-sm py-3 h-16' 
            : 'bg-white/80 backdrop-blur-sm border-b border-transparent py-4 h-20'
        } flex items-center justify-between px-6 md:px-12 w-full`}
      >
        {/* Left Side: Logo */}
        <div 
          className="cursor-pointer" 
          onClick={() => handleLinkClick('home')}
        >
          <Logo />
        </div>

        {/* Right Side: Desktop Nav Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className={`text-[14px] font-medium transition-all duration-200 cursor-pointer relative py-1 ${
                  isActive 
                    ? 'text-[#0a0a0a] font-semibold' 
                    : 'text-[#888888] hover:text-[#0a0a0a]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0a0a0a]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}

          {/* Contact Button */}
          <button
            id="nav-link-contact"
            onClick={() => handleLinkClick('contact')}
            className={`text-[14px] font-bold tracking-wide uppercase px-5 py-2.5 rounded border transition-all duration-200 cursor-pointer ${
              activePage === 'contact'
                ? 'bg-[#0a0a0a] text-white border-[#0a0a0a]'
                : 'bg-transparent text-[#0a0a0a] border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white'
            }`}
            style={{ borderRadius: '4px' }}
          >
            Contact
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-[#0a0a0a] hover:text-[#888888] transition-colors focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-y-0 right-0 left-0 top-[64px] bg-white z-40 flex flex-col px-6 py-12 md:hidden border-t border-[#e0e0e0]"
          >
            <div className="flex flex-col gap-6">
              <button
                id="mobile-link-home"
                onClick={() => handleLinkClick('home')}
                className={`text-left text-2xl font-semibold tracking-tight py-2 ${
                  activePage === 'home' ? 'text-[#0a0a0a]' : 'text-[#888888]'
                }`}
              >
                Home
              </button>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-link-${item.id}`}
                  onClick={() => handleLinkClick(item.id)}
                  className={`text-left text-2xl font-semibold tracking-tight py-2 ${
                    activePage === item.id ? 'text-[#0a0a0a]' : 'text-[#888888]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <hr className="border-[#e0e0e0] my-2" />
              <button
                id="mobile-link-contact"
                onClick={() => handleLinkClick('contact')}
                className={`text-center text-lg font-bold tracking-wider uppercase py-4 rounded-md transition-all duration-200 ${
                  activePage === 'contact'
                    ? 'bg-[#0a0a0a] text-white'
                    : 'bg-transparent text-[#0a0a0a] border border-[#0a0a0a]'
                }`}
              >
                Contact Us
              </button>
            </div>
            
            <div className="mt-auto pt-8 border-t border-[#e0e0e0] text-center text-xs text-[#888888]">
              Synthory — Building businesses. Backing founders.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

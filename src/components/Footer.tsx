import React from 'react';
import Logo from './Logo';
import { Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  activePage: string;
}

export default function Footer({ onNavigate, activePage }: FooterProps) {
  const handleLinkClick = (pageId: string) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Vision', id: 'vision' },
    { label: 'About', id: 'about' },
    { label: 'Founders', id: 'founders' },
    { label: 'Docs', id: 'docs' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer
      id="site-footer"
      className="w-full bg-[#fafafa] border-t border-[#e0e0e0] py-10 px-6 md:px-12 flex flex-col items-center gap-6 mt-16"
    >
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Logo */}
        <div 
          className="cursor-pointer"
          onClick={() => handleLinkClick('home')}
        >
          <Logo iconOnly={false} />
        </div>

        {/* Center: Navigation Links */}
        <div id="footer-nav-links" className="flex flex-wrap justify-center items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`footer-link-${item.id}`}
              onClick={() => handleLinkClick(item.id)}
              className={`text-[13px] font-medium transition-colors cursor-pointer ${
                activePage === item.id 
                  ? 'text-[#0a0a0a] font-semibold underline decoration-1 underline-offset-4' 
                  : 'text-[#888888] hover:text-[#0a0a0a]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right: Social Links (20px, gray, hover -> black) */}
        <div id="footer-socials" className="flex items-center gap-4">
          <a
            href="https://linkedin.com/company/synthory"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#888888] hover:text-[#0a0a0a] transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://twitter.com/synthory"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#888888] hover:text-[#0a0a0a] transition-colors"
            title="Twitter"
          >
            <Twitter size={20} />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full max-w-[1200px] h-[1px] bg-[#e0e0e0] my-2" />

      {/* Tagline & Copyright */}
      <div className="w-full max-w-[1200px] flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4 text-[12px] text-[#888888]">
        <div className="italic font-medium">
          Building Businesses. Backing Founders. Creating Opportunities.
        </div>
        <div className="flex flex-col sm:items-end gap-1.5">
          <div>
            © {new Date().getFullYear()} Synthory. All rights reserved. Version 1.0. Confidential.
          </div>
          <div className="text-[13px] text-[#888888]">
            Webpage made by{' '}
            <a
              href="https://saimahanthch.github.io/Sai/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-signature text-xl font-bold text-[#0a0a0a] hover:text-[#555555] transition-colors ml-0.5 inline-block cursor-pointer align-middle"
              style={{ fontFamily: '"Caveat", cursive' }}
            >
              Sai Mahanth
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

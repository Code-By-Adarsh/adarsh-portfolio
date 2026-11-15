'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Terminal, Download, FileText } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { portfolioData } from '@/data/portfolioData';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Terminal className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-slate-100 group-hover:text-cyan-400 transition-colors">
                {portfolioData.personal.shortName}
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-cyan-400/90 -mt-1">
                QA &amp; Automation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 rounded-full px-4 py-1.5 bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs lg:text-sm font-medium px-3.5 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-slate-800/70 transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Resume Download Button + ThemeToggle */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/Adarsh_Mishra_Resume.pdf"
              download="Adarsh_Mishra_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all flex items-center gap-1.5 group"
            >
              <Download className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="/Adarsh_Mishra_Resume.pdf"
              download="Adarsh_Mishra_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 flex items-center gap-1"
            >
              <Download className="w-3 h-3" />
              <span>Resume</span>
            </a>
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-slate-950/95 border border-slate-800 backdrop-blur-xl shadow-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium px-4 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800 mt-2 flex flex-col gap-2">
              <a
                href="/Adarsh_Mishra_Resume.pdf"
                download="Adarsh_Mishra_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-center font-semibold py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white flex items-center justify-center gap-1.5 shadow-md shadow-cyan-500/20"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Latest Resume (PDF)</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

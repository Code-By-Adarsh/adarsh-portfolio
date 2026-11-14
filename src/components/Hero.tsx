'use client';

import Image from 'next/image';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Twitter, 
  ShieldCheck, 
  Sparkles, 
  FileText, 
  Terminal, 
  CheckCircle2,
  Bug
} from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Decorative radial blur spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-cyan-500/20 via-indigo-600/15 to-transparent blur-3xl pointer-events-none rounded-full -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-accent/15 blur-3xl pointer-events-none rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium tracking-wide shadow-sm shadow-cyan-500/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personal.statusBadge}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">Web3 & Automation</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                  {personal.shortName}
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 leading-snug">
                {personal.tagline}
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              Specialized in <span className="text-cyan-300 font-medium">Selenium</span>, <span className="text-cyan-300 font-medium">Playwright</span>, <span className="text-cyan-300 font-medium">API Testing (Postman)</span>, and production <span className="text-indigo-300 font-medium">Web3 dApp QA</span>. Founder of <a href="https://www.skillta.tech" target="_blank" rel="noreferrer" className="text-cyan-400 underline decoration-cyan-500/40 hover:decoration-cyan-400 font-medium">SkillTa</a> and creator of <span className="text-cyan-300 font-medium">Mail-Karo</span> AI SaaS.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
              >
                <span>View Tested Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/70 hover:border-cyan-500/40 font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Get In Touch / Hire</span>
              </a>
            </div>

            {/* Social Icons row */}
            <div className="pt-4 flex items-center gap-4 text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-[#0a66c2] hover:border-[#0a66c2]/50 hover:bg-slate-800 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personal.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Avatar & Live QA Terminal Badge */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Visual Photo Card */}
            <div className="relative group">
              {/* Outer Neon Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-teal-400 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-700 animate-tilt"></div>
              
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-slate-950 p-2 border border-slate-700/60 shadow-2xl overflow-hidden">
                <Image
                  src={personal.avatarUrl}
                  alt={personal.name}
                  width={320}
                  height={320}
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  priority
                  unoptimized
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md border border-slate-700/70 p-2.5 rounded-xl flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-semibold text-white">Adarsh Mishra</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800/40">
                    QA Tester & Dev
                  </span>
                </div>
              </div>
            </div>

            {/* QA Test Execution Card Preview */}
            <div className="w-full max-w-sm mt-6 p-3.5 rounded-2xl bg-slate-950/90 border border-slate-800/90 shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>test_runner.log</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>PASS 100%</span>
                </div>
              </div>
              <div className="space-y-1 font-mono text-[10px] sm:text-[11px] text-slate-300">
                <div className="flex items-center justify-between text-slate-300">
                  <span>✔ test_web3_metamask_flow()</span>
                  <span className="text-cyan-400">240ms</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>✔ test_ecom_checkout_bva()</span>
                  <span className="text-cyan-400">115ms</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>✔ test_gemini_api_mail_karo()</span>
                  <span className="text-cyan-400">310ms</span>
                </div>
                <div className="pt-1.5 text-emerald-400 font-semibold border-t border-slate-800/60 flex items-center justify-between">
                  <span>Suite Result:</span>
                  <span>108 Passed • 0 Flaky</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

'use client';

import { 
  ShieldCheck, 
  Code2, 
  Layers, 
  MapPin, 
  GraduationCap, 
  CheckCircle, 
  Terminal,
  Zap,
  Users
} from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/40 mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Testing with Precision,{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Leading with Quality
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            I don&apos;t just write automated test scripts; I think like a user, break things like an adversary, and architect maintainable test suites across Web, Android, and Web3 environments.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80 shadow-xl space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                Comprehensive QA Across Platforms &amp; Architectures
              </h3>
              <p className="text-slate-400">
                My QA background spans 3 distinct production environments: testing decentralized Web3 smart contract flows and MetaMask wallets at <span className="text-white font-medium">Stellar Code</span>, leading testing teams across Web and Android apps at <span className="text-white font-medium">Rablo</span>, and building Selenium/Java Page Object Model automation suites at <span className="text-white font-medium">ConnektSphere</span>.
              </p>
              <p className="text-slate-400">
                Whether applying <span className="text-cyan-300 font-medium">Boundary Value Analysis (BVA)</span> and Equivalence Partitioning to security timeouts in <span className="text-white font-medium">CodeDropz</span>, or running automated Vitest &amp; Playwright regression suites on <span className="text-white font-medium">SkillTa</span>, I ensure zero data leakage, high accessibility, and flawless user journeys.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Web3 wallet &amp; smart contract flows</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Android App &amp; Cross-Browser Testing</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Selenium POM &amp; Playwright E2E</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>QA Team Leadership &amp; Defect Triage</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Facts & Highlights */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 shadow-lg space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                Quick Info
              </h4>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400" /> Location:
                  </span>
                  <span className="text-slate-200 font-medium">Palghar, Maharashtra</span>
                </div>

                <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-slate-400" /> University:
                  </span>
                  <span className="text-slate-200 font-medium">University of Mumbai</span>
                </div>

                <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-slate-400" /> Education:
                  </span>
                  <span className="text-slate-200 font-medium">B.Sc. Computer Science (2027)</span>
                </div>

                <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Users className="w-4 h-4 text-slate-400" /> Leadership:
                  </span>
                  <span className="text-cyan-400 font-medium">QA Team Leader (Rablo)</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-slate-400" /> Focus:
                  </span>
                  <span className="text-cyan-400 font-medium">Automation &amp; STLC</span>
                </div>
              </div>
            </div>

            {/* Quote / Highlight Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-cyan-950/30 to-indigo-950/30 border border-cyan-800/30 relative overflow-hidden">
              <div className="text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">QA Principle</div>
              <p className="text-sm text-slate-300 italic">
                &ldquo;Every defect identified and triaged prior to release preserves user trust, protects business logic, and guarantees system resilience at scale.&rdquo;
              </p>
              <div className="mt-3 text-xs font-semibold text-slate-400">— Adarsh Mishra</div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

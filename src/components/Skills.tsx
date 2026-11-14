'use client';

import { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { CheckCircle2, Cpu, Wrench, Shield, Globe2 } from 'lucide-react';

const categoryIcons: Record<string, any> = {
  'Automation Testing': Cpu,
  'Manual QA & Methodologies': Shield,
  'API & Web3 QA': Globe2,
  'Software Development & AI': Wrench,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const categories = portfolioData.skillCategories;

  return (
    <section id="skills" className="py-24 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/40 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills &amp; Technology Matrix
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Spanning test automation architecture, manual test design (STLC), Web3 transaction validation, and full-stack product building.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat, idx) => {
            const Icon = categoryIcons[cat.name] || Cpu;
            const isActive = activeTab === idx;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? 'bg-cyan-500/15 border-cyan-500/50 text-cyan-300 shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="max-w-4xl mx-auto">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 shadow-2xl backdrop-blur-md">
            
            <div className="mb-8 pb-4 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-white">
                  {categories[activeTab].name}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  {categories[activeTab].description}
                </p>
              </div>
              <span className="text-xs font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 self-start sm:self-auto">
                {categories[activeTab].skills.length} Core Competencies
              </span>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {categories[activeTab].skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/90 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/50">
                      {skill.tag}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-slate-800/80 rounded-full h-1.5 overflow-hidden mt-3">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-1.5 rounded-full transition-all duration-700 group-hover:from-cyan-400 group-hover:to-indigo-400"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

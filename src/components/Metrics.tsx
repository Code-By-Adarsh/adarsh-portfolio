'use client';

import { portfolioData } from '@/data/portfolioData';
import { CheckCircle2, TrendingUp, Compass, Briefcase } from 'lucide-react';

const iconMap = {
  CheckCircle2: CheckCircle2,
  TrendingUp: TrendingUp,
  Compass: Compass,
  Briefcase: Briefcase,
};

export default function Metrics() {
  return (
    <section className="py-12 border-y border-slate-800/80 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {portfolioData.metrics.map((item, idx) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || CheckCircle2;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/70 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 group-hover:text-cyan-400 transition-colors">
                    {item.suffix}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-800/80 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

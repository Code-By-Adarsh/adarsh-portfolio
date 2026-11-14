'use client';

import { useState } from 'react';
import { portfolioData, Project } from '@/data/portfolioData';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  CheckCircle, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';

const filterCategories = ['All', 'Full-Stack & AI', 'QA Automation', 'Manual QA & STLC'] as const;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const { projects } = portfolioData;

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/40 mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Engineered Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects &amp; Testing Suites
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-3">
              A curated selection of live AI products, automation frameworks, and end-to-end QA case studies.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition-all border ${
                  activeFilter === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-md shadow-cyan-500/10'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/70 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                
                {/* Top Badge & Links */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-950/70 text-cyan-300 border border-cyan-800/50 font-medium">
                    {project.category}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700/60"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 transition-colors border border-cyan-500/30"
                        aria-label="Live Demo"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-cyan-400/90 text-xs sm:text-sm font-medium mt-1">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics Badges if present */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-2 my-4">
                    {project.metrics.map((m, mIdx) => (
                      <span
                        key={mIdx}
                        className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-emerald-950/40 text-emerald-400 border border-emerald-800/40"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                )}

                {/* Highlights List */}
                <ul className="space-y-1.5 my-4 pt-2 border-t border-slate-800/70 text-xs sm:text-sm text-slate-300">
                  {project.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 mt-1 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Bottom: Tech Stack tags */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-950 text-slate-400 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

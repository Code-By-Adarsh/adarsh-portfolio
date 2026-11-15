'use client';

import { portfolioData } from '@/data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  CheckCircle2, 
  Download, 
  FileText, 
  Award, 
  FileCheck,
  Image as ImageIcon 
} from 'lucide-react';

export default function Experience() {
  const { experiences } = portfolioData;

  const getDocIcon = (type: string, label: string) => {
    if (type === 'image' || label.toLowerCase().includes('photo')) {
      return <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />;
    }
    if (label.toLowerCase().includes('recommendation') || label.toLowerCase().includes('lor')) {
      return <FileCheck className="w-3.5 h-3.5 text-emerald-400" />;
    }
    if (label.toLowerCase().includes('certificate') || label.toLowerCase().includes('completion')) {
      return <Award className="w-3.5 h-3.5 text-amber-400" />;
    }
    return <FileText className="w-3.5 h-3.5 text-cyan-400" />;
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/40 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work &amp; Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Hands-on QA engineering in fast-paced production environments, from decentralized Web3 platforms to enterprise testing and solo founder ventures.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-8 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-500 group-hover:bg-cyan-400 group-hover:scale-125 transition-all shadow-md shadow-cyan-500/20" />

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/70 transition-all duration-300 shadow-xl space-y-4">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                        {exp.badge}
                      </span>
                    </div>
                    <div className="text-slate-300 font-medium text-base mt-0.5 flex items-center gap-2">
                      <span>{exp.company}</span>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 inline-flex items-center"
                          aria-label={`Visit ${exp.company}`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 pt-2 text-slate-300 text-sm leading-relaxed">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Verified Internship Documents & Download Buttons */}
                {exp.documents && exp.documents.length > 0 && (
                  <div className="pt-3 border-t border-slate-800/80">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                      <span>Official Verification Documents:</span>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {exp.documents.map((doc, dIdx) => (
                        <a
                          key={dIdx}
                          href={doc.url}
                          download={doc.downloadName || doc.label}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/80 hover:bg-cyan-950/50 border border-slate-700/80 hover:border-cyan-500/50 text-xs font-medium text-slate-200 hover:text-cyan-300 transition-all shadow-sm group/btn"
                        >
                          {getDocIcon(doc.type, doc.label)}
                          <span>{doc.label}</span>
                          <Download className="w-3 h-3 text-slate-400 group-hover/btn:text-cyan-300 group-hover/btn:translate-y-0.5 transition-all" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills tags */}
                <div className="pt-3 flex flex-wrap gap-2 border-t border-slate-800/80">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

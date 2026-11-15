'use client';

import Image from 'next/image';
import { portfolioData } from '@/data/portfolioData';
import { 
  Award, 
  Terminal, 
  Sparkles, 
  PlayCircle, 
  GraduationCap, 
  BookOpen, 
  Download,
  ExternalLink,
  CheckCircle2,
  FileCheck
} from 'lucide-react';

const certIcons: Record<string, any> = {
  Terminal: Terminal,
  Sparkles: Sparkles,
  PlayCircle: PlayCircle,
  Award: Award,
};

export default function Certifications() {
  const { certifications, education, articles } = portfolioData;

  return (
    <section id="credentials" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/40 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications &amp; Education
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Industry-recognized credentials from Postman, Google, LinkedIn Learning, ISRO, and the University of Mumbai.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, idx) => {
            const Icon = certIcons[cert.iconName] || Award;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/70 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {cert.badgeImage ? (
                      <div className="w-12 h-12 rounded-2xl bg-slate-950 p-1 border border-cyan-500/30 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform shadow-md shadow-cyan-500/10">
                        <Image
                          src={cert.badgeImage}
                          alt={cert.name}
                          width={44}
                          height={44}
                          className="w-full h-full object-contain"
                          unoptimized
                        />
                      </div>
                    ) : (
                      <div className="p-2.5 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                    )}
                    <span className="text-[11px] font-mono text-slate-400">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-xs font-medium text-cyan-400/90 mt-1">
                    {cert.issuer}
                  </p>

                  {cert.badgeText && (
                    <div className="mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-cyan-300 border border-cyan-800/40 inline-block">
                      {cert.badgeText}
                    </div>
                  )}
                </div>

                <div className="space-y-3 pt-4 mt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Download Certificate / Badge Button */}
                  {cert.certificateUrl && (
                    <a
                      href={cert.certificateUrl}
                      download={cert.downloadName || `${cert.name}.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 rounded-xl bg-slate-950 hover:bg-cyan-950/60 border border-slate-700/80 hover:border-cyan-500/60 text-xs font-semibold text-slate-200 hover:text-cyan-300 transition-all flex items-center justify-center gap-1.5 shadow-sm group/btn"
                    >
                      <Download className="w-3.5 h-3.5 text-cyan-400 group-hover/btn:-translate-y-0.5 transition-transform" />
                      <span>{cert.buttonLabel || 'Download Certificate'}</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Education & Writing Dual Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Block */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              Academic Background
            </h3>

            <div className="space-y-4">
              {education.map((edu, eIdx) => (
                <div
                  key={eIdx}
                  className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 shadow-md space-y-2 hover:border-cyan-500/30 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-base font-bold text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-mono text-cyan-400 font-semibold px-2.5 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-800/50 self-start sm:self-auto">
                      {edu.status}
                    </span>
                  </div>
                  
                  <div className="text-xs sm:text-sm text-slate-400">
                    {edu.institution} • {edu.location}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 pt-1 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Articles */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              Technical Writing
            </h3>

            <div className="space-y-4">
              {articles.map((art, aIdx) => (
                <div
                  key={aIdx}
                  className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 shadow-md space-y-2 hover:border-cyan-500/30 transition-all"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                    <span>{art.platform}</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white hover:text-cyan-300 transition-colors">
                    {art.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {art.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

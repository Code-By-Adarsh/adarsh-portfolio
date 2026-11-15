'use client';

import { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Github, 
  Linkedin, 
  Twitter, 
  Globe,
  Loader2,
  AlertCircle
} from 'lucide-react';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setErrorMessage('');

    try {
      // Submits directly to your email via FormSubmit AJAX API
      const response = await fetch(`https://formsubmit.co/ajax/${personal.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Subject: formData.subject || 'New Contact from Portfolio',
          Message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}: ${formData.subject || 'Direct Inquiry'}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success !== 'false') {
        setFormSubmitted(true);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      // Fallback: If network or adblocker blocks FormSubmit, give option to open mailto
      setErrorMessage(
        'Email service is temporarily busy. You can click "Open Email Client" below to send directly!'
      );
    } finally {
      setLoading(false);
    }
  };

  const mailtoHref = `mailto:${personal.email}?subject=${encodeURIComponent(
    formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-24 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/40 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Outreach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Build &amp; Test Together
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Looking for a QA Automation Engineer, Web3 tester, or full-stack collaborator? Send a message directly to my inbox or reach out through my socials.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/40 transition-all shadow-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email Address
                </span>
                <button
                  onClick={copyEmail}
                  className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1 bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700/60 transition-colors"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${personal.email}`}
                className="text-base sm:text-lg font-bold text-white hover:text-cyan-300 transition-colors block break-all"
              >
                {personal.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/40 transition-all shadow-xl space-y-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                <Phone className="w-4 h-4" /> Phone / WhatsApp
              </span>
              <a
                href={`tel:${personal.phone}`}
                className="text-base sm:text-lg font-bold text-white hover:text-cyan-300 transition-colors block"
              >
                {personal.phone}
              </a>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 transition-all shadow-xl space-y-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Location
              </span>
              <div className="text-base font-semibold text-white">
                {personal.location}
              </div>
              <div className="text-xs text-slate-400">
                Open to Remote worldwide &amp; On-Site opportunities.
              </div>
            </div>

            {/* Social Connect Icons */}
            <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 space-y-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Connect Across The Web
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 flex items-center gap-2.5 text-xs font-semibold text-slate-200 hover:text-white transition-all"
                >
                  <Linkedin className="w-4 h-4 text-[#0a66c2]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 flex items-center gap-2.5 text-xs font-semibold text-slate-200 hover:text-white transition-all"
                >
                  <Github className="w-4 h-4 text-white" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personal.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 flex items-center gap-2.5 text-xs font-semibold text-slate-200 hover:text-white transition-all"
                >
                  <Twitter className="w-4 h-4 text-cyan-400" />
                  <span>Twitter / X</span>
                </a>

                <a
                  href={personal.socials.website}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 flex items-center gap-2.5 text-xs font-semibold text-slate-200 hover:text-white transition-all"
                >
                  <Globe className="w-4 h-4 text-indigo-400" />
                  <span>SkillTa Tech</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Direct Email Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/40 border border-slate-800/80 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">
                  Send a Direct Message
                </h3>
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-800/40">
                  Direct to Inbox
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-6">
                Messages sent here go straight to <span className="text-cyan-300 font-medium">{personal.email}</span>.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-800/50 text-center space-y-3 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Thank you! Message Sent Successfully!</h4>
                  <p className="text-sm text-slate-300">
                    Your message was delivered directly to Adarsh&apos;s email inbox. He will get back to you at <span className="text-cyan-300">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs font-mono text-cyan-400 underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 text-amber-300 text-xs flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p>{errorMessage}</p>
                        <a
                          href={mailtoHref}
                          className="font-bold underline text-white hover:text-cyan-300 inline-block pt-1"
                        >
                          Click here to open email client directly &rarr;
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="QA Automation Opportunity / Project Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Adarsh, we're looking for someone to help test our Web3 dApp / automate our e-commerce platform..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-sm transition-colors resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 disabled:opacity-60 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 group"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Delivering Email...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Directly to My Email</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>

                    <a
                      href={mailtoHref}
                      className="py-3.5 px-5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Open Mail App</span>
                    </a>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

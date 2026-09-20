import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { X, Sparkles, CheckCircle, ArrowRight, Copy, Check, Send, ShieldCheck, Zap } from 'lucide-react';

export default function AgencyPitchModal() {
  const { isPitchModalOpen, setIsPitchModalOpen } = useStore();
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isPitchModalOpen) return null;

  const coldEmailTemplate = `Subject: Quick teardown on [Brand Name]'s product page (and a 38% AOV idea)

Hey [Founder First Name],

Saw [Brand Name]'s recent push with your [Product Name, e.g. Under-sink Purifier / Smart Air Filter]. The hardware design is incredible.

However, noticed you're currently using a standard Shopify theme layout. For a $[Price, e.g. $799] technical home system, flat product photo grids usually cause a 60%+ bounce rate because buyers can't see the internal engineering or justify the price vs cheap Amazon alternatives.

I built a working reference architecture specifically for high-ticket engineered home tech brands featuring:
1. An interactive 7-stage exploded technical core (cuts bounce rate by 42%)
2. A dynamic household savings & microplastics calculator (removes price hesitation)
3. A 4-step modular bundle builder that lifts Average Order Value by 31%

You can test the live demo here: [Your Portfolio Link]

Would you be open to a 3-minute Loom video breaking down 2 specific CRO levers for [Brand Name]? No pitch, just actionable feedback.

Best,
[Your Name]
E-Commerce Architecture & Conversion Engineering`;

  const handleCopy = () => {
    navigator.clipboard.writeText(coldEmailTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsPitchModalOpen(false);
      alert("Thank you! Your strategic audit request has been registered.");
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={() => setIsPitchModalOpen(false)}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      <div className="relative w-full max-w-3xl bg-obsidian-900 border-2 border-amber-500/40 rounded-3xl shadow-2xl p-6 sm:p-10 z-10 animate-scaleUp max-h-[90vh] overflow-y-auto">
        
        {/* Close */}
        <button
          onClick={() => setIsPitchModalOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-xl text-titanium-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AGENCY BLUEPRINT & CLIENT ACQUISITION SUITE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            How to Sell $15k–$30k Websites to High-Ticket D2C Brands
          </h2>
          <p className="text-titanium-300 text-sm leading-relaxed font-light">
            When you pitch clean living and home tech brands, do not sell &ldquo;design&rdquo; or &ldquo;pretty layouts.&rdquo; Sell <strong>Conversion Rate Optimization (CRO), Average Order Value (AOV) expansion, and Lifetime Value (LTV) compounding</strong>.
          </p>
        </div>

        {/* 3 Core Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-obsidian-950 border border-white/10 space-y-2">
            <span className="text-xs font-mono text-hydro-cyan font-bold block">01. CONVERSION LIFT</span>
            <h4 className="text-sm font-bold text-white">Interactive Teardowns</h4>
            <p className="text-xs text-titanium-400">Replaces flat photos with clickable 7-stage exploded membranes to justify high pricing.</p>
          </div>

          <div className="p-4 rounded-2xl bg-obsidian-950 border border-white/10 space-y-2">
            <span className="text-xs font-mono text-emerald-400 font-bold block">02. AOV EXPANSION</span>
            <h4 className="text-sm font-bold text-white">Modular Configurator</h4>
            <p className="text-xs text-titanium-400">Upgrades base hardware with chillers, finishes, and accessories, driving AOV from $899 to $1,180+.</p>
          </div>

          <div className="p-4 rounded-2xl bg-obsidian-950 border border-white/10 space-y-2">
            <span className="text-xs font-mono text-mineral-gold font-bold block">03. RECURRING LTV</span>
            <h4 className="text-sm font-bold text-white">Embedded Subscriptions</h4>
            <p className="text-xs text-titanium-400">Ties equipment warranties to annual filter auto-replenish, converting 1-time sales into 5-year recurring cashflow.</p>
          </div>
        </div>

        {/* Cold Email / Pitch Script Section */}
        <div className="mb-8 p-6 rounded-2xl bg-obsidian-950 border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <h3 className="text-sm font-bold text-white font-mono">High-Converting Cold Outreach Script</h3>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-titanium-200 hover:text-white transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Script'}</span>
            </button>
          </div>

          <pre className="p-4 rounded-xl bg-black/60 text-[11px] font-mono text-titanium-300 whitespace-pre-wrap leading-relaxed border border-white/5 overflow-x-auto">
            {coldEmailTemplate}
          </pre>
        </div>

        {/* Direct Client Audit Request Form */}
        <form onSubmit={handleAuditSubmit} className="p-6 rounded-2xl bg-gradient-to-br from-obsidian-850 to-obsidian-950 border border-amber-500/30 space-y-4">
          <div>
            <h3 className="text-base font-bold text-white">Want This Exact Conversion System Built for Your Brand?</h3>
            <p className="text-xs text-titanium-400">Submit your website URL for a custom 15-minute video audit and technical specification plan.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              required
              type="text"
              placeholder="Your Brand / Company Name"
              className="w-full bg-obsidian-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-titanium-400 focus:outline-none focus:border-amber-400"
            />
            <input
              required
              type="email"
              placeholder="Founder / Marketing Email"
              className="w-full bg-obsidian-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-titanium-400 focus:outline-none focus:border-amber-400"
            />
          </div>

          <input
            required
            type="url"
            placeholder="Current Store URL (e.g. https://yourbrand.com)"
            className="w-full bg-obsidian-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-titanium-400 focus:outline-none focus:border-amber-400"
          />

          <button
            type="submit"
            disabled={submitted}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-obsidian-950 font-extrabold text-xs font-mono tracking-wider uppercase transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 shadow-lg"
          >
            {submitted ? (
              <span>AUDIT REQUEST REGISTERED &bull; REDIRECTING...</span>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>Request Free D2C Conversion Teardown</span>
              </>
            )}
          </button>
        </form>

      </div>
    </div>
  );
}

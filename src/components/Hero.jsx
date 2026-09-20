import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { ShieldCheck, Zap, Droplets, ArrowRight, CheckCircle2, ChevronRight, Sparkles, Activity, Layers } from 'lucide-react';
import { PRODUCT_SPECS, AGENCY_CRO_INSIGHTS } from '../data/productData';

export default function Hero() {
  const { isAgencyMode, setIsCartOpen, addToCart } = useStore();
  const [activePreview, setActivePreview] = useState('system'); // 'system' | 'faucet' | 'specs'

  const handleQuickAdd = () => {
    addToCart({
      id: "hero-core-system",
      title: "VAEL H2-Pro™ Pure Core (Complete Setup)",
      finish: "Matte Noir Architectural",
      subscription: "Annual Auto-Replenish (Save 20%)",
      addons: ["Extra Year Mineral Infusion Pods"],
      unitPrice: 899,
      quantity: 1,
      image: "core-noir"
    });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-hydro-cyan/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-hydro-blue/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Agency CRO Strategy Callout */}
        {isAgencyMode && (
          <div className="mb-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs backdrop-blur-md animate-fadeIn">
            <div className="flex items-center gap-2 font-mono font-bold text-amber-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span>CRO STRATEGY: {AGENCY_CRO_INSIGHTS.hero.title}</span>
              <span className="ml-auto bg-amber-500/20 px-2 py-0.5 rounded text-[11px] text-amber-300 font-sans font-semibold">
                {AGENCY_CRO_INSIGHTS.hero.expectedImpact}
              </span>
            </div>
            <p className="text-titanium-300 leading-relaxed">
              {AGENCY_CRO_INSIGHTS.hero.strategy}
            </p>
          </div>
        )}

        {/* Top Badges & Pill */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-850/80 border border-hydro-cyan/30 text-hydro-cyan text-xs font-mono shadow-glow-cyan">
            <span className="w-2 h-2 rounded-full bg-hydro-cyan animate-pulse"></span>
            <span>2026 MOLECULAR HYDRATION BREAKTHROUGH</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-obsidian-900 border border-white/10 text-titanium-300 text-xs font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>NSF/ANSI 58 & 401 Certified</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-obsidian-900 border border-white/10 text-titanium-300 text-xs font-medium">
            <Activity className="w-3.5 h-3.5 text-hydro-cyan" />
            <span>0.00% PFAS Forever Chemicals</span>
          </div>
        </div>

        {/* Grid: Headline + Visual System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Cellular Hydration. <br />
              <span className="text-gradient-cyan">Engineered With 0.0001μ Precision.</span>
            </h1>

            <p className="text-base sm:text-lg text-titanium-300 max-w-2xl leading-relaxed font-light">
              The world’s first medical-grade 7-stage under-counter reverse osmosis system with <strong className="text-white font-medium">active bio-mineralization</strong> and <strong className="text-white font-medium">real-time OLED purity telemetry</strong>. Pure alpine hydration delivered at 800 GPD high-velocity flow.
            </p>

            {/* Spec Quick Ticker */}
            <div className="grid grid-cols-3 gap-3 pt-2 pb-2 border-y border-white/10 max-w-xl">
              <div className="space-y-0.5">
                <span className="text-[11px] font-mono text-titanium-400 uppercase">Pore Size</span>
                <p className="text-base sm:text-lg font-bold text-white font-mono">0.0001 <span className="text-xs text-hydro-cyan font-normal">Micron</span></p>
                <p className="text-[11px] text-titanium-400">500,000x &lt; hair</p>
              </div>
              <div className="space-y-0.5 border-x border-white/10 px-3">
                <span className="text-[11px] font-mono text-titanium-400 uppercase">Flow Rate</span>
                <p className="text-base sm:text-lg font-bold text-white font-mono">800 <span className="text-xs text-hydro-cyan font-normal">GPD</span></p>
                <p className="text-[11px] text-titanium-400">1 Glass in 5.8s</p>
              </div>
              <div className="space-y-0.5 pl-3">
                <span className="text-[11px] font-mono text-titanium-400 uppercase">Eco Ratio</span>
                <p className="text-base sm:text-lg font-bold text-white font-mono">2 : 1 <span className="text-xs text-emerald-400 font-normal">Ratio</span></p>
                <p className="text-[11px] text-titanium-400">Zero plastic waste</p>
              </div>
            </div>

            {/* Primary Action Button & Financing */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#builder"
                  className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-hydro-cyan via-hydro-glow to-hydro-blue text-obsidian-950 font-bold text-base shadow-glow-cyan transition-all hover:scale-[1.02] active:scale-95"
                >
                  <span>Build Your Pure System</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#engineering"
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 border border-white/10 hover:border-hydro-cyan/40 text-white font-medium text-sm transition-all"
                >
                  <Layers className="w-4 h-4 text-hydro-cyan" />
                  <span>Inspect 7-Stage Core</span>
                </a>
              </div>

              {/* Financing anchor pill */}
              <div className="flex items-center gap-2 text-xs text-titanium-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Starting at <strong>${PRODUCT_SPECS.basePrice}</strong> or <strong>${PRODUCT_SPECS.monthlyPrice}/mo</strong> with Affirm or Klarna. 0% APR available.</span>
              </div>
            </div>

            {/* Risk Reversal Guarantee */}
            <div className="flex flex-wrap items-center gap-6 pt-3 text-xs text-titanium-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-hydro-cyan" />
                <span>100-Day In-Home Water Trial</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-hydro-cyan" />
                <span>Lifetime Warranty On Subscription</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-hydro-cyan" />
                <span>Free Insured Express Shipping</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Interactive Product Visualizer */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-6 bg-glass-card border border-white/10 shadow-card-elevated">
              
              {/* Visualizer header controls */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-xs font-mono font-medium text-titanium-300">CORE STATUS: ACTIVE PURITY</span>
                </div>
                <div className="flex gap-1.5 bg-obsidian-900 p-1 rounded-lg border border-white/5">
                  <button
                    onClick={() => setActivePreview('system')}
                    className={`text-[11px] font-mono px-2.5 py-1 rounded-md transition-colors ${
                      activePreview === 'system' ? 'bg-hydro-cyan text-obsidian-950 font-bold' : 'text-titanium-400 hover:text-white'
                    }`}
                  >
                    Core Chassis
                  </button>
                  <button
                    onClick={() => setActivePreview('faucet')}
                    className={`text-[11px] font-mono px-2.5 py-1 rounded-md transition-colors ${
                      activePreview === 'faucet' ? 'bg-hydro-cyan text-obsidian-950 font-bold' : 'text-titanium-400 hover:text-white'
                    }`}
                  >
                    OLED Faucet
                  </button>
                  <button
                    onClick={() => setActivePreview('specs')}
                    className={`text-[11px] font-mono px-2.5 py-1 rounded-md transition-colors ${
                      activePreview === 'specs' ? 'bg-hydro-cyan text-obsidian-950 font-bold' : 'text-titanium-400 hover:text-white'
                    }`}
                  >
                    Telemetry
                  </button>
                </div>
              </div>

              {/* Visual Representation Area */}
              <div className="relative h-80 rounded-2xl bg-gradient-to-b from-obsidian-900 to-obsidian-950 border border-white/5 flex flex-col items-center justify-center p-6 overflow-hidden">
                
                {/* Background blueprint grid lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                {activePreview === 'system' && (
                  <div className="relative z-10 text-center space-y-4 animate-fadeIn">
                    {/* SVG Graphic representation of the Ultra-Slim Core Unit */}
                    <div className="relative mx-auto w-48 h-56 rounded-2xl bg-gradient-to-br from-obsidian-800 via-obsidian-900 to-black border-2 border-white/15 p-4 shadow-2xl flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div className="w-7 h-7 rounded-lg bg-hydro-cyan/10 border border-hydro-cyan/40 flex items-center justify-center">
                          <Droplets className="w-4 h-4 text-hydro-cyan animate-pulse" />
                        </div>
                        <span className="font-mono text-[10px] text-titanium-400 tracking-wider">H2-PRO TANKLESS</span>
                      </div>

                      {/* 7-Stage Core Glow Visual */}
                      <div className="space-y-1 py-2">
                        <div className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-hydro-cyan animate-pulse"></div>
                        <div className="h-1.5 rounded-full bg-gradient-to-r from-hydro-cyan to-emerald-400"></div>
                        <div className="h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300"></div>
                        <div className="flex justify-between text-[9px] font-mono text-titanium-400 pt-1">
                          <span>STAGE 1..7</span>
                          <span className="text-hydro-cyan font-bold">100% HEALTH</span>
                        </div>
                      </div>

                      {/* Diagnostic Display */}
                      <div className="bg-black/60 rounded-xl p-2.5 border border-white/10 text-left space-y-1">
                        <div className="flex justify-between items-center text-[10px] font-mono">
                          <span className="text-titanium-400">OUTFLOW TDS:</span>
                          <span className="text-hydro-cyan font-bold text-xs">3 PPM (PURE)</span>
                        </div>
                        <div className="flex justify-between items-center text-[10px] font-mono">
                          <span className="text-titanium-400">pH BALANCE:</span>
                          <span className="text-emerald-400 font-bold text-xs">8.6 pH (ALKALINE)</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-xs font-mono text-titanium-400">
                      <span>4.5&quot; Tankless Slim Profile &bull; 800 GPD Output</span>
                    </div>
                  </div>
                )}

                {activePreview === 'faucet' && (
                  <div className="relative z-10 text-center space-y-4 animate-fadeIn">
                    <div className="relative mx-auto w-40 h-56 flex flex-col items-center justify-end">
                      {/* Sculptural Gooseneck Faucet with OLED screen */}
                      <div className="w-12 h-36 border-t-8 border-l-8 border-r-0 border-white/30 rounded-tl-full rounded-tr-none"></div>
                      <div className="w-16 h-20 bg-gradient-to-b from-obsidian-800 to-black rounded-t-xl border border-white/20 p-2 text-center space-y-1">
                        <span className="block text-[8px] font-mono text-titanium-400">OLED DISPLAY</span>
                        <span className="block text-sm font-bold text-hydro-cyan font-mono">99.9%</span>
                        <span className="block text-[9px] text-emerald-400 font-mono">BIO-ACTIVE</span>
                      </div>
                      <div className="w-24 h-3 bg-white/20 rounded-full mt-1"></div>
                    </div>
                    <div className="text-xs font-mono text-titanium-400">
                      <span>Smart Faucet with Built-In Real-Time Purity OLED Screen</span>
                    </div>
                  </div>
                )}

                {activePreview === 'specs' && (
                  <div className="relative z-10 w-full max-w-sm space-y-3 animate-fadeIn text-left">
                    <div className="p-3 rounded-xl bg-obsidian-900 border border-white/10 space-y-1">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-titanium-400">PFAS / Forever Chemicals:</span>
                        <span className="text-emerald-400 font-bold">0.00% (Non-Detect)</span>
                      </div>
                      <div className="w-full bg-obsidian-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-400 h-full w-full"></div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-obsidian-900 border border-white/10 space-y-1">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-titanium-400">Microplastics (&lt;1μm):</span>
                        <span className="text-emerald-400 font-bold">100% Eliminated</span>
                      </div>
                      <div className="w-full bg-obsidian-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-400 h-full w-full"></div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-obsidian-900 border border-white/10 space-y-1">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-titanium-400">Alkaline Bio-Minerals:</span>
                        <span className="text-hydro-cyan font-bold">+63 mg/L Active Ions</span>
                      </div>
                      <div className="w-full bg-obsidian-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-hydro-cyan h-full w-[85%]"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Quick Config Summary */}
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <div>
                  <span className="text-titanium-400 font-mono">VAEL H2-PRO SYSTEM</span>
                  <p className="font-bold text-white text-sm font-mono">${PRODUCT_SPECS.basePrice} <span className="line-through text-xs font-normal text-titanium-400">${PRODUCT_SPECS.originalPrice}</span></p>
                </div>
                <button
                  onClick={handleQuickAdd}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-hydro-cyan hover:text-obsidian-950 font-semibold text-xs transition-colors border border-white/15"
                >
                  Quick Add to Bag
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

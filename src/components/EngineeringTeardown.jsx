import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { FILTRATION_STAGES, AGENCY_CRO_INSIGHTS } from '../data/productData';
import { ShieldAlert, CheckCircle, ChevronLeft, ChevronRight, Sparkles, Filter, Activity, Cpu } from 'lucide-react';

export default function EngineeringTeardown() {
  const { isAgencyMode } = useStore();
  const [activeStageIndex, setActiveStageIndex] = useState(2); // Default to Stage 03: Hyper-RO Membrane

  const activeStage = FILTRATION_STAGES[activeStageIndex];

  const handlePrev = () => {
    setActiveStageIndex((prev) => (prev === 0 ? FILTRATION_STAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveStageIndex((prev) => (prev === FILTRATION_STAGES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="engineering" className="py-24 relative border-t border-white/10 bg-obsidian-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Agency CRO Strategy Banner */}
        {isAgencyMode && (
          <div className="mb-8 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs backdrop-blur-md animate-fadeIn">
            <div className="flex items-center gap-2 font-mono font-bold text-amber-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span>CRO STRATEGY: {AGENCY_CRO_INSIGHTS.teardown.title}</span>
              <span className="ml-auto bg-amber-500/20 px-2 py-0.5 rounded text-[11px] text-amber-300 font-sans font-semibold">
                {AGENCY_CRO_INSIGHTS.teardown.expectedImpact}
              </span>
            </div>
            <p className="text-titanium-300 leading-relaxed">
              {AGENCY_CRO_INSIGHTS.teardown.strategy}
            </p>
          </div>
        )}

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-hydro-cyan/10 border border-hydro-cyan/30 text-hydro-cyan text-xs font-mono">
            <Filter className="w-3.5 h-3.5" />
            <span>INTERACTIVE MOLECULAR TEARDOWN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The 7-Stage Molecular <br />
            <span className="text-gradient-cyan">Filtration Architecture</span>
          </h2>
          <p className="text-titanium-300 text-base sm:text-lg font-light">
            Standard filters stop at basic carbon. VAEL combines thin-film aerospace membranes with active bio-remineralization to rebuild municipal tap into pristine living water.
          </p>
        </div>

        {/* 7-Stage Interactive Scrubber Bar */}
        <div className="flex items-center justify-between overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
          {FILTRATION_STAGES.map((stage, idx) => {
            const isActive = idx === activeStageIndex;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageIndex(idx)}
                className={`flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all text-left ${
                  isActive
                    ? 'bg-obsidian-800 border-hydro-cyan shadow-glow-cyan text-white scale-[1.03]'
                    : 'bg-obsidian-850/60 border-white/5 text-titanium-400 hover:text-white hover:border-white/20'
                }`}
              >
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  isActive ? 'bg-hydro-cyan text-obsidian-950' : 'bg-white/10 text-titanium-400'
                }`}>
                  {stage.number}
                </span>
                <div>
                  <p className="text-xs font-semibold leading-tight">{stage.name.split(' ')[0]} {stage.name.split(' ')[1]}</p>
                  <p className="text-[10px] font-mono text-titanium-400">{stage.micron}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Exploration Card */}
        <div className="rounded-3xl bg-glass-card border border-white/10 p-6 sm:p-10 shadow-card-elevated">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visualizer & Animated Membrane Diagram */}
            <div className="lg:col-span-6 relative rounded-2xl bg-gradient-to-br from-obsidian-950 via-obsidian-900 to-obsidian-850 border border-white/10 p-6 flex flex-col justify-between min-h-[360px] overflow-hidden">
              
              {/* Background ambient water glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-hydro-cyan/15 blur-[80px] rounded-full pointer-events-none"></div>

              {/* Card top status indicators */}
              <div className="flex items-center justify-between z-10">
                <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-white/10 text-hydro-cyan border border-hydro-cyan/30">
                  STAGE {activeStage.number} &bull; {activeStage.status.toUpperCase()}
                </span>
                <span className="font-mono text-xs text-titanium-400">
                  PRECISION: <strong className="text-white font-mono">{activeStage.micron}</strong>
                </span>
              </div>

              {/* Animated Layer Cross-Section */}
              <div className="my-8 z-10 text-center space-y-6">
                
                {/* Visual Graphic of the Membrane Layer */}
                <div className="relative mx-auto w-56 h-36 rounded-xl border-2 border-hydro-cyan/50 bg-obsidian-900/90 shadow-glow-cyan p-4 flex flex-col justify-center items-center">
                  
                  {/* Molecular pores visualization */}
                  <div className="grid grid-cols-6 gap-2 w-full mb-3 opacity-70">
                    {Array.from({ length: 18 }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          i % 2 === 0 ? 'bg-hydro-cyan animate-pulse' : 'bg-hydro-blue'
                        }`}
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>

                  <span className="font-mono text-xs text-white font-bold tracking-wide uppercase">
                    {activeStage.name}
                  </span>
                  <span className="text-[10px] text-hydro-cyan font-mono mt-0.5">
                    Barrier Efficacy: {activeStage.efficacy}
                  </span>
                </div>

                {/* Progress indicators dots */}
                <div className="flex items-center justify-center gap-2">
                  {FILTRATION_STAGES.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setActiveStageIndex(dotIdx)}
                      className={`h-1.5 rounded-full transition-all ${
                        dotIdx === activeStageIndex ? 'w-8 bg-hydro-cyan' : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Go to stage ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Navigation controls */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 z-10">
                <button
                  onClick={handlePrev}
                  className="flex items-center gap-1.5 text-xs font-mono text-titanium-300 hover:text-white bg-obsidian-800 px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/30 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous Layer</span>
                </button>

                <span className="text-xs font-mono text-titanium-400">
                  {activeStageIndex + 1} of {FILTRATION_STAGES.length}
                </span>

                <button
                  onClick={handleNext}
                  className="flex items-center gap-1.5 text-xs font-mono text-titanium-300 hover:text-white bg-obsidian-800 px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/30 transition-all"
                >
                  <span>Next Layer</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Scientific Breakdown & Contaminants Removed */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <span className="text-xs font-mono text-hydro-cyan uppercase tracking-wider block mb-1">
                  {activeStage.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeStage.name}
                </h3>
                <p className="text-sm font-mono text-titanium-400 mt-1">
                  Micron Rating: <span className="text-hydro-cyan font-bold">{activeStage.micron}</span> &bull; Verified Efficacy: <span className="text-emerald-400 font-bold">{activeStage.efficacy}</span>
                </p>
              </div>

              <p className="text-titanium-300 text-sm leading-relaxed">
                {activeStage.detailedDesc}
              </p>

              {/* Contaminants Intercepted Badges */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase text-titanium-400 tracking-wider flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-hydro-cyan" />
                  <span>Intercepted & Eliminated Compounds</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeStage.removes.map((item, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-obsidian-950/80 border border-white/10 text-xs text-white"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Spec Callout */}
              <div className="p-4 rounded-xl bg-hydro-cyan/5 border border-hydro-cyan/20 flex items-center justify-between text-xs">
                <div>
                  <span className="text-titanium-400 block font-mono">LABORATORY VERIFICATION</span>
                  <strong className="text-white">Continuous Non-Detect Performance (ND)</strong>
                </div>
                <a
                  href="#proof"
                  className="text-hydro-cyan hover:underline font-mono text-xs flex items-center gap-1"
                >
                  <span>View Lab Report</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

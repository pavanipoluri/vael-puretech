import React from 'react';
import { useStore } from '../context/StoreContext';
import { BUILDER_OPTIONS, AGENCY_CRO_INSIGHTS } from '../data/productData';
import { Check, ShieldCheck, Sparkles, Plus, CheckCircle2, ShoppingBag, Snowflake, Zap, Wrench } from 'lucide-react';

export default function BundleBuilder() {
  const { isAgencyMode, builderState, setBuilderState, calculateBuilderTotal, addCustomBuilderToCart } = useStore();

  const handleSystemSelect = (sys) => {
    setBuilderState(prev => ({ ...prev, system: sys }));
  };

  const handleFinishSelect = (finish) => {
    setBuilderState(prev => ({ ...prev, finish: finish }));
  };

  const handleAddonToggle = (addon) => {
    setBuilderState(prev => {
      const exists = prev.addons.some(a => a.id === addon.id);
      if (exists) {
        return { ...prev, addons: prev.addons.filter(a => a.id !== addon.id) };
      } else {
        return { ...prev, addons: [...prev.addons, addon] };
      }
    });
  };

  const handleSubscriptionSelect = (sub) => {
    setBuilderState(prev => ({ ...prev, subscription: sub }));
  };

  const total = calculateBuilderTotal();
  const monthlyEstimate = Math.round(total / 24);

  const getAddonIcon = (iconName) => {
    switch (iconName) {
      case 'Snowflake': return <Snowflake className="w-5 h-5 text-hydro-cyan" />;
      case 'Zap': return <Zap className="w-5 h-5 text-mineral-gold" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-titanium-300" />;
      default: return <Plus className="w-5 h-5 text-hydro-cyan" />;
    }
  };

  return (
    <section id="builder" className="py-24 relative border-t border-white/10 bg-obsidian-900/40">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-hydro-cyan/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-mineral-gold/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Agency CRO Strategy Banner */}
        {isAgencyMode && (
          <div className="mb-8 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs backdrop-blur-md animate-fadeIn">
            <div className="flex items-center gap-2 font-mono font-bold text-amber-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span>CRO STRATEGY: {AGENCY_CRO_INSIGHTS.builder.title}</span>
              <span className="ml-auto bg-amber-500/20 px-2 py-0.5 rounded text-[11px] text-amber-300 font-sans font-semibold">
                {AGENCY_CRO_INSIGHTS.builder.expectedImpact}
              </span>
            </div>
            <p className="text-titanium-300 leading-relaxed">
              {AGENCY_CRO_INSIGHTS.builder.strategy}
            </p>
          </div>
        )}

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-hydro-cyan" />
            <span>MODULAR ARCHITECTURAL CONFIGURATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Configure Your Custom <br />
            <span className="text-gradient-cyan">Living Water Infrastructure</span>
          </h2>
          <p className="text-titanium-300 text-base sm:text-lg font-light">
            Select your chassis, architectural faucet finish, high-performance modular upgrades, and lifetime warranty plan.
          </p>
        </div>

        {/* 4-Step Configurator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left / Main Steps (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Step 1: System Core Unit */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-hydro-cyan text-obsidian-950 font-bold font-mono text-xs flex items-center justify-center">
                  01
                </span>
                <h3 className="text-xl font-bold text-white">Select Purification Core</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {BUILDER_OPTIONS.systems.map((sys) => {
                  const isSelected = builderState.system.id === sys.id;
                  return (
                    <div
                      key={sys.id}
                      onClick={() => handleSystemSelect(sys)}
                      className={`relative p-6 rounded-2xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-obsidian-800 border-hydro-cyan shadow-glow-cyan'
                          : 'bg-obsidian-850/60 border-white/10 hover:border-white/30 hover:bg-obsidian-850'
                      }`}
                    >
                      {sys.recommended && (
                        <span className="absolute -top-2.5 right-4 bg-gradient-to-r from-hydro-cyan to-hydro-blue text-obsidian-950 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase">
                          Most Popular
                        </span>
                      )}

                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-white text-base">{sys.name}</h4>
                        <span className="text-lg font-mono font-bold text-hydro-cyan">${sys.price}</span>
                      </div>
                      <p className="text-xs text-titanium-300 mb-4 font-light leading-relaxed">{sys.subtitle}</p>

                      <ul className="space-y-1.5 border-t border-white/10 pt-3">
                        {sys.specs.map((spec, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-titanium-300">
                            <Check className="w-3.5 h-3.5 text-hydro-cyan flex-shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Faucet Architectural Finish */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-hydro-cyan text-obsidian-950 font-bold font-mono text-xs flex items-center justify-center">
                  02
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white">Choose Smart Faucet Finish</h3>
                  <p className="text-xs text-titanium-400">Features integrated OLED live purity & TDS display.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {BUILDER_OPTIONS.finishes.map((finish) => {
                  const isSelected = builderState.finish.id === finish.id;
                  return (
                    <button
                      key={finish.id}
                      onClick={() => handleFinishSelect(finish)}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        isSelected
                          ? 'bg-obsidian-800 border-hydro-cyan shadow-glow-cyan scale-[1.02]'
                          : 'bg-obsidian-850/60 border-white/10 hover:border-white/30'
                      }`}
                    >
                      {/* Swatch circle */}
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className="w-6 h-6 rounded-full border border-white/30 shadow-inner"
                          style={{ backgroundColor: finish.colorCode }}
                        />
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-hydro-cyan" />}
                      </div>

                      <p className="text-xs font-bold text-white leading-tight mb-1">{finish.name}</p>
                      <span className="text-[11px] font-mono text-hydro-cyan">
                        {finish.addedPrice === 0 ? 'Included' : `+$${finish.addedPrice}`}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Ecosystem Modular Add-ons */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-hydro-cyan text-obsidian-950 font-bold font-mono text-xs flex items-center justify-center">
                  03
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white">Ecosystem Modular Upgrades</h3>
                  <p className="text-xs text-titanium-400">Optional modules tailored for sub-zero cooling, athletic recovery, or white-glove setup.</p>
                </div>
              </div>

              <div className="space-y-3">
                {BUILDER_OPTIONS.addons.map((addon) => {
                  const isSelected = builderState.addons.some(a => a.id === addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => handleAddonToggle(addon)}
                      className={`p-4 rounded-2xl border cursor-pointer flex items-center justify-between gap-4 transition-all ${
                        isSelected
                          ? 'bg-obsidian-800 border-hydro-cyan shadow-glow-cyan'
                          : 'bg-obsidian-850/60 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="p-2.5 rounded-xl bg-obsidian-950 border border-white/10">
                          {getAddonIcon(addon.icon)}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white">{addon.name}</p>
                          <p className="text-xs text-titanium-400 font-light">{addon.description}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 flex-shrink-0">
                        <span className="text-sm font-mono font-bold text-white">+${addon.price}</span>
                        <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-hydro-cyan border-hydro-cyan text-obsidian-950' : 'border-white/20'
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Subscription & Lifetime Warranty Tier */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-hydro-cyan text-obsidian-950 font-bold font-mono text-xs flex items-center justify-center">
                  04
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white">Filter Pod Replenishment & Warranty Plan</h3>
                  <p className="text-xs text-titanium-400">Lock in continuous warranty protection and discounted replenishment pods.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {BUILDER_OPTIONS.subscriptions.map((sub) => {
                  const isSelected = builderState.subscription.id === sub.id;
                  return (
                    <div
                      key={sub.id}
                      onClick={() => handleSubscriptionSelect(sub)}
                      className={`p-6 rounded-2xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-obsidian-800 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.2)]'
                          : 'bg-obsidian-850/60 border-white/10 hover:border-white/30'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                          sub.recommended ? 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/30' : 'bg-white/10 text-titanium-400'
                        }`}>
                          {sub.discount}
                        </span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                      </div>

                      <h4 className="font-bold text-white text-sm mb-1">{sub.name}</h4>
                      <p className="text-xs text-titanium-400 mb-3 font-mono">
                        {sub.annualFee > 0 ? `$${sub.annualFee}/year auto-replenish` : 'No recurring fee'}
                      </p>

                      <ul className="space-y-1.5 border-t border-white/10 pt-3 text-xs text-titanium-300">
                        {sub.benefits.map((b, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right: Sticky Order Summary & Direct Add to Cart (4 cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="rounded-3xl bg-glass-card border border-white/15 p-6 sm:p-8 shadow-card-elevated space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-titanium-400">Configured System</span>
                <span className="text-xs font-mono text-hydro-cyan font-bold">READY TO SHIP</span>
              </div>

              {/* Selected Specs Breakdown */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-titanium-300">{builderState.system.name}</span>
                  <span className="font-mono font-bold text-white">${builderState.system.price}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-titanium-300">Finish: {builderState.finish.name}</span>
                  <span className="font-mono text-titanium-300">
                    {builderState.finish.addedPrice === 0 ? '$0' : `+$${builderState.finish.addedPrice}`}
                  </span>
                </div>

                {builderState.addons.map(addon => (
                  <div key={addon.id} className="flex justify-between">
                    <span className="text-titanium-300">{addon.name}</span>
                    <span className="font-mono text-titanium-300">+${addon.price}</span>
                  </div>
                ))}

                <div className="flex justify-between border-t border-white/10 pt-2 text-emerald-400">
                  <span>{builderState.subscription.name}</span>
                  <span className="font-mono">{builderState.subscription.discount}</span>
                </div>
              </div>

              {/* Total Price & Financing */}
              <div className="p-4 rounded-2xl bg-obsidian-950 border border-white/10 space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-mono uppercase text-titanium-400">Total System:</span>
                  <span className="text-3xl font-extrabold text-white font-mono">${total}</span>
                </div>
                <p className="text-[11px] text-titanium-400">
                  Or <strong className="text-hydro-cyan font-mono">${monthlyEstimate}/mo</strong> for 24 mos at 0% APR.
                </p>
              </div>

              {/* CTA: Add To Cart */}
              <div className="space-y-3">
                <button
                  onClick={addCustomBuilderToCart}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-hydro-cyan via-hydro-glow to-hydro-blue text-obsidian-950 font-extrabold text-base shadow-glow-cyan hover:shadow-glow-cyan-lg transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Add Configured System to Bag</span>
                </button>

                <div className="space-y-1 text-center text-[11px] text-titanium-400">
                  <p className="flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Includes 100-Day Home Trial & Free Express Delivery</span>
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

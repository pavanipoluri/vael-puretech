import React, { useState, useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import { ShoppingBag, Sparkles, ShieldCheck, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const { cartCount, setIsCartOpen, isAgencyMode, toggleAgencyMode, setIsPitchModalOpen } = useStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-obsidian-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3' 
        : 'bg-transparent py-5'
    }`}>
      {/* Top micro-announcement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-hydro-cyan/20 via-obsidian-800 to-obsidian-900 border border-hydro-cyan/30 flex items-center justify-center shadow-glow-cyan transition-transform group-hover:scale-105">
              <svg className="w-5 h-5 text-hydro-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                <circle cx="12" cy="14" r="2.5" fill="#00E5FF" fillOpacity="0.4"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-wider text-white">VAEL</span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/10 text-hydro-cyan border border-hydro-cyan/20">PURETECH</span>
              </div>
              <span className="block text-[10px] text-titanium-400 font-mono tracking-widest uppercase">7-STAGE MOLECULAR LAB</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-titanium-300">
            <a href="#engineering" className="hover:text-hydro-cyan transition-colors">7-Stage Core</a>
            <a href="#calculator" className="hover:text-hydro-cyan transition-colors">Savings ROI</a>
            <a href="#builder" className="hover:text-hydro-cyan transition-colors">System Builder</a>
            <a href="#proof" className="hover:text-hydro-cyan transition-colors">Clinical Proof</a>
            <a href="#reviews" className="hover:text-hydro-cyan transition-colors">Reviews</a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            
            {/* Agency Pitch Mode Toggle */}
            <button
              onClick={toggleAgencyMode}
              title="Toggle Agency CRO Insights Mode"
              className={`flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full border transition-all ${
                isAgencyMode 
                  ? 'bg-amber-500/20 text-amber-300 border-amber-400/50 shadow-[0_0_15px_rgba(245,158,11,0.3)] animate-pulse'
                  : 'bg-obsidian-800/80 text-titanium-300 border-white/10 hover:border-hydro-cyan/40 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">{isAgencyMode ? 'CRO Strategy: ON' : 'Agency Mode'}</span>
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 border border-white/10 hover:border-hydro-cyan/40 text-titanium-200 hover:text-white transition-all shadow-sm"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 text-hydro-cyan" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-gradient-to-r from-hydro-cyan to-hydro-blue text-obsidian-950 font-bold text-xs rounded-full flex items-center justify-center shadow-glow-cyan animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Direct Order Anchor CTA */}
            <a
              href="#builder"
              className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-hydro-cyan to-hydro-blue text-obsidian-950 font-semibold text-xs px-4 py-2.5 rounded-xl hover:shadow-glow-cyan transition-all hover:scale-[1.02] active:scale-95"
            >
              <span>Build System</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-titanium-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-6 border-t border-white/10 bg-obsidian-900/95 backdrop-blur-2xl rounded-2xl p-4 space-y-4">
            <a 
              href="#engineering" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-titanium-200 hover:text-hydro-cyan font-medium text-base py-2"
            >
              7-Stage Core Teardown
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-titanium-200 hover:text-hydro-cyan font-medium text-base py-2"
            >
              Savings ROI Calculator
            </a>
            <a 
              href="#builder" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-titanium-200 hover:text-hydro-cyan font-medium text-base py-2"
            >
              Custom System Builder
            </a>
            <a 
              href="#proof" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-titanium-200 hover:text-hydro-cyan font-medium text-base py-2"
            >
              Clinical Lab Benchmarks
            </a>
            <a 
              href="#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-titanium-200 hover:text-hydro-cyan font-medium text-base py-2"
            >
              Buyer Reviews
            </a>
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  toggleAgencyMode();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left py-2.5 px-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono flex items-center justify-between"
              >
                <span>{isAgencyMode ? 'Turn Off CRO Blueprint' : 'Turn On Agency CRO Mode'}</span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </button>
              <a
                href="#builder"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-gradient-to-r from-hydro-cyan to-hydro-blue text-obsidian-950 font-bold rounded-xl text-sm"
              >
                Configure Your System ($899)
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

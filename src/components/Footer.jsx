import React from 'react';
import { useStore } from '../context/StoreContext';
import { ShieldCheck, Droplets, Sparkles } from 'lucide-react';

export default function Footer() {
  const { toggleAgencyMode, isAgencyMode, setIsPitchModalOpen } = useStore();

  return (
    <footer className="bg-obsidian-950 border-t border-white/10 pt-16 pb-12 text-titanium-400 text-xs font-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-hydro-cyan/20 border border-hydro-cyan/40 flex items-center justify-center">
                <Droplets className="w-4 h-4 text-hydro-cyan" />
              </div>
              <span className="font-extrabold text-lg text-white font-mono tracking-wider">VAEL PURETECH™</span>
            </div>
            <p className="text-titanium-300 text-xs leading-relaxed max-w-sm">
              Pioneering 7-stage molecular separation, medical-grade active bio-mineralization, and real-time OLED water telemetry. Built for lifelong cellular wellness and zero plastic dependence.
            </p>
            <div className="flex items-center gap-4 text-titanium-400 text-[11px] font-mono">
              <span className="flex items-center gap-1 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" /> NSF/ANSI 58
              </span>
              <span>&bull;</span>
              <span>ISO 13485 CERTIFIED</span>
              <span>&bull;</span>
              <span>MADE IN USA</span>
            </div>
          </div>

          {/* Col 3: Systems & Tech */}
          <div className="space-y-3">
            <h4 className="text-white font-mono font-bold uppercase tracking-wider text-[11px]">Infrastructure</h4>
            <ul className="space-y-2">
              <li><a href="#engineering" className="hover:text-hydro-cyan transition-colors">7-Stage Pure Core</a></li>
              <li><a href="#builder" className="hover:text-hydro-cyan transition-colors">Undersink RO 800 GPD</a></li>
              <li><a href="#builder" className="hover:text-hydro-cyan transition-colors">Element Countertop Unit</a></li>
              <li><a href="#builder" className="hover:text-hydro-cyan transition-colors">Smart OLED Faucets</a></li>
              <li><a href="#builder" className="hover:text-hydro-cyan transition-colors">HydroChill Sub-Zero Module</a></li>
            </ul>
          </div>

          {/* Col 4: Science & Proof */}
          <div className="space-y-3">
            <h4 className="text-white font-mono font-bold uppercase tracking-wider text-[11px]">Science & Lab</h4>
            <ul className="space-y-2">
              <li><a href="#proof" className="hover:text-hydro-cyan transition-colors">PFAS Removal Assays</a></li>
              <li><a href="#proof" className="hover:text-hydro-cyan transition-colors">Microplastic Retention Data</a></li>
              <li><a href="#calculator" className="hover:text-hydro-cyan transition-colors">Household ROI Calculator</a></li>
              <li><a href="#reviews" className="hover:text-hydro-cyan transition-colors">Clinician Testimonials</a></li>
              <li><a href="#proof" className="hover:text-hydro-cyan transition-colors">EPA Standards Matrix</a></li>
            </ul>
          </div>

          {/* Col 5: Agency & Client Suite */}
          <div className="space-y-3">
            <h4 className="text-amber-400 font-mono font-bold uppercase tracking-wider text-[11px]">Agency Showcase</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={toggleAgencyMode}
                  className="text-left text-amber-300 hover:text-amber-200 transition-colors flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>{isAgencyMode ? 'Disable CRO Overlay' : 'Enable CRO Strategy Mode'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsPitchModalOpen(true)}
                  className="text-left hover:text-white transition-colors"
                >
                  Client Pitch Deck & Scripts
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsPitchModalOpen(true)}
                  className="text-left hover:text-white transition-colors"
                >
                  Request D2C Brand Audit
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Agency Attribution */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-titanium-400">
          <div>
            &copy; 2026 VAEL PureTech Technologies Inc. All rights reserved. Medical Class I Device compliance.
          </div>
          <div className="flex items-center gap-2">
            <span>Crafted as a Flagship High-Ticket D2C Showcase</span>
            <span>&bull;</span>
            <span className="text-white font-mono font-bold">Premium Agency Architecture</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

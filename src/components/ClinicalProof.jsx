import React from 'react';
import { useStore } from '../context/StoreContext';
import { CONTAMINANT_BENCHMARKS, COMPARISON_DATA } from '../data/productData';
import { ShieldCheck, FileText, CheckCircle2, XCircle, AlertTriangle, ExternalLink, Sparkles } from 'lucide-react';

export default function ClinicalProof() {
  const { isAgencyMode } = useStore();

  return (
    <section id="proof" className="py-24 relative border-t border-white/10 bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-hydro-cyan/10 border border-hydro-cyan/30 text-hydro-cyan text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>INDEPENDENT THIRD-PARTY CLINICAL ASSAYS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Scientific Proof. <br />
            <span className="text-gradient-cyan">Zero Compromise on Biology.</span>
          </h2>
          <p className="text-titanium-300 text-base sm:text-lg font-light">
            Municipal water systems test positive for hundreds of unregulated chemical compounds. Here is how VAEL performs against strict clinical laboratory assays.
          </p>
        </div>

        {/* Benchmarks Table */}
        <div className="rounded-3xl bg-glass-card border border-white/10 p-6 sm:p-8 mb-16 shadow-card-elevated">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
            <div>
              <h3 className="text-xl font-bold text-white">EPA & NSF Standard Contaminant Benchmarks</h3>
              <p className="text-xs text-titanium-400">Tested across 10,000 gallons of high-turbidity synthetic challenge water.</p>
            </div>
            <button
              onClick={() => alert("Simulated 34-Page ISO-17025 Independent Laboratory Assay Report (PDF) Download Initiated.")}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-obsidian-800 hover:bg-obsidian-750 border border-white/15 text-xs text-titanium-200 font-mono hover:text-white transition-all"
            >
              <FileText className="w-4 h-4 text-hydro-cyan" />
              <span>Download Full 34-Page Lab Assay (PDF)</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-[11px] font-mono text-titanium-400 uppercase">
                  <th className="pb-3 font-semibold">Target Compound</th>
                  <th className="pb-3 font-semibold">EPA / Municipal Baseline</th>
                  <th className="pb-3 font-semibold">VAEL Interception Rate</th>
                  <th className="pb-3 font-semibold">Post-Filtration Output</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {CONTAMINANT_BENCHMARKS.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 font-semibold text-white flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>{item.name}</span>
                    </td>
                    <td className="py-4 text-titanium-400 font-mono text-xs">{item.standard}</td>
                    <td className="py-4 font-mono font-bold text-emerald-400">{item.vaelRemoval}</td>
                    <td className="py-4 font-mono text-xs text-white">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-bold">
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Side-by-Side Comparison Matrix */}
        <div className="rounded-3xl bg-glass-card border border-white/10 p-6 sm:p-8 shadow-card-elevated">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h3 className="text-2xl font-bold text-white">How VAEL Outclasses Alternative Systems</h3>
            <p className="text-xs text-titanium-400">Comparing pore ratings, chemical extraction, flow speed, and family expenses.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-titanium-400 font-mono text-[11px]">
                  <th className="pb-4">Core Feature</th>
                  <th className="pb-4 text-hydro-cyan font-bold bg-hydro-cyan/5 px-4 rounded-t-xl">
                    VAEL H2-PRO™
                  </th>
                  <th className="pb-4 px-3">Standard Big-Box RO</th>
                  <th className="pb-4 px-3">Gravity Pitcher Filter</th>
                  <th className="pb-4 px-3">Bottled Spring Water</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-light">
                {COMPARISON_DATA.map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02]">
                    <td className="py-4 font-medium text-white pr-4">{row.feature}</td>
                    <td className="py-4 font-bold text-white bg-hydro-cyan/5 px-4 border-x border-hydro-cyan/20">
                      <span className="text-hydro-cyan flex items-center gap-1.5 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{row.vael}</span>
                      </span>
                    </td>
                    <td className="py-4 text-titanium-400 px-3">{row.standardRo}</td>
                    <td className="py-4 text-titanium-400 px-3">{row.pitcher}</td>
                    <td className="py-4 text-titanium-400 px-3">{row.bottled}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}

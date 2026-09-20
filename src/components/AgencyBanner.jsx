import React from 'react';
import { useStore } from '../context/StoreContext';
import { Sparkles, Info, ArrowUpRight } from 'lucide-react';

export default function AgencyBanner() {
  const { isAgencyMode, setIsPitchModalOpen } = useStore();

  if (!isAgencyMode) return null;

  return (
    <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 text-obsidian-950 font-medium py-2 px-4 shadow-lg sticky top-[60px] z-30 transition-all animate-fadeIn">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="p-1 rounded bg-black/20 text-obsidian-950">
            <Sparkles className="w-4 h-4 text-obsidian-950" />
          </span>
          <span>
            <strong className="font-extrabold uppercase tracking-wide">Agency Blueprint Active:</strong> You are viewing the conversion architecture designed to sell $15k–$30k websites to high-ticket D2C brands.
          </span>
        </div>
        <button
          onClick={() => setIsPitchModalOpen(true)}
          className="flex items-center gap-1.5 bg-obsidian-950 text-amber-300 font-mono text-[11px] px-3 py-1 rounded-full font-bold hover:bg-obsidian-900 transition-transform active:scale-95 shadow-md"
        >
          <span>View Agency Client Pitch Deck</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

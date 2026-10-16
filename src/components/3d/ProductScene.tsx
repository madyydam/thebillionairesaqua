import React from 'react';
import { Sparkles, Shield, Droplets } from 'lucide-react';

interface ProductSceneProps {
  interactive?: boolean;
}

export const ProductScene: React.FC<ProductSceneProps> = () => {
  return (
    <div className="relative w-full h-[520px] md:h-[640px] flex items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/40 via-slate-950 to-black p-8 backdrop-blur-2xl">
      {/* Background ambient lighting layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Mock Bottle Silhouette Card */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative w-48 md:w-56 h-[380px] md:h-[440px] rounded-t-[100px] rounded-b-3xl border border-amber-400/30 bg-gradient-to-b from-cyan-300/10 via-slate-800/40 to-black/80 shadow-[0_0_80px_rgba(56,189,248,0.15)] flex flex-col items-center justify-between p-6 overflow-hidden">
          {/* Glass refractions and shimmer */}
          <div className="absolute top-0 left-4 w-2 h-full bg-gradient-to-b from-white/30 via-white/5 to-transparent rounded-full blur-[1px]" />
          <div className="absolute top-0 right-4 w-1 h-3/4 bg-gradient-to-b from-amber-300/20 to-transparent rounded-full" />
          
          {/* Bottle Top Stopper */}
          <div className="w-16 h-8 rounded-full border border-amber-400/50 bg-gradient-to-r from-yellow-500 via-amber-300 to-yellow-600 shadow-[0_0_15px_rgba(234,179,8,0.5)] flex items-center justify-center">
            <span className="text-[9px] font-bold text-black tracking-widest">24K</span>
          </div>

          {/* Central Monogram Emblem */}
          <div className="my-auto flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full border border-amber-400/40 bg-black/60 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
              <Droplets className="w-8 h-8 text-cyan-400" />
            </div>
            <span className="font-serif-luxury text-sm font-bold tracking-[0.2em] text-white">
              AQUA
            </span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-amber-400/90 mt-1">
              GRAND CRU 750ML
            </span>
            <div className="mt-3 flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[9px] text-cyan-300">
              <Sparkles className="w-3 h-3" />
              <span>pH 8.4 ARTESIAN</span>
            </div>
          </div>

          {/* Bottom Engraving Base */}
          <div className="w-full text-center border-t border-white/10 pt-2 text-[8px] tracking-[0.3em] text-slate-400 uppercase">
            Glacial Stratum N° 084
          </div>
        </div>

        {/* Reflection Pedestal */}
        <div className="w-64 h-6 rounded-[100%] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent blur-md mt-4" />
      </div>

      {/* Floating telemetry metrics badges */}
      <div className="absolute top-6 left-6 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-xs text-slate-300 backdrop-blur-md">
        <Shield className="w-3.5 h-3.5 text-amber-400" />
        <span>Isobaric Vacuum Chamber Active</span>
      </div>

      <div className="absolute bottom-6 right-6 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-xs text-cyan-300 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Hydration Coefficient: 99.98%</span>
      </div>
    </div>
  );
};

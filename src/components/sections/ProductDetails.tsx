import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Layers, Droplet, Activity, Compass } from 'lucide-react';

export const ProductDetails: React.FC = () => {
  const minerals = [
    { name: 'Natural Bio-Silica (SiO2)', concentration: '124 mg/L', benefit: 'Cellular rejuvenation & collagen synthesis support' },
    { name: 'Glacial Magnesium (Mg2+)', concentration: '48 mg/L', benefit: 'Cardiovascular equilibrium & neuro-receptive calm' },
    { name: 'Alpine Calcium (Ca2+)', concentration: '96 mg/L', benefit: 'Structural micro-density with silky palate weight' },
    { name: 'Volcanic Potassium (K+)', concentration: '14 mg/L', benefit: 'Electrolytic restoration with zero sodium spike' },
  ];

  return (
    <section id="minerals" className="py-24 relative overflow-hidden bg-slate-950/60 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="cyan">Mineral Spectrum Analysis</Badge>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-white">
            FOUR CENTURIES OF <span className="gold-gradient-text">NATURAL ALCHEMY</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Filtered at 2.4 atmospheres through quartz-veined metamorphic granite, achieving an extraordinarily rare electrolyte matrix with an exquisitely velvety mouthfeel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {minerals.map((mineral, idx) => (
            <Card key={idx} className="relative group overflow-hidden border-white/10 hover:border-amber-400/40">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 text-amber-400 group-hover:scale-110 transition-transform">
                <Droplet className="w-5 h-5" />
              </div>
              <div className="text-2xl font-serif-luxury font-bold text-white mb-1">{mineral.concentration}</div>
              <h3 className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">{mineral.name}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{mineral.benefit}</p>
            </Card>
          ))}
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-white">
              Spectrometric Certificate: Batch № 2026-AQ49
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Validated by the Independent Swiss Geological Laboratory for zero microplastics, zero nitrates, and pure colloidal balance.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs">
              <Activity className="w-4 h-4" />
              TDS: 282 mg/L Ideal
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs">
              <Compass className="w-4 h-4" />
              Origin: Valais Aquifer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

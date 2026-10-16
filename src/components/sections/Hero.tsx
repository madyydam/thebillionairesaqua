import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProductScene } from '@/components/3d/ProductScene';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <Badge variant="gold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 mr-1" />
            2026 Grand Vintage Reserve
          </Badge>

          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-serif-luxury font-bold tracking-tight text-white leading-[1.1]">
            WATER RE-IMAGINED AS <br />
            <span className="gold-gradient-text">PURE ARCHITECTURE</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-light leading-relaxed">
            Drawn from an untouched 400-year subterranean artesian aquifer deep within the Swiss Alpine fault lines. Naturally balanced at pH 8.4 with sovereign silica concentrations.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <Button variant="gold" size="lg">
              Inquire For Private Reserve
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="glass" size="lg">
              <ShieldCheck className="w-4 h-4 mr-2 text-cyan-400" />
              Certificate of Provenance
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
            <div>
              <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-amber-400">8.4</div>
              <div className="text-[11px] uppercase tracking-wider text-slate-400 mt-1">Alkaline pH</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-cyan-400">120 mg/L</div>
              <div className="text-[11px] uppercase tracking-wider text-slate-400 mt-1">Bio-Silica</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white">3,450m</div>
              <div className="text-[11px] uppercase tracking-wider text-slate-400 mt-1">Alpine Stratum</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <ProductScene />
        </div>
      </div>
    </section>
  );
};

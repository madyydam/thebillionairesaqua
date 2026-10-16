import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Cpu, Gauge, Radio, Thermometer } from 'lucide-react';

export const Technology: React.FC = () => {
  return (
    <section id="technology" className="py-24 relative overflow-hidden bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="cyan">Subterranean Extraction</Badge>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-white">
            GRAVITATIONAL EXTRACTION <span className="cyan-gradient-text">ARCHITECTURE</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Zero mechanical pressure pumps. We collect solely via natural artesian hydro-static equilibrium inside our certified subterranean vault.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center space-y-3 border-cyan-500/20 bg-slate-900/40">
            <Thermometer className="w-8 h-8 text-cyan-400 mx-auto" />
            <div className="text-3xl font-serif-luxury font-bold text-white">1.8°C</div>
            <div className="text-xs uppercase tracking-widest text-slate-400">Vault Temperature</div>
            <p className="text-[11px] text-slate-500">Naturally regulated by perpetual permafrost walls</p>
          </Card>

          <Card className="text-center space-y-3 border-amber-500/20 bg-slate-900/40">
            <Gauge className="w-8 h-8 text-amber-400 mx-auto" />
            <div className="text-3xl font-serif-luxury font-bold text-white">2.4 bar</div>
            <div className="text-xs uppercase tracking-widest text-slate-400">Hydrostatic Pressure</div>
            <p className="text-[11px] text-slate-500">Autonomous ascension without mechanical stress</p>
          </Card>

          <Card className="text-center space-y-3 border-indigo-500/20 bg-slate-900/40">
            <Radio className="w-8 h-8 text-indigo-400 mx-auto" />
            <div className="text-3xl font-serif-luxury font-bold text-white">0.00 ppm</div>
            <div className="text-xs uppercase tracking-widest text-slate-400">Atmospheric Nitrates</div>
            <p className="text-[11px] text-slate-500">Spectrometrically verified absolute isolation</p>
          </Card>

          <Card className="text-center space-y-3 border-emerald-500/20 bg-slate-900/40">
            <Cpu className="w-8 h-8 text-emerald-400 mx-auto" />
            <div className="text-3xl font-serif-luxury font-bold text-white">NFC Chip</div>
            <div className="text-xs uppercase tracking-widest text-slate-400">Smart Stopper Guard</div>
            <p className="text-[11px] text-slate-500">Encrypted ledger validation for every bottle</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

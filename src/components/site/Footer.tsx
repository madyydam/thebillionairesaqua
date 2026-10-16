import React from 'react';
import { Droplet, Award, Globe, Compass } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Droplet className="w-6 h-6 text-amber-400" />
            <span className="font-serif-luxury font-bold tracking-widest text-white text-lg">
              THE BILLIONAIRES AQUA
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            Bottled at the sub-zero source under vacuum isobaric seals. An uncompromised symbol of prestige, subterranean minerality, and geological perfection.
          </p>
          <div className="flex items-center gap-3 text-xs text-amber-400/80">
            <Compass className="w-4 h-4" />
            <span>46°30'12.4"N 8°01'44.2"E • Alt. 3,450m</span>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase font-serif-luxury tracking-widest text-amber-300 mb-4">Curations</h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li><a href="#" className="hover:text-white transition-colors">The Imperial Flacon (750ml)</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Grand Cru Reserve Cask</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cellar Maturation Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Diplomatic Shipments</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase font-serif-luxury tracking-widest text-amber-300 mb-4">Provenance</h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li><a href="#" className="hover:text-white transition-colors">Isotopic Mass Spectrometry</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Geological Chronology</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Microbiological Purity Index</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Swiss Artesian Council</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase font-serif-luxury tracking-widest text-amber-300 mb-4">Private Allocation</h4>
          <p className="text-xs text-slate-400 mb-4">
            Allocation requests are vetted in strict quarterly cycles. Enter your concierge verification token:
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="TOKEN / INVITATION CODE"
              className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 w-full"
            />
            <button className="px-4 py-2 bg-amber-500 text-black text-xs font-semibold rounded-full hover:bg-amber-400 transition-colors">
              Access
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
        <p>© {new Date().getFullYear()} The Billionaires Aqua Collective. All privileges reserved.</p>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5 text-amber-400" /> Grand Medallion de Genève 2026</span>
          <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-cyan-400" /> Carbon-Neutral Glacial Stewardship</span>
        </div>
      </div>
    </footer>
  );
};

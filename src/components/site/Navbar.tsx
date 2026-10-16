import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Droplet, Sparkles, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-amber-400/40 bg-gradient-to-tr from-amber-500/20 to-cyan-500/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            <Droplet className="w-5 h-5 text-amber-400" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif-luxury text-sm md:text-base font-bold tracking-widest text-white">
              THE BILLIONAIRES AQUA
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-amber-400/80">
              Artesian Reserve • Haute Hydration
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest text-slate-300">
          <a href="#story" className="hover:text-amber-400 transition-colors uppercase">Origin</a>
          <a href="#minerals" className="hover:text-amber-400 transition-colors uppercase">Composition</a>
          <a href="#technology" className="hover:text-amber-400 transition-colors uppercase">Extraction</a>
          <a href="#reserve" className="hover:text-amber-400 transition-colors uppercase">Allocation</a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden sm:inline-flex">
            <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
            Verify Batch
          </Button>
          <Button variant="gold" size="sm">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            Reserve
          </Button>
        </div>
      </div>
    </header>
  );
};

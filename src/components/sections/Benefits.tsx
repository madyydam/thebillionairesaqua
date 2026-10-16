import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Zap, Sparkles, Feather } from 'lucide-react';

export const Benefits: React.FC = () => {
  const pillars = [
    {
      icon: <Sparkles className="w-6 h-6 text-amber-400" />,
      title: 'Cellular Osmosis Speed',
      description: 'Micro-clustered molecular structure accelerates intra-cellular nutrient transport and optimal hydration retention.',
    },
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: 'Cryo-Isobaric Bottling',
      description: 'Hermetically collected at 1.8°C directly at the fissure mouth, preserving the volatile dissolved oxygen matrix without atmospheric exposure.',
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Bio-Frequency Resonance',
      description: 'Retains undisturbed piezoelectric vibration signatures acquired during centuries of geological descent.',
    },
    {
      icon: <Feather className="w-6 h-6 text-emerald-400" />,
      title: 'Effortless Velvety Finish',
      description: 'Extremely low surface tension delivers an effortless glide across the palate, ideal as a pairing for haute cuisine and fine vintage spirits.',
    },
  ];

  return (
    <section id="benefits" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Badge variant="gold">Uncompromising Standard</Badge>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-white">
            THE ANATOMY OF <span className="gold-gradient-text">PERFECTION</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Every drop is a masterclass in elemental balance and sensory luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => (
            <Card key={idx} className="p-8 flex items-start gap-6 border-white/10 hover:border-amber-400/30">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shrink-0">
                {pillar.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-serif-luxury font-bold text-white">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{pillar.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

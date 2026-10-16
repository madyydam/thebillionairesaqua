import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, CheckCircle2, Lock } from 'lucide-react';

export const CallToAction: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="reserve" className="py-28 relative overflow-hidden bg-black text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
        <Badge variant="gold">Strict Quota Allocation</Badge>

        <h2 className="text-4xl sm:text-6xl font-serif-luxury font-bold text-white leading-tight">
          CLAIM YOUR PLACE IN THE <br />
          <span className="gold-gradient-text">ANNUAL PRIVATE CELLAR</span>
        </h2>

        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Due to finite geological extraction yields, annual allocations are restricted to 1,200 flacons worldwide. Inquire below for priority ledger verification.
        </p>

        {submitted ? (
          <div className="p-8 rounded-3xl bg-slate-900/80 border border-amber-400/30 max-w-md mx-auto space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <h3 className="text-lg font-serif-luxury text-white">Application Received</h3>
            <p className="text-xs text-slate-400">
              Your credentials have been submitted to the Private Concierge. An encrypted dossier will be transmitted within 48 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 pt-4">
            <input
              type="text"
              required
              placeholder="Full Name / Representative"
              className="w-full px-5 py-3.5 rounded-full bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
            <input
              type="email"
              required
              placeholder="Private Executive Email"
              className="w-full px-5 py-3.5 rounded-full bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
            <Button type="submit" variant="gold" size="lg" className="w-full">
              <Sparkles className="w-4 h-4 mr-2" />
              Request Private Allocation
            </Button>
            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500">
              <Lock className="w-3 h-3 text-amber-400" />
              <span>Confidentiality Protected by Swiss Bank-Grade TLS Protocol</span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

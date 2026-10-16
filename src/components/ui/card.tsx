import React from 'react';
import { cn } from '@/lib/utils';

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-amber-500/30',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

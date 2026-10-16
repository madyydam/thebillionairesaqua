import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'gold' | 'cyan' | 'neutral';
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'gold',
  children,
  ...props
}) => {
  const variants = {
    gold: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
    cyan: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300',
    neutral: 'border-white/10 bg-white/5 text-gray-300',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium tracking-widest uppercase border',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

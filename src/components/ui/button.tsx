import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'glass' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'gold', size = 'md', children, ...props }, ref) => {
    const base = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none disabled:opacity-50 tracking-wider uppercase text-xs';
    
    const variants = {
      gold: 'bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-black hover:brightness-110 shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]',
      glass: 'bg-white/10 hover:bg-white/15 text-white backdrop-blur-md border border-white/20',
      ghost: 'bg-transparent hover:bg-white/5 text-gray-300 hover:text-white',
      outline: 'border border-amber-500/40 text-amber-300 hover:bg-amber-500/10 hover:border-amber-400'
    };

    const sizes = {
      sm: 'px-4 py-2 text-[10px]',
      md: 'px-6 py-3 text-xs',
      lg: 'px-8 py-4 text-sm font-semibold'
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

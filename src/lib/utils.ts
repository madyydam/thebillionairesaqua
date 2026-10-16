import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatVolume(liters: number): string {
  return `${(liters * 1000).toFixed(0)} mL`;
}

export function calculateMineralRatio(calcium: number, magnesium: number): string {
  const ratio = (calcium / (magnesium || 1)).toFixed(2);
  return `Ca:Mg (${ratio}:1)`;
}

import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { ProductDetails } from '@/components/sections/ProductDetails';
import { Benefits } from '@/components/sections/Benefits';
import { Technology } from '@/components/sections/Technology';
import { CallToAction } from '@/components/sections/CallToAction';

export const HomePage: React.FC = () => {
  return (
    <main className="relative z-10">
      <Hero />
      <ProductDetails />
      <Benefits />
      <Technology />
      <CallToAction />
    </main>
  );
};

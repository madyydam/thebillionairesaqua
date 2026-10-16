import React from 'react';
import { Navbar } from '@/components/site/Navbar';
import { Footer } from '@/components/site/Footer';
import { HomePage } from '@/routes/index';
import { Lighting } from '@/components/3d/Lighting';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-slate-100 relative selection:bg-amber-400 selection:text-black">
      <Lighting />
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;

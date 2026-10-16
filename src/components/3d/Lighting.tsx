import React from 'react';

export const Lighting: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[140px]" />
    </div>
  );
};

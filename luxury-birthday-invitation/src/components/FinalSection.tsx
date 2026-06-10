import React from 'react';
import { Starburst, StarburstEightPoint } from './DecorativeStars';
import { Heart, Sparkles, Instagram, Share2 } from 'lucide-react';

export const FinalSection: React.FC = () => {
  return (
    <section 
      id="final-section"
      className="relative py-28 px-4 sm:px-6 bg-[#F7F0E4] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background organic gradients */}
      <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full bg-[#F5A9C5] opacity-[0.09] blur-3xl pointer-events-none" />

      {/* Scattered sparkles */}
      <Starburst size={20} className="absolute top-[18%] left-[10%] text-[#F5A9C5]/40 animate-float" />
      <StarburstEightPoint size={28} className="absolute bottom-[22%] right-[12%] text-[#AFC6D9]/40 animate-float-slow" />

      <div className="max-w-2xl w-full text-center z-10 relative">
        <div 
          id="final-closing-card"
          className="rounded-3xl p-10 sm:p-14 md:p-16 bg-white/70 backdrop-blur-md border border-white/60 shadow-xl"
        >
          {/* Sparkly Top Motif */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <span className="text-3xl select-none animate-pulse">✨</span>
              <StarburstEightPoint size={18} className="absolute -top-3 -right-3 text-[#AFC6D9]" />
            </div>
          </div>

          {/* Closing Headers */}
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#3C302B] tracking-tight">
            Thank You
          </h2>
          
          <div className="w-16 h-[1.5px] bg-[#F5A9C5]/60 mx-auto mt-5 mb-8" />

          {/* Narrative paragraphs */}
          <div className="space-y-6 font-cormorant text-xl sm:text-2xl text-[#5C4D46] leading-relaxed max-w-lg mx-auto">
            <p className="font-normal italic text-[#C47D97]">
              "Every guest who joins this celebration makes it more meaningful."
            </p>
            <p className="font-light">
              Whether you attend in person or send your wishes from afar, your kindness is deeply appreciated.
            </p>
            <p className="font-light">
              Looking forward to celebrating together.
            </p>
          </div>

          {/* Monogram/Signature footer */}
          <div className="mt-10 pt-6 border-t border-dashed border-[#8C7A72]/15">
            <p className="font-serif text-lg tracking-widest italic text-[#C47D97]">
              With Love,
            </p>
            <p className="font-sans font-semibold text-xs tracking-[0.25em] text-[#8C7A72] uppercase mt-2">
              The Birthday Host
            </p>
          </div>
        </div>

        {/* Small Elegant Page Footer (Classy & minimalist - no tag clutter) */}
        <div className="mt-16 text-center select-none pointer-events-none">
          <p className="font-mono text-[9px] tracking-[0.35em] text-[#9C8C84] uppercase">
            Luxury Editorial Series • Invitation Digital Portfolio
          </p>
          <p className="font-sans text-[10px] text-[#AFA49E] mt-1.5 flex items-center justify-center gap-1">
            Made with <Heart className="h-3 w-3 text-[#F5A9C5] fill-current" /> for a magical day
          </p>
        </div>

      </div>
    </section>
  );
};

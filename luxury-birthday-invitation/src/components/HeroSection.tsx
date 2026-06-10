import React, { useEffect, useState } from 'react';
import { Starburst, StarburstEightPoint } from './DecorativeStars';
import { Calendar, ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpen: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onOpen }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleOpenClick = () => {
    // Scroll to the welcome section
    const target = document.getElementById('welcome-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    // Fire event to activate background music
    window.dispatchEvent(new CustomEvent('open-invitation'));
    onOpen();
  };

  return (
    <section 
      id="hero-section"
      className="relative min-h-screen flex flex-col items-center justify-between py-16 px-6 bg-[#F7F0E4] overflow-hidden select-none"
    >
      {/* Editorial Decorative Arches in Background */}
      <div className="absolute top-10 left-10 md:left-24 w-40 h-80 rounded-t-full border border-[#FFF] opacity-40 pointer-events-none" />
      <div className="absolute bottom-10 right-10 md:right-24 w-48 h-96 rounded-b-full border border-[#F5A9C5] opacity-20 pointer-events-none" />

      {/* Scattered floating stars in Hero */}
      <StarburstEightPoint size={44} className="absolute top-[15%] left-[12%] animate-float-slow text-[#AFC6D9]/50" />
      <Starburst size={28} className="absolute top-[20%] right-[15%] animate-float text-[#F5A9C5]/60" />
      <Starburst size={32} className="absolute bottom-[25%] left-[8%] animate-float-fast text-[#F5A9C5]/40" />
      <StarburstEightPoint size={36} className="absolute bottom-[30%] right-[12%] animate-float-slow text-[#AFC6D9]/40" />

      {/* Decorative floral or geometric frame */}
      <div className="relative my-auto flex flex-col items-center max-w-xl text-center z-10">
        {/* Editorial Subtitle Cap */}
        <div 
          className={`flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[#F5A9C5]/30 bg-white/40 backdrop-blur-sm text-xs font-medium tracking-[0.25em] uppercase text-[#C47D97] mb-8 transition-all duration-1000 transform ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <Sparkles className="h-3 w-3 animate-spin-slow" />
          The Joyous Occasion
        </div>

        {/* Large Decorative Starbursts Framing the Title */}
        <div className="relative flex items-center justify-center py-2">
          {/* Left Sparkle */}
          <StarburstEightPoint 
            size={36} 
            className={`absolute left-[-42px] top-[-8px] text-[#AFC6D9] transition-all duration-[1200ms] delay-300 transform ${
              loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`} 
            glow 
          />
          
          {/* Right Sparkle */}
          <Starburst 
            size={28} 
            className={`absolute right-[-36px] bottom-[4px] text-[#F5A9C5] transition-all duration-[1200ms] delay-500 transform ${
              loaded ? 'opacity-100 scale-100 rotate-45' : 'opacity-0 scale-75'
            }`} 
            glow 
          />

          <h1 
            className={`font-serif text-5xl sm:text-6.5xl lg:text-7xl font-semibold tracking-tight text-[#3C302B] leading-tight select-none transition-all duration-1000 delay-100 transform ${
              loaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            🎂 BIRTHDAY
            <span className="block mt-1 font-cormorant font-light italic text-[#C47D97]">
              Invitation
            </span>
          </h1>
        </div>

        {/* Subtitle with premium quote lines */}
        <div 
          className={`relative mt-10 transition-all duration-1000 delay-300 transform ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-12 h-[1px] bg-[#AFC6D9] mx-auto mb-6" />
          <p className="font-cormorant text-2xl italic font-normal text-[#60524C] leading-relaxed max-w-md mx-auto">
            "Your presence will make this celebration even more special."
          </p>
          <div className="w-12 h-[1px] bg-[#AFC6D9] mx-auto mt-6" />
        </div>

        {/* Date visual tag */}
        <div 
          className={`mt-10 flex items-center gap-3 text-xs tracking-widest font-mono text-[#8C7A72] uppercase bg-white/30 backdrop-blur-xs px-5 py-2.5 rounded-full border border-white/50 transition-all duration-1000 delay-400 transform ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Calendar className="h-3.5 w-3.5 text-[#AFC6D9]" />
          Join The Celebrations
        </div>
      </div>

      {/* Smooth scroll down interactive CTA */}
      <button
        id="btn-open-invitation"
        onClick={handleOpenClick}
        className={`group relative flex flex-col items-center gap-3.5 focus:outline-hidden z-10 transition-all duration-1000 delay-500 transform ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <span className="relative inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold tracking-wider text-sm transition-all duration-500 overflow-hidden shadow-md group-hover:shadow-[#F5A9C5]/20">
          {/* Button Background Gradients */}
          <span className="absolute inset-0 bg-linear-to-r from-[#F5A9C5] to-[#E59AB6] transition-all duration-500 group-hover:scale-105" />
          <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <span className="relative flex items-center gap-2 text-white">
            Open Invitation
            <Sparkles className="h-4 w-4 animate-pulse" />
          </span>
        </span>
        
        <span className="flex flex-col items-center text-[#8C7A72] text-[10px] tracking-[0.2em] uppercase font-mono mt-1">
          Scroll Down
          <ChevronDown className="h-4 w-4 mt-1 text-[#C47D97] animate-bounce" />
        </span>
      </button>
    </section>
  );
};

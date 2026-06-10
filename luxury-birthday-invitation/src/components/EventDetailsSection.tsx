import React from 'react';
import { MapPin, Clock, Shirt, Sparkles, ExternalLink } from 'lucide-react';
import { Starburst, StarburstEightPoint } from './DecorativeStars';

export const EventDetailsSection: React.FC = () => {
  // Kanvil Dau is in Malang, East Java, Indonesia. We can link to Google Maps.
  const googleMapsUrl = "https://maps.google.com/?q=Kanvil+Dau+Malang";

  return (
    <section 
      id="event-details-section"
      className="relative min-h-[90vh] py-24 px-4 sm:px-6 bg-[#F7F0E4]"
    >
      {/* Decorative organic layout elements */}
      <div className="absolute top-[10%] left-[-5%] w-96 h-96 rounded-full bg-[#AFC6D9] opacity-[0.1] blur-3xl" />
      <div className="absolute bottom-[20%] right-[-5%] w-96 h-96 rounded-full bg-[#F5A9C5] opacity-[0.1] blur-3xl" />

      {/* Decorative stars scattered */}
      <StarburstEightPoint size={30} className="absolute top-[5%] right-[15%] text-[#AFC6D9]/40 animate-spin-slow" />
      <Starburst size={20} className="absolute bottom-[10%] left-[10%] text-[#F5A9C5]/50 animate-float" />

      <div className="max-w-4xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 justify-center text-[#AFC6D9] mb-3">
            <Starburst size={16} className="animate-pulse" />
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#8C7A72]">Celebrate With Us</span>
            <Starburst size={16} className="animate-pulse" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#3C302B]">
            Event Details
          </h2>
          <p className="font-cormorant text-xl text-[#7C6C64] italic mt-3 max-w-sm mx-auto">
            The lovely details of our birthday gather
          </p>
          <div className="w-16 h-[1px] bg-[#F5A9C5] mx-auto mt-5" />
        </div>

        {/* Elegant Bento-grid or card layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* VENUE CARD */}
          <div 
            id="venue-card"
            className="group relative rounded-3xl p-8 bg-white/70 backdrop-blur-md border border-white/60 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
          >
            {/* Top color tag indicator */}
            <div className="absolute top-0 inset-x-0 h-2 bg-[#AFC6D9] rounded-t-3xl" />
            
            <div>
              {/* Icon Container */}
              <div className="mb-6 inline-flex items-center justify-center p-4 rounded-2xl bg-[#AFC6D9]/15 text-[#5D86A6]">
                <MapPin className="h-6 w-6" />
              </div>
              
              <h3 className="font-serif text-2xl font-normal text-[#3C302B] mb-3">
                Venue
              </h3>
              
              <div className="w-8 h-[1px] bg-[#AFC6D9] mb-4" />
              
              <p className="font-sans font-semibold text-lg text-[#3C302B] mb-1">
                Kanvil Dau
              </p>
              
              <p className="font-cormorant text-lg text-[#7C6C64] leading-relaxed">
                Malang, East Java, Indonesia. A scenic, boutique aesthetic dining space perfect for warm layouts.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#3C302B]/5">
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#5D86A6] uppercase hover:text-[#3C302B] transition-colors"
              >
                View on Google Maps
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* TIME CARD */}
          <div 
            id="time-card"
            className="group relative rounded-3xl p-8 bg-white/70 backdrop-blur-md border border-white/60 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
          >
            {/* Top color tag indicator */}
            <div className="absolute top-0 inset-x-0 h-2 bg-[#F5A9C5] rounded-t-3xl" />
            
            <div>
              {/* Icon Container */}
              <div className="mb-6 inline-flex items-center justify-center p-4 rounded-2xl bg-[#F5A9C5]/15 text-[#C47D97]">
                <Clock className="h-6 w-6" />
              </div>
              
              <h3 className="font-serif text-2xl font-normal text-[#3C302B] mb-3">
                Time
              </h3>
              
              <div className="w-8 h-[1px] bg-[#F5A9C5] mb-4" />
              
              <p className="font-sans font-semibold text-lg text-[#3C302B] mb-1">
                18.00 WIB
              </p>
              
              <p className="font-cormorant text-lg text-[#7C6C64] leading-relaxed">
                Waktu Indonesia Barat (Western Indonesian Time) – Until Finished. Join us early for cocktails.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#3C302B]/5">
              <span className="inline-flex items-center gap-1 text-xs font-semibold tracking-wider text-[#C47D97] uppercase">
                <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                Prompt Arrival Appreciated
              </span>
            </div>
          </div>

          {/* DRESS CODE CARD */}
          <div 
            id="dress-code-card"
            className="group relative rounded-3xl p-8 bg-white/70 backdrop-blur-md border border-white/60 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
          >
            {/* Top color tag indicator */}
            <div className="absolute top-0 inset-x-0 h-2 bg-neutral-800 rounded-t-3xl" />
            
            <div>
              {/* Icon Container */}
              <div className="mb-6 inline-flex items-center justify-center p-4 rounded-2xl bg-neutral-900/10 text-neutral-800">
                <Shirt className="h-6 w-6" />
              </div>
              
              <h3 className="font-serif text-2xl font-normal text-[#3C302B] mb-3">
                Dress Code
              </h3>
              
              <div className="w-8 h-[1px] bg-neutral-500 mb-4" />
              
              <p className="font-sans font-semibold text-lg text-[#3C302B] mb-2">
                Monochrome
              </p>
              
              <div className="flex gap-2 mb-3">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono tracking-widest uppercase bg-white border border-neutral-300 px-3 py-1 rounded-full text-neutral-800 shadow-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-white border border-neutral-400 inline-block" />
                  White
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono tracking-widest uppercase bg-neutral-900 px-3 py-1 rounded-full text-white shadow-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-black border border-neutral-700 inline-block" />
                  Black
                </span>
              </div>
              
              <p className="font-cormorant text-lg text-[#7C6C64] leading-relaxed">
                Dress elegantly in monochromatic hues of classy Black & clean White. Look sharp, feel classy.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#3C302B]/5">
              <span className="text-xs font-semibold tracking-wider text-[#7C6C64] uppercase font-sans">
                Feminine & Classy Aesthetic
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

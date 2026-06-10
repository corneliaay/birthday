import React from 'react';
import { Starburst, StarburstEightPoint } from './DecorativeStars';

export const WelcomeSection: React.FC = () => {
  return (
    <section 
      id="welcome-section"
      className="relative min-h-[90vh] flex items-center justify-center py-20 px-4 sm:px-6 bg-[#F7F0E4]"
    >
      {/* Background soft pastel bloom elements */}
      <div className="absolute top-[20%] right-[-10%] w-72 h-72 rounded-full bg-[#F5A9C5] opacity-[0.12] blur-3xl" />
      <div className="absolute bottom-[10%] left-[-10%] w-80 h-80 rounded-full bg-[#AFC6D9] opacity-[0.14] blur-3xl" />

      {/* Decorative starbursts in margins */}
      <Starburst size={20} className="absolute top-[15%] left-[10%] opacity-40 text-[#F5A9C5]" />
      <StarburstEightPoint size={28} className="absolute bottom-[20%] right-[12%] opacity-30 text-[#AFC6D9]" />

      <div className="w-full max-w-2xl text-center z-10 px-2">
        {/* Frame Outer styling */}
        <div 
          id="welcome-card"
          className="relative rounded-3xl p-8 sm:p-14 md:p-16 glass-panel shadow-xl shadow-warm-gray-200/40 border border-white/60 hover:shadow-2xl transition-all duration-700"
        >
          {/* Heart shape vector or monogram icon on top */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-md border border-[#F5A9C5]/30">
            <span className="text-xl animate-pulse select-none">💖</span>
          </div>

          {/* Starburst inside top-right card corner */}
          <StarburstEightPoint 
            size={24} 
            className="absolute top-6 right-6 text-[#AFC6D9]/50 animate-float-slow" 
          />
          <Starburst 
            size={16} 
            className="absolute bottom-6 left-6 text-[#F5A9C5]/50 animate-float" 
          />

          {/* Card Layout */}
          <div className="flex flex-col items-center">
            {/* Header Greeting */}
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#3C302B] tracking-tight">
              Hello, Dear Guest
            </h2>
            
            <div className="w-20 h-[1.5px] bg-[#F5A9C5]/40 mt-5 mb-8" />

            {/* Letter Body paragraphs. Let's make the typography absolutely exquisite with high font readability and line spacing */}
            <div className="space-y-6 text-[#5C4D46] font-cormorant text-xl sm:text-2xl leading-relaxed">
              <p className="font-light">
                Thank you for taking the time to open this invitation.
              </p>
              
              <p className="font-light">
                I would be delighted to celebrate this special birthday moment together with you.
              </p>
              
              <p className="font-normal italic text-[#C47D97]">
                "Your presence, laughter, and warm wishes would mean so much and make the day even more memorable."
              </p>
              
              <p className="font-light">
                I sincerely hope you can join us and create beautiful memories together.
              </p>
            </div>

            {/* Editorial Footer details */}
            <div className="mt-8 pt-4">
              <div className="flex items-center gap-1.5 justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#AFC6D9]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5A9C5]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#AFC6D9]" />
              </div>
              <p className="mt-3 font-mono text-[10px] tracking-widest text-[#9C8C84] uppercase">
                Warmest Regards • Save the Date
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

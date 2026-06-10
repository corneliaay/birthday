import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { WelcomeSection } from './components/WelcomeSection';
import { EventDetailsSection } from './components/EventDetailsSection';
import { CountdownSection } from './components/CountdownSection';
import { RsvpSection } from './components/RsvpSection';
import { FinalSection } from './components/FinalSection';
import { BackgroundMusic } from './components/BackgroundMusic';
import { FloatingStarsContainer } from './components/DecorativeStars';

export default function App() {
  const [invitationOpened, setInvitationOpened] = useState<boolean>(false);

  const handleOpenInvitation = () => {
    setInvitationOpened(true);
  };

  return (
    <div className="relative min-h-screen bg-[#F7F0E4] font-sans selection:bg-[#F5A9C5]/30 overflow-x-hidden">
      {/* Background celestial starbursts floating beautifully across the page */}
      <FloatingStarsContainer />

      {/* Persistent optional sweet luxury background lounge music */}
      <BackgroundMusic />

      {/* Main flow of the digital editorial brochure */}
      <div className="flex flex-col w-full relative z-10">
        
        {/* Section 1: Hero Cover */}
        <HeroSection onOpen={handleOpenInvitation} />

        {/* Sections are separated by soft, elegant rounded layouts */}
        <div className="w-full bg-[#F7F0E4]">
          
          {/* Section 2: Welcome lettercard */}
          <WelcomeSection />

          {/* Separation rounded line accent */}
          <div className="flex justify-center my-6">
            <div className="w-24 h-[1px] bg-[#AFC6D9]/50" />
          </div>

          {/* Section 3: Event info cards */}
          <EventDetailsSection />

          {/* Separation rounded line accent */}
          <div className="flex justify-center my-6">
            <div className="w-24 h-[1px] bg-[#F5A9C5]/50" />
          </div>

          {/* Section 4: Live Countdown */}
          <CountdownSection />

          {/* Separation rounded line accent */}
          <div className="flex justify-center my-6">
            <div className="w-24 h-[1px] bg-[#AFC6D9]/50" />
          </div>

          {/* Section 5: Interactive RSVP Form with ticket generator */}
          <RsvpSection />

          {/* Separation rounded line accent */}
          <div className="flex justify-center my-6">
            <div className="w-24 h-[1px] bg-[#F5A9C5]/40" />
          </div>

          {/* Section 6: Closing Thank You card */}
          <FinalSection />

        </div>
      </div>
    </div>
  );
}

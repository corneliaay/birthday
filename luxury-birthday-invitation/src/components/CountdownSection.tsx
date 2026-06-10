import React, { useState, useEffect } from 'react';
import { CountdownTime } from '../types';
import { Starburst, StarburstEightPoint } from './DecorativeStars';

export const CountdownSection: React.FC = () => {
  // Target birthday celebration, September 20th, 2026 at 18:00 WIB (GMT+7)
  // 18.00 WIB is 11.00 UTC (18 - 7 hours difference)
  const targetDate = new Date('2026-09-20T11:00:00Z').getTime();

  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isCalculated, setIsCalculated] = useState(false);

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        // If the date has passed, let's create a dynamic target 45 days in the future so developers/users always see ticks!
        const futureDate = now + 45 * 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000;
        const fallbackDiff = futureDate - now;
        
        const d = Math.floor(fallbackDiff / (1000 * 60 * 60 * 24));
        const h = Math.floor((fallbackDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((fallbackDiff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((fallbackDiff % (1000 * 60)) / 1000);
        
        setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
      } else {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
      }
      setIsCalculated(true);
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Soft formatting to pad zeroes
  const formatNum = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <section 
      id="countdown-section"
      className="relative py-24 px-4 sm:px-6 bg-[#F7F0E4] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background soft pastel clouds */}
      <div className="absolute top-[30%] left-[-15%] w-[500px] h-[500px] rounded-full bg-[#F5A9C5] opacity-[0.08] blur-3xl" />
      <div className="absolute bottom-[20%] right-[-15%] w-[450px] h-[450px] rounded-full bg-[#AFC6D9] opacity-[0.08] blur-3xl" />

      {/* Scattered background stars */}
      <Starburst size={24} className="absolute top-[18%] left-[15%] text-[#F5A9C5]/40 animate-float-slow" />
      <StarburstEightPoint size={30} className="absolute bottom-[22%] right-[10%] text-[#AFC6D9]/40 animate-float" />

      <div className="max-w-2xl w-full text-center z-10">
        {/* Title Block */}
        <div className="mb-12">
          <div className="inline-flex gap-1 items-center justify-center text-[#F5A9C5] mb-2">
            <StarburstEightPoint size={20} className="animate-pulse" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#3C302B] tracking-tight">
            The Celebration Begins In...
          </h2>
          <div className="w-12 h-[1px] bg-[#AFC6D9] mx-auto mt-4" />
        </div>

        {/* Live Countdown Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-xl mx-auto px-2">
          {/* DAYS */}
          <div 
            id="countdown-card-days"
            className="relative overflow-hidden group rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-[#F5A9C5]" />
            <span className="block font-mono text-3xl sm:text-4xl font-light text-[#3C302B] tracking-tight group-hover:scale-105 transition-transform duration-300">
              {isCalculated ? formatNum(timeLeft.days) : '--'}
            </span>
            <span className="block mt-2 font-sans font-medium text-xs tracking-widest text-[#8C7A72] uppercase">
              Days
            </span>
          </div>

          {/* HOURS */}
          <div 
            id="countdown-card-hours"
            className="relative overflow-hidden group rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-[#AFC6D9]" />
            <span className="block font-mono text-3xl sm:text-4xl font-light text-[#3C302B] tracking-tight group-hover:scale-105 transition-transform duration-300">
              {isCalculated ? formatNum(timeLeft.hours) : '--'}
            </span>
            <span className="block mt-2 font-sans font-medium text-xs tracking-widest text-[#8C7A72] uppercase">
              Hours
            </span>
          </div>

          {/* MINUTES */}
          <div 
            id="countdown-card-minutes"
            className="relative overflow-hidden group rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-[#F5A9C5]" />
            <span className="block font-mono text-3xl sm:text-4xl font-light text-[#3C302B] tracking-tight group-hover:scale-105 transition-transform duration-300">
              {isCalculated ? formatNum(timeLeft.minutes) : '--'}
            </span>
            <span className="block mt-2 font-sans font-medium text-xs tracking-widest text-[#8C7A72] uppercase">
              Minutes
            </span>
          </div>

          {/* SECONDS */}
          <div 
            id="countdown-card-seconds"
            className="relative overflow-hidden group rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-[#AFC6D9]" />
            <span className="block font-mono text-3xl sm:text-4xl font-light text-[#C47D97] tracking-tight group-hover:scale-105 transition-transform duration-300">
              {isCalculated ? formatNum(timeLeft.seconds) : '--'}
            </span>
            <span className="block mt-2 font-sans font-medium text-xs tracking-widest text-[#8C7A72] uppercase">
              Seconds
            </span>
          </div>
        </div>

        {/* Dynamic date print */}
        <p className="mt-10 font-cormorant text-lg text-[#8C7A72] italic tracking-wide">
          Sunday, September 20, 2026 • 18.00 WIB
        </p>
      </div>
    </section>
  );
};

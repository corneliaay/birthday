import React, { useState, useEffect, useRef } from 'react';
import { Music, VolumeX, Volume2 } from 'lucide-react';

export const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerIdRef = useRef<number | null>(null);
  const notesRef = useRef<number[]>([]);

  // Pentatonic layout for a celestial, warm, soothing lounge vibe
  const PENTATONIC = [
    261.63, // C4
    293.66, // D4
    329.63, // E4
    392.00, // G4
    440.00, // A4
    523.25, // C5
    587.33, // D5
    659.25, // E5
    783.99, // G5
    880.00, // A5
  ];

  const playAmbientNote = () => {
    if (!audioCtxRef.current || audioCtxRef.current.state === 'suspended') return;
    
    const ctx = audioCtxRef.current;
    
    // Choose a sweet chord-like combination or single arpeggio
    const now = ctx.currentTime;
    
    // Play a gentle low bass drone occasionally
    if (Math.random() < 0.25) {
      const droneOsc = ctx.createOscillator();
      const droneGain = ctx.createGain();
      
      droneOsc.type = 'triangle';
      droneOsc.frequency.setValueAtTime(130.81, now); // C3 or low G (98Hz)
      if (Math.random() < 0.5) {
        droneOsc.frequency.setValueAtTime(146.83, now); // D3
      }
      
      droneGain.gain.setValueAtTime(0, now);
      droneGain.gain.linearRampToValueAtTime(0.015, now + 1.5);
      droneGain.gain.exponentialRampToValueAtTime(0.0001, now + 6);
      
      droneOsc.connect(droneGain);
      droneGain.connect(ctx.destination);
      
      droneOsc.start(now);
      droneOsc.stop(now + 6);
    }

    // Main chime note
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'sine';
    // Choose a random high pentatonic note
    const randNote = PENTATONIC[Math.floor(Math.random() * PENTATONIC.length)];
    osc.frequency.setValueAtTime(randNote, now);

    // Warm filter to make it sound like a beautiful electric piano/rhodes chime
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, now);

    gainNode.gain.setValueAtTime(0, now);
    // Soft attack
    gainNode.gain.linearRampToValueAtTime(0.025, now + 0.1); 
    // Super long release
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 4);

    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 4.1);
  };

  const startScheduler = () => {
    if (timerIdRef.current) return;

    // Play initial note
    playAmbientNote();

    // Schedule subsequent notes at organic-feeling intervals
    const scheduleNext = () => {
      // Random delay between 1.5 and 3.5 seconds
      const delay = 1500 + Math.random() * 2000;
      timerIdRef.current = window.setTimeout(() => {
        playAmbientNote();
        scheduleNext();
      }, delay);
    };

    scheduleNext();
  };

  const stopScheduler = () => {
    if (timerIdRef.current) {
      clearTimeout(timerIdRef.current);
      timerIdRef.current = null;
    }
  };

  const toggleMusic = async () => {
    if (!audioCtxRef.current) {
      // Initialize AudioContext on first tap
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      audioCtxRef.current = new AudioContextClass();
    }

    if (isPlaying) {
      stopScheduler();
      if (audioCtxRef.current.state === 'running') {
        await audioCtxRef.current.suspend();
      }
      setIsPlaying(false);
    } else {
      if (audioCtxRef.current.state === 'suspended') {
        await audioCtxRef.current.resume();
      }
      startScheduler();
      setIsPlaying(true);
    }
  };

  // We can listen to a custom window event "open-invitation" to auto-play
  useEffect(() => {
    const handleAutoPlay = () => {
      if (!isPlaying) {
        toggleMusic();
      }
    };

    window.addEventListener('open-invitation', handleAutoPlay);
    return () => {
      window.removeEventListener('open-invitation', handleAutoPlay);
      stopScheduler();
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, [isPlaying]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        id="bg-music-toggle"
        onClick={toggleMusic}
        className={`flex items-center gap-2 p-3.5 rounded-full shadow-lg border transition-all duration-500 hover:scale-105 active:scale-95 ${
          isPlaying 
            ? 'bg-[#F5A9C5] border-[#F5A9C5] text-white shadow-[#F5A9C5]/30' 
            : 'bg-white/80 backdrop-blur-md border-[#AFC6D9]/40 text-[#4A5568]'
        }`}
        title={isPlaying ? "Mute Background Ambience" : "Play Background Ambience"}
      >
        <div className="relative flex items-center justify-center">
          {isPlaying ? (
            <>
              <Volume2 className="h-5 w-5 animate-pulse" />
              <div className="absolute -top-1 -right-1 flex gap-0.5">
                <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              </div>
            </>
          ) : (
            <VolumeX className="h-5 w-5 opacity-80" />
          )}
        </div>
        <span className="text-xs font-semibold tracking-wider uppercase pr-1 font-sans hidden sm:inline">
          {isPlaying ? "Sound Off" : "Ambient Sound"}
        </span>
      </button>
    </div>
  );
};

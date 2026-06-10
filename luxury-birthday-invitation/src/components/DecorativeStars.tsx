import React from 'react';

interface StarProps {
  className?: string;
  size?: number;
  color?: string;
  glow?: boolean;
}

// Luxurious 4-point editorial sparkle star
export const Starburst: React.FC<StarProps> = ({ 
  className = '', 
  size = 24, 
  color = 'text-[#F5A9C5]', 
  glow = false 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transform transition-transform duration-1000 select-none pointer-events-none ${color} ${className}`}
      style={{
        filter: glow ? 'drop-shadow(0 0 4px rgba(245, 169, 197, 0.6))' : 'none'
      }}
    >
      <path 
        d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" 
        fill="currentColor"
      />
    </svg>
  );
};

// Luxurious 8-point royal editorial sparkle star
export const StarburstEightPoint: React.FC<StarProps> = ({ 
  className = '', 
  size = 32, 
  color = 'text-[#AFC6D9]',
  glow = false
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transform transition-transform duration-1000 select-none pointer-events-none ${color} ${className}`}
      style={{
        filter: glow ? 'drop-shadow(0 0 6px rgba(175, 198, 217, 0.5))' : 'none'
      }}
    >
      <path 
        d="M16 0C16 8.83656 23.1634 16 32 16C23.1634 16 16 23.1634 16 32C16 23.1634 8.83656 16 0 16C8.83656 16 16 8.83656 16 0Z" 
        fill="currentColor"
      />
      <path 
        d="M16 5C16 11.0751 20.9249 16 27 16C20.9249 16 16 20.9249 16 27C16 20.9249 11.0751 16 5 16C11.0751 16 16 11.0751 16 5Z" 
        fill="currentColor"
        opacity="0.7"
        transform="rotate(45, 16, 16)"
      />
    </svg>
  );
};

export const FloatingStarsContainer: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Scattered background starbursts with different animations */}
      <Starburst 
        size={24} 
        className="absolute top-[8%] left-[8%] animate-float opacity-40 text-[#F5A9C5]" 
      />
      <StarburstEightPoint 
        size={36} 
        className="absolute top-[18%] right-[10%] animate-float-slow opacity-30 text-[#AFC6D9]" 
      />
      <Starburst 
        size={18} 
        className="absolute top-[35%] left-[5%] animate-float-fast opacity-50 text-[#AFC6D9]" 
      />
      <StarburstEightPoint 
        size={28} 
        className="absolute top-[48%] right-[8%] animate-float opacity-30 text-[#F5A9C5]" 
      />
      <Starburst 
        size={22} 
        className="absolute top-[65%] left-[12%] animate-float-slow opacity-40 text-[#F5A9C5]" 
      />
      <StarburstEightPoint 
        size={40} 
        className="absolute top-[78%] right-[15%] animate-float opacity-20 text-[#AFC6D9]" 
      />
      <Starburst 
        size={20} 
        className="absolute top-[88%] left-[7%] animate-float-fast opacity-50 text-[#F5A9C5]" 
      />
      <StarburstEightPoint 
        size={24} 
        className="absolute top-[94%] right-[5%] animate-float-slow opacity-40 text-[#AFC6D9]" 
      />
    </div>
  );
};

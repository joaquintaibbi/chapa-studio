import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function Logo({ className = '', size = 48, showText = false }: LogoProps) {
  return (
    <div id="chapa-logo-container" className={`flex items-center gap-3 ${className}`}>
      <img
        id="chapa-mullet-img"
        src="https://i.ibb.co/VWDrtJcT/Whats-App-Image-2026-06-17-at-17-01-20.jpg"
        alt="Chapa Studio Logo"
        width={size}
        height={size}
        style={{ width: size, height: size, backgroundColor: '#fdfdfd' }}
        className="transition-transform duration-300 hover:rotate-3 select-none flex-shrink-0 object-contain"
        referrerPolicy="no-referrer"
      />

      {showText && (
        <div id="chapa-logo-text" className="flex flex-col">
          <span className="font-display text-xl font-black tracking-tight text-neutral-900 flex items-center uppercase leading-none">
            CHAPA<span className="text-chapa-orange ml-1">STUDIO</span>
          </span>
          <span className="font-mono text-[9px] tracking-widest text-neutral-500 uppercase mt-0.5 font-bold">
            Workflows & IA
          </span>
        </div>
      )}
    </div>
  );
}

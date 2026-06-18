import React from 'react';
import { Sparkles, Cpu, Zap, Radio } from 'lucide-react';

export default function AestheticMarquee() {
  const marqueeItems = [
    'CHAPA STUDIO',
    'AUTOMATIZACIÓN EN PILOTO AUTOMÁTICO',
    'WHATSAPP BUSINESS',
    'INSTAGRAM AUTO-DM',
    'GOOGLE SHEETS SINCRO',
    'AGENDAR TURNOS',
    'PASAR PRESUPUESTOS DE CORRIDO',
    'MÁS TIEMPO EN TU DÍA',
    'TECNOLOGÍA SIMPLE PARA TODOS'
  ];

  // Repeat items to fill space and guarantee seamless looping
  const repeatedMarquee = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div id="aesthetic-marquee-section" className="relative bg-neutral-950 border-y-4 border-neutral-900 py-3.5 sm:py-5 overflow-hidden z-20">
      {/* Visual Accent Styles for seamless performance-friendly css animation */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: scroll-left 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Scrolling container */}
      <div className="relative flex items-center overflow-hidden">
        <div className="animate-marquee gap-8 sm:gap-14">
          {repeatedMarquee.map((text, idx) => (
            <div key={idx} className="flex items-center gap-2 sm:gap-4 shrink-0 select-none">
              <span className="font-display text-lg sm:text-2xl font-black uppercase tracking-tighter text-white">
                {text}
              </span>
              <div className="inline-flex items-center justify-center w-5 sm:w-7 h-5 sm:h-7 rounded-full bg-chapa-orange text-neutral-950">
                {idx % 3 === 0 ? (
                  <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 fill-current text-neutral-950" />
                ) : idx % 3 === 1 ? (
                  <Zap className="w-3 sm:w-4 h-3 sm:h-4 fill-current text-neutral-950" />
                ) : (
                  <Cpu className="w-3 sm:w-4 h-3 sm:h-4 text-neutral-950 stroke-[2.5]" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay status panel indicators (pure design - non functional) */}
      <div className="absolute inset-x-0 bottom-0.5 flex justify-center items-center gap-6 pointer-events-none opacity-20">
        <div className="flex items-center gap-1 font-mono text-[8px] text-chapa-orange font-bold uppercase tracking-widest">
          <Radio className="w-2.5 h-2.5 animate-pulse" /> Sincronización Rosario, AR
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-chapa-orange" />
        <div className="font-mono text-[8px] text-chapa-orange font-bold uppercase tracking-widest">
          Chapa Studio © 2026/06
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Coffee, Search, FileCheck, CheckSquare, HeartHandshake, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ProcessStep {
  num: string;
  icon: React.ReactNode;
  label: string;
  slogan: string;
  description: string;
  argentineVibe: string;
}

export default function Process() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const steps: ProcessStep[] = [
    {
      num: '01',
      icon: <Coffee className="w-6 h-6 text-chapa-orange" />,
      label: 'Escuchamos',
      slogan: 'Charla inicial sencilla',
      description: 'Nos reunimos para conocer de cerca tu caso y ver qué tareas repetitivas te quitan tiempo.',
      argentineVibe: '"Hablamos en criollo sobre tus rutinas diarias, sin tecnicismos."'
    },
    {
      num: '02',
      icon: <Search className="w-6 h-6 text-chapa-orange" />,
      label: 'Analizamos',
      slogan: 'Detectamos el cuello de botella',
      description: 'Encontramos las tareas clave que podemos automatizar para aliviar tu carga de inmediato.',
      argentineVibe: '"Calculamos exactamente cuánto tiempo libre vas a recuperar por semana."'
    },
    {
      num: '03',
      icon: <FileCheck className="w-6 h-6 text-chapa-orange" />,
      label: 'Planificamos',
      slogan: 'Propuesta clara',
      description: 'Te presentamos una solución simple y modular. Activás sólo lo que necesitás, por partes.',
      argentineVibe: '"Sin paquetes gigantes. Sencillo, transparente y de acuerdo a tu ritmo."'
    },
    {
      num: '04',
      icon: <CheckSquare className="w-6 h-6 text-chapa-orange" />,
      label: 'Conectamos',
      slogan: 'La magia trabajando',
      description: 'Vinculamos tus correos, planillas y mensajería para que la información empiece a fluir sola.',
      argentineVibe: '"Preparamos todo el circuito y te lo entregamos listo para usar."'
    },
    {
      num: '05',
      icon: <HeartHandshake className="w-6 h-6 text-chapa-orange" />,
      label: 'Acompañamos',
      slogan: 'Siempre cerca',
      description: 'Te capacitamos en 5 minutos y nos quedamos pendientes de que todo marche a la perfección.',
      argentineVibe: '"Damos soporte continuo para que tengas plena confianza en el sistema."'
    }
  ];

  return (
    <section id="proceso" className="py-20 lg:py-28 bg-white border-b border-neutral-200 relative text-chapa-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-chapa-orange mb-2 block">
            Cómo trabajamos
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tighter text-chapa-black">
            Paso a paso, sin vueltas
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base font-semibold max-w-2xl mx-auto">
            Nos metemos en el corazón de tu negocio de forma rápida y práctica para armar integraciones reales.
          </p>
        </div>

        {/* Process Timeline Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-8 relative">
          
          {/* Connecting Line behind items (Desktop only) */}
          <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-neutral-200 z-0 pointer-events-none" />

          {steps.map((step, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={step.num}
                className="relative z-10 flex flex-col group items-center text-center p-4 rounded-2xl transition-all hover:bg-neutral-50/50"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                
                {/* Step Circle Bubble */}
                <div className={`w-16 h-16 rounded-full flex flex-col items-center justify-center border-2 transition-all duration-300 mb-4 ${
                  isHovered 
                    ? 'bg-chapa-black border-chapa-black text-white scale-110 shadow-lg' 
                    : 'bg-neutral-100 border-neutral-200 text-chapa-black'
                }`}>
                  <span className={`font-display text-lg font-black tracking-tight ${isHovered ? 'text-white' : 'text-chapa-black'}`}>
                    {step.num}
                  </span>
                </div>

                {/* Step Slogan pill */}
                <span className="text-[10px] text-chapa-orange font-mono uppercase tracking-widest font-black mb-1">
                  {step.slogan}
                </span>

                {/* Label */}
                <h3 className="font-display text-lg font-black uppercase tracking-tight text-chapa-black group-hover:text-chapa-orange transition-colors">
                  {step.label}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 text-xs sm:text-sm font-semibold leading-relaxed px-2 mt-2">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Process footer statement */}
        <div className="mt-16 bg-neutral-50 border-2 border-neutral-950 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-black text-chapa-black text-base uppercase tracking-tight">
              ¿Listo para sacarte ese peso de encima?
            </h4>
            <p className="text-neutral-600 text-xs sm:text-sm font-semibold">
              Escribinos hoy para coordinar un diagnóstico gratuito de 20 minutos.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('contacto');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto bg-chapa-orange hover:bg-chapa-black text-white font-display text-xs font-black uppercase tracking-widest px-6 py-3 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            Quiero mi diagnóstico
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        </div>

      </div>
    </section>
  );
}

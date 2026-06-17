import React from 'react';
import { ArrowRight, MessageSquare, Zap, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactForm() {
  const whatsappNumber = "543412762071";
  
  // High-fidelity pre-configured message
  const defaultMessage = "Hola Chapa Studio! 👋 ¿Cómo están? Quería consultarles cómo podría complementar su trabajo de automatización dentro de mi negocio para ganar tiempo y delegar tareas repetitivas.";

  const getWhatsAppLink = () => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-white border-b border-neutral-200 relative text-chapa-black overflow-hidden">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ff632105_1px,transparent_1px)] [background-size:20px_20px] opacity-70 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Simplified Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-chapa-orange mb-2">
            <Sparkles className="w-3.5 h-3.5 text-chapa-orange animate-pulse" />
            Contacto Directo
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tighter text-chapa-black leading-tight">
            ¿Listo para llevar tu <br />
            <span className="text-chapa-orange">negocio al siguiente nivel?</span>
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm font-semibold max-w-lg mx-auto leading-relaxed">
            Sin formularios aburridos, sin emails perdidos. Chateá con nosotros de forma directa por WhatsApp y diseñemos tu automatización hoy.
          </p>
        </div>

        {/* Combined Polished Card Layout */}
        <div className="max-w-2xl mx-auto bg-neutral-50 border-2 border-neutral-900 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_top_right,#ff632115,transparent_60%)] rounded-tr-3xl pointer-events-none" />

          <div className="space-y-8">
            
            {/* Visual Chat bubble preview */}
            <div className="space-y-3">
              <span className="font-mono text-[9px] text-neutral-400 font-bold uppercase tracking-wider block">
                Vista previa del mensaje que vas a enviar:
              </span>
              
              <div className="bg-white border-2 border-neutral-900 rounded-2xl rounded-tr-none p-4 sm:p-5 shadow-xs relative">
                {/* Visual tail for bubble */}
                <div className="absolute -top-[2px] -right-2.5 w-3 h-3 bg-white border-r-2 border-t-2 border-neutral-900 rotate-45 rounded-sm" />
                
                <p className="text-xs sm:text-sm text-neutral-800 font-semibold leading-relaxed">
                  "{defaultMessage}"
                </p>
                <div className="flex items-center justify-end gap-1 mt-3 text-[9px] font-bold text-neutral-400">
                  <span>Listado para enviar • WhatsApp</span>
                </div>
              </div>
            </div>

            {/* Quick Flow Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white/70 p-3.5 rounded-xl border border-neutral-200">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-chapa-orange flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">Respuesta al instante</h4>
                  <p className="text-[10px] text-neutral-500 font-medium mt-0.5">Te contestamos en minutos para coordinar.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/70 p-3.5 rounded-xl border border-neutral-200">
                <div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">Canal 100% Directo</h4>
                  <p className="text-[10px] text-neutral-500 font-medium mt-0.5">Sin intermediarios, hablas directo con nosotros.</p>
                </div>
              </div>
            </div>

            {/* Clean, high-impact CTA button */}
            <div className="pt-2 text-center">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-neutral-950 hover:bg-chapa-orange text-white font-display text-base font-black uppercase tracking-tight py-4 px-6 rounded-2xl transition-all shadow-lg hover:shadow-chapa-orange/20 cursor-pointer group"
              >
                <span>Hablar por WhatsApp conmigo</span>
                <ArrowRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-1 stroke-[2.5]" />
              </a>
              
              <div className="mt-4 flex items-center justify-center gap-4 text-[10px] font-bold text-neutral-400 font-mono">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-chapa-orange" /> Sincronización Rosario, AR
                </span>
                <span>•</span>
                <span>Lunes a Viernes</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

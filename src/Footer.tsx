import React from 'react';
import Logo from './Logo';
import { MessageSquare, MapPin, Zap, ArrowUp, Mail } from 'lucide-react';

export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="chapa-main-footer" className="bg-neutral-50 text-neutral-600 py-12 border-t border-neutral-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Logo brand */}
          <div className="md:col-span-5 space-y-4">
            <Logo size={38} showText={true} />
            <p className="text-xs sm:text-sm text-neutral-600 max-w-sm leading-relaxed font-semibold">
              Somos un estudio de automatizaciones. Ayudamos a pymes, profesionales y comercios a simplificar sus procesos para que recuperen tiempo valioso.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 font-bold">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-chapa-orange" /> Rosario, Argentina
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Zap className="w-3 h-3 text-chapa-orange" /> Conexiones Útiles
              </span>
            </div>
          </div>

          {/* Quick links to scroll */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display text-chapa-black text-xs font-black uppercase tracking-widest">
              Sectores
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm font-semibold text-neutral-500">
              <li>
                <button onClick={() => scrollTo('servicios')} className="hover:text-chapa-orange hover:underline cursor-pointer">
                  Nuestros Servicios
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('proceso')} className="hover:text-chapa-orange hover:underline cursor-pointer">
                  Cómo Trabajamos
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('diferencial')} className="hover:text-chapa-orange hover:underline cursor-pointer">
                  Por Qué Nosotros
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display text-chapa-black text-xs font-black uppercase tracking-widest">
              Contacto Directo
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold">
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-chapa-orange shrink-0" />
                <a href="https://wa.me/543412762071" target="_blank" rel="noopener noreferrer" className="hover:text-chapa-orange hover:underline">
                  +54 341 2762071 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-chapa-orange shrink-0" />
                <a href="mailto:chapastudioIA@gmail.com" className="hover:text-chapa-orange hover:underline">
                  chapastudioIA@gmail.com
                </a>
              </li>
            </ul>
            <div className="pt-2">
              <span className="inline-block text-[9.5px] font-mono text-neutral-600 bg-neutral-200/70 border border-neutral-300 py-1 px-2.5 rounded-full font-bold">
                ⌚ Lunes a Viernes de 9:00 a 18:00 (GMT-3)
              </span>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="border-t border-neutral-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[11px] text-neutral-500 font-semibold font-sans">
            © {new Date().getFullYear()} Chapa Studio. Todos los derechos reservados. <br />
            Construyendo circuitos que salvan el día.
          </p>
          
          <button
            onClick={scrollUp}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-200 border border-neutral-300 hover:border-chapa-orange text-xs text-neutral-700 hover:text-chapa-orange transition-all cursor-pointer font-bold"
            aria-label="Scroll to top"
          >
            Volver arriba
            <ArrowUp className="w-3.5 h-3.5 text-chapa-orange stroke-[2.5]" />
          </button>
        </div>

      </div>
    </footer>
  );
}

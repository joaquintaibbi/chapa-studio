import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, ArrowRight, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { label: 'Qué hacemos', id: 'servicios' },
    { label: 'Cómo trabajamos', id: 'proceso' },
  ];

  return (
    <header
      id="chapa-main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Logo size={42} showText={true} />
            </div>
            
            {/* Elegant premium non-functional visual badge */}
            <div className="hidden lg:flex items-center gap-1.5 bg-neutral-950 px-2.5 py-1 rounded-md border border-chapa-orange/30 select-none text-[8.5px] font-mono font-black tracking-widest text-chapa-orange uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-chapa-orange animate-pulse" />
              SISTEMA AUTOMÁTICO ACTIVO
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-display text-[13px] font-bold uppercase tracking-widest text-neutral-800 hover:text-chapa-orange transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollToSection('contacto')}
              className="bg-chapa-black text-white hover:bg-chapa-orange font-display text-[12px] font-black uppercase tracking-widest px-5 py-2.5 rounded transition-all duration-200 shadow-md flex items-center gap-2 cursor-pointer"
            >
              ¡Hablemos!
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-900 hover:text-chapa-orange p-2 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-neutral-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 px-4 rounded-xl font-display text-base font-bold text-neutral-800 hover:bg-neutral-100 hover:text-chapa-orange transition-all"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 px-4">
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="w-full bg-chapa-orange hover:bg-chapa-orange-hover text-white font-display font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  ¡Quiero automatizar!
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

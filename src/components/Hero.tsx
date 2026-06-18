import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Phone, Video, MoreVertical, CheckCheck, Smile, Paperclip, Send, FileText, CalendarDays } from 'lucide-react';
import { motion } from 'motion/react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  type?: 'text' | 'document' | 'appointment';
  documentName?: string;
  documentSize?: string;
  appointmentData?: {
    title: string;
    details: string;
    host: string;
  };
}

interface ChatScriptStep {
  sender: 'bot' | 'user';
  text: string;
  typingMs: number;
  waitAfterMs: number;
  type?: 'text' | 'document' | 'appointment';
  documentName?: string;
  documentSize?: string;
  appointmentData?: {
    title: string;
    details: string;
    host: string;
  };
}

const chatScript: ChatScriptStep[] = [
  { 
    sender: 'user', 
    text: 'Hola! Vi el aviso del depto en Rosario. Sigue disponible para alquiler?', 
    typingMs: 1000, 
    waitAfterMs: 900 
  },
  { 
    sender: 'bot', 
    text: 'Hola Martín 👋 Sí, sigue disponible. Es un semipiso espectacular en excelente zona de Rosario.', 
    typingMs: 1400, 
    waitAfterMs: 800 
  },
  { 
    sender: 'bot', 
    text: '¿Querés que te pase los detalles y agendemos una visita?', 
    typingMs: 1000, 
    waitAfterMs: 1000 
  },
  { 
    sender: 'user', 
    text: 'Sí, dale. Cuánto está?', 
    typingMs: 800, 
    waitAfterMs: 1000 
  },
  { 
    sender: 'bot', 
    text: '$350.000/mes — 2 amb, 45m², balcón amplio y bajas expensas. Te mando ficha + requisitos 👇', 
    typingMs: 1600, 
    waitAfterMs: 600 
  },
  { 
    sender: 'bot', 
    text: '', 
    typingMs: 0, 
    waitAfterMs: 1200,
    type: 'document',
    documentName: 'Ficha_Alquiler_Rosario_2amb.pdf',
    documentSize: '1.2 MB'
  },
  { 
    sender: 'user', 
    text: 'Mañana 18hs me viene de diez.', 
    typingMs: 1000, 
    waitAfterMs: 1000 
  },
  { 
    sender: 'bot', 
    text: 'Listo, agendado para mañana a las 18:00 hs ✅ Te esperamos con Lucía en el edificio.', 
    typingMs: 1500, 
    waitAfterMs: 600 
  },
  { 
    sender: 'bot', 
    text: '', 
    typingMs: 0, 
    waitAfterMs: 8500, // Keep visible for 8.5 seconds before loop restart
    type: 'appointment',
    appointmentData: {
      title: 'Visita Depto Rosario 🔑',
      details: 'Mañana · 18:00 hs · Lucía R.',
      host: 'Lucía R.'
    }
  }
];

const TypingIndicator = ({ color = 'bg-neutral-400' }: { color?: string }) => (
  <div className="flex items-center gap-1.5 px-1 py-1">
    <span className={`w-1.5 h-1.5 rounded-full ${color} animate-bounce`} style={{ animationDelay: '0ms' }} />
    <span className={`w-1.5 h-1.5 rounded-full ${color} animate-bounce`} style={{ animationDelay: '150ms' }} />
    <span className={`w-1.5 h-1.5 rounded-full ${color} animate-bounce`} style={{ animationDelay: '300ms' }} />
  </div>
);

export default function Hero() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [isUserTyping, setIsUserTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    const section = document.getElementById('contacto');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const section = document.getElementById('servicios');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Chat simulator script cycle
  useEffect(() => {
    let isMounted = true;
    let timeoutId: NodeJS.Timeout;

    const runScript = async () => {
      if (!isMounted) return;
      setMessages([]);
      setIsBotTyping(false);
      setIsUserTyping(false);

      // Initial buffer delay before starting
      await new Promise(resolve => { timeoutId = setTimeout(resolve, 800); });
      if (!isMounted) return;

      for (let i = 0; i < chatScript.length; i++) {
        const item = chatScript[i];
        
        // Trigger specific typing state
        if (item.sender === 'bot') {
          setIsBotTyping(true);
        } else {
          setIsUserTyping(true);
        }

        // Wait during typing animation phase
        await new Promise(resolve => { timeoutId = setTimeout(resolve, item.typingMs); });
        if (!isMounted) return;

        setIsBotTyping(false);
        setIsUserTyping(false);

        // Fetch dynamic Argentine formatting time
        const now = new Date();
        const timeStr = now.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });

        setMessages(prev => [
          ...prev,
          {
            id: `${i}-${Date.now()}`,
            sender: item.sender as 'bot' | 'user',
            text: item.text,
            time: timeStr,
            type: item.type,
            documentName: item.documentName,
            documentSize: item.documentSize,
            appointmentData: item.appointmentData
          }
        ]);

        // Pause before launching next agent turn
        await new Promise(resolve => { timeoutId = setTimeout(resolve, item.waitAfterMs); });
        if (!isMounted) return;
      }

      // Chain back context to restart infinitely
      if (isMounted) {
        runScript();
      }
    };

    runScript();

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, []);

  // Smooth container auto-scroll response (scoped fully inside the WhatsApp box so the main website page stays still)
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isBotTyping, isUserTyping]);

  return (
    <section
      id="hero-section"
      className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 border-b border-neutral-200 overflow-hidden bg-white text-chapa-black"
    >
      {/* Absolute Aesthetic Background Accent */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-chapa-orange/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-chapa-orange/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tag / Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-chapa-orange/10 border border-chapa-orange/20"
            >
              <Sparkles className="w-4 h-4 text-chapa-orange" />
              <span className="font-display text-[11px] font-black tracking-widest text-chapa-orange uppercase">
                TU NEGOCIO EN PILOTO AUTOMÁTICO
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-7xl lg:text-[76px] xl:text-[88px] leading-[0.9] font-black uppercase tracking-tighter text-chapa-black"
            >
              Automatizá <br />
              <span className="text-chapa-orange">
                Sin Vueltas.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-neutral-600 text-base sm:text-lg max-w-xl leading-relaxed font-semibold"
            >
              Conectá tu WhatsApp, planillas de cálculo, correos y calendarios. Dejá que la tecnología trabaje por vos mientras te concentrás en escalar tus ventas.
            </motion.p>

            {/* Trust Badges / Stats Inline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 border-y border-neutral-900/10 py-5 max-w-lg relative"
            >
              <div className="absolute -top-[1.5px] left-1/4 w-[12px] h-[3px] bg-chapa-orange" />
              <div className="absolute -bottom-[1.5px] right-1/4 w-[12px] h-[3px] bg-chapa-orange" />

              <div>
                <span className="flex items-center gap-1.5 font-display text-lg sm:text-xl font-black text-chapa-black uppercase tracking-tight">
                  <span className="w-1.5 h-1.5 rounded-full bg-chapa-orange animate-pulse inline-block shrink-0" />
                  100%
                </span>
                <span className="block text-[10px] text-neutral-500 font-mono uppercase tracking-wider font-bold">Hecho a medida</span>
              </div>
              <div className="border-l border-neutral-200/80 pl-4">
                <span className="flex items-center gap-1.5 font-display text-lg sm:text-xl font-black text-chapa-black uppercase tracking-tight">
                  <span className="w-1.5 h-1.5 rounded-full bg-chapa-black inline-block shrink-0" />
                  AL INSTANTE
                </span>
                <span className="block text-[10px] text-neutral-500 font-mono uppercase tracking-wider font-bold">Sin Esperas</span>
              </div>
              <div className="border-l border-neutral-200/80 pl-4">
                <span className="flex items-center gap-1.5 font-display text-lg sm:text-xl font-black text-chapa-black uppercase tracking-tight">
                  <span className="w-1.5 h-1.5 rounded-full bg-chapa-orange inline-block shrink-0" />
                  COMODIDAD
                </span>
                <span className="block text-[10px] text-neutral-500 font-mono uppercase tracking-wider font-bold">Sin vueltas</span>
              </div>
            </motion.div>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={scrollToContact}
                className="bg-chapa-black hover:bg-chapa-orange text-white font-display text-base font-black px-8 py-4 rounded-full uppercase tracking-tight transition-all hover:scale-105 shadow-md hover:shadow-chapa-orange/20 cursor-pointer flex items-center gap-2"
              >
                Hablar por WhatsApp conmigo
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
              
              <button
                onClick={scrollToServices}
                className="bg-transparent border-2 border-neutral-900 hover:border-chapa-orange text-chapa-black hover:text-chapa-orange font-display text-sm font-black uppercase tracking-wider px-8 py-4 rounded-full transition-all cursor-pointer"
              >
                Ver servicios
              </button>
            </motion.div>
          </div>

          {/* Hero Right - Premium Simulated WhatsApp Device Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 w-full flex flex-col justify-center"
          >
            {/* Smartphone device frame */}
            <div id="simulated-brand-smartphone" className="w-full max-w-[365px] mx-auto border-4 border-neutral-900 rounded-[38px] overflow-hidden shadow-2xl relative bg-chapa-black border-chapa-black">
              
              {/* Dynamic Island Lens decoration */}
              <div className="h-6 bg-neutral-900 w-full flex justify-center items-center relative z-20">
                <div className="w-20 h-4 bg-black rounded-full flex items-center justify-end px-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
                </div>
              </div>

              {/* Chat Custom Brand Header */}
              <div className="bg-neutral-900 text-white px-3.5 py-2.5 flex items-center justify-between border-b border-neutral-800 relative z-10">
                <div className="flex items-center gap-2">
                  {/* Custom brand circular logo */}
                  <div className="w-9 h-9 rounded-full bg-white border border-chapa-orange flex items-center justify-center p-0.5 shrink-0 overflow-hidden">
                    <img 
                      src="https://i.ibb.co/VWDrtJcT/Whats-App-Image-2026-06-17-at-17-01-20.jpg" 
                      alt="Chapa Studio Icon" 
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-[13px] tracking-tight text-white flex items-center gap-1 leading-none">
                      Kronos Desarrollos 🏢
                    </h3>
                    <div className="flex items-center gap-1 mt-0.5">
                      {isBotTyping ? (
                        <span className="text-chapa-orange text-[9px] font-bold animate-pulse leading-none">
                          Escribiendo...
                        </span>
                      ) : (
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
                          <span className="text-neutral-400 text-[9px] font-semibold leading-none">En línea</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Header controls decoration */}
                <div className="flex items-center gap-2.5 text-neutral-400">
                  <Video className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                  <Phone className="w-3.5 h-3.5 cursor-pointer hover:text-white transition-colors" />
                  <MoreVertical className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                </div>
              </div>

              {/* Chat Content Body with classic WhatsApp styling */}
              <div 
                ref={chatContainerRef}
                className="h-[365px] overflow-y-auto px-3 py-4 flex flex-col gap-3.5 relative select-none"
                style={{ 
                  backgroundColor: '#efeae2', 
                  backgroundImage: 'radial-gradient(#df53240a 1.2px, transparent 1.2px)',
                  backgroundSize: '14px 14px' 
                }}
              >
                {/* Safety Trust banner stamp */}
                <div className="self-center bg-amber-50/90 border border-amber-200 text-amber-800 text-[9px] font-mono font-extrabold uppercase px-2.5 py-1 rounded-md shadow-xs text-center max-w-[90%] leading-snug">
                  🛡️ Chatbot simulador de flujos en tiempo real
                </div>

                {/* Simulated messages list */}
                {messages.map((msg) => {
                  const isBot = msg.sender === 'bot';

                  if (msg.type === 'document') {
                    return (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, scale: 0.9, y: 12 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                        className="self-start max-w-[85%] bg-white rounded-2xl rounded-tl-none py-1.5 px-2.5 shadow-xs border border-neutral-200/45"
                      >
                        <div id="simulated-wa-doc" className="flex items-center gap-2.5 bg-neutral-50 px-2.5 py-2.5 rounded-lg border border-neutral-200/40">
                          <div className="w-9 h-9 rounded-md bg-rose-500 flex items-center justify-center p-1.5 text-white shrink-0">
                            <FileText className="w-5 h-5 stroke-[2.5]" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-[11px] font-bold text-neutral-800 truncate leading-snug">{msg.documentName}</p>
                            <p className="text-[9px] font-extrabold text-neutral-400 mt-0.5">{msg.documentSize} • PDF</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-end gap-1 mt-1 text-[8px] font-bold text-neutral-400">
                          <span>{msg.time}</span>
                        </div>
                      </motion.div>
                    );
                  }

                  if (msg.type === 'appointment') {
                    return (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, scale: 0.9, y: 12 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                        className="self-start max-w-[85%] bg-white rounded-2xl rounded-tl-none py-2.5 px-3.5 shadow-md border-l-4 border-chapa-orange"
                      >
                        <div id="simulated-wa-booking" className="flex items-start gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-orange-100 text-chapa-orange flex items-center justify-center shrink-0 mt-0.5">
                            <CalendarDays className="w-4 h-4 stroke-[2.5]" />
                          </div>
                          <div>
                            <span className="text-[9px] text-chapa-orange font-bold uppercase tracking-wider block">Visita Agendada</span>
                            <h4 className="text-[11px] font-extrabold text-neutral-800 mt-0.5">{msg.appointmentData?.title}</h4>
                            <p className="text-[10px] text-neutral-500 font-semibold mt-0.5 leading-snug">{msg.appointmentData?.details}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-end gap-1 mt-2 text-[8px] font-bold text-neutral-400 border-t border-neutral-100/80 pt-1.5">
                          <span>Confirmación enviada • {msg.time}</span>
                        </div>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, scale: 0.9, y: 12 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                      className={`text-xs py-2 px-3 shadow-xs max-w-[85%] relative ${
                        isBot 
                          ? 'bg-white text-neutral-800 rounded-2xl rounded-tl-none self-start border-b border-neutral-200/45' 
                          : 'bg-chapa-orange text-white rounded-2xl rounded-tr-none self-end'
                      }`}
                    >
                      {/* Message dialogue bubble */}
                      <p className="leading-relaxed font-sans font-medium whitespace-pre-wrap">{msg.text}</p>
                      
                      {/* Stamp of time and check statuses */}
                      <div className={`flex items-center justify-end gap-1 mt-1 text-[8px] font-bold ${isBot ? 'text-neutral-400' : 'text-orange-100'}`}>
                        <span>{msg.time}</span>
                        {!isBot && (
                          <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb] shrink-0 fill-current" />
                        )}
                      </div>
                    </motion.div>
                  );
                })}

                {/* Animated Typing Indicator bubbles */}
                {isBotTyping && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white text-neutral-400 py-2.5 px-3.5 rounded-2xl rounded-tl-none shadow-xs self-start border border-neutral-100"
                  >
                    <TypingIndicator color="bg-chapa-orange" />
                  </motion.div>
                )}

                {isUserTyping && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-chapa-orange/80 py-2.5 px-3.5 rounded-2xl rounded-tr-none shadow-xs self-end"
                  >
                    <TypingIndicator color="bg-white" />
                  </motion.div>
                )}
              </div>

              {/* Bottom message simulated bar */}
              <div className="bg-neutral-100 border-t border-neutral-200/50 p-2 flex items-center gap-2 relative z-10 text-neutral-500">
                <Smile className="w-5 h-5 shrink-0 text-neutral-400 cursor-pointer" />
                <div className="flex-1 bg-white border border-neutral-200 rounded-full h-8 px-3 text-[10px] font-semibold text-neutral-400 flex items-center justify-between select-none">
                  <span>{isUserTyping ? 'Usuario está escribiendo...' : 'Mensaje interactivo'}</span>
                  <Paperclip className="w-3.5 h-3.5 shrink-0 text-neutral-400 cursor-pointer" />
                </div>
                <div className="w-8 h-8 rounded-full bg-chapa-orange flex items-center justify-center shrink-0">
                  <Send className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                </div>
              </div>

            </div>

            {/* Mobile simulator device shadow & hint caption */}
            <div className="mt-4 text-center">
              <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider font-mono">
                🎬 El chat se reinicia solo • Conversación automatizada
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

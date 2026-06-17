import React, { useState } from 'react';
import { Mail, MessageSquare, Calendar, FileSpreadsheet, Instagram, Zap, CheckCircle2, ArrowRight, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  detailDesc: string;
  tags: string[];
  steps: string[];
}

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>('whatsapp');

  const services: Service[] = [
    {
      id: 'whatsapp',
      icon: <MessageSquare className="w-6 h-6 text-chapa-orange" />,
      title: 'WhatsApp Business',
      shortDesc: 'Bots y respuestas automáticas inteligentes para que ningún cliente espere.',
      detailDesc: 'Creamos respuestas automáticas inteligentes para tu WhatsApp Business. Cuando un cliente te escribe pidiendo información de un producto, horarios o precios, el sistema le responde al toque, filtra a los curiosos de los compradores reales de forma amigable, y te avisa a vos para que cierres la venta.',
      tags: ['WhatsApp Business', 'Respuestas Rápidas', 'Atención 24/7'],
      steps: [
        'Tu cliente te manda un mensaje preguntando por algún servicio o producto',
        'El sistema ideal le responde de inmediato entregándole lo que necesita',
        'Si califica como interesado real, te llega una notificación directo a vos'
      ]
    },
    {
      id: 'mail',
      icon: <Mail className="w-6 h-6 text-chapa-orange" />,
      title: 'Mail',
      shortDesc: 'Seguimiento y respuestas por correo electrónico automáticas al instante.',
      detailDesc: 'Hacemos que tus correos electrónicos trabajen solos. Cada vez que alguien se interesa por tu negocio o te compra, el sistema le envía un mail de bienvenida bien diseñado, manda catálogos o archivos adjuntos sin demoras, y te mantiene en contacto con ellos sin que tengas que redactar nada a mano.',
      tags: ['Mails Automáticos', 'Avisos Instantáneos', 'Cero Tareas Manuales'],
      steps: [
        'Un usuario realiza una consulta o se registra para pedir información',
        'Nuestra automatización redacta y envía el correo correspondiente de inmediato',
        'El sistema te avisa cuando el cliente ya fue atendido con éxito'
      ]
    },
    {
      id: 'instagram',
      icon: <Instagram className="w-6 h-6 text-chapa-orange" />,
      title: 'Instagram',
      shortDesc: 'Respuestas por mensaje directo automáticas cuando comentan tus publicaciones.',
      detailDesc: 'Conectamos tus publicaciones con tus chats. Si subís una foto o un video y alguien comenta con una palabra clave (como "INFO" o "QUIERO"), el sistema le envía un mensaje privado automáticamente con los detalles exactos del producto, el precio y un link directo para comprar o para ir a tu WhatsApp.',
      tags: ['Mensajes Directos', 'Respuestas automáticas', 'Ventas en Redes'],
      steps: [
        'Un seguidor comenta tu publicación de Instagram para pedir información',
        'El sistema le envía automáticamente un mensaje privado con los precios y datos',
        'El cliente recibe el catálogo al instante y hace clic para continuar la compra'
      ]
    },
    {
      id: 'sheets',
      icon: <FileSpreadsheet className="w-6 h-6 text-chapa-orange" />,
      title: 'Google Sheets',
      shortDesc: 'Planillas organizadas solas con todos tus clientes y ventas cargados.',
      detailDesc: 'Olvidate de copiar y pegar datos de un lado a otro. Hacemos que cada persona que te hable por el chat, te deje un contacto o te haga un pago, aparezca organizada automáticamente en una fila de tu Google Sheets para que lleves el control de todo tu negocio en un solo lugar y ordenado.',
      tags: ['Planillas de Control', 'Google Sheets', 'Orden de Clientes'],
      steps: [
        'Se genera una nueva acción (consulta por WhatsApp, pago o registro nuevo)',
        'La planilla de control se actualiza sola al instante con todos los datos necesarios',
        'Tenés la información clasificada y disponible, lista para coordinar'
      ]
    },
    {
      id: 'calendar',
      icon: <Calendar className="w-6 h-6 text-chapa-orange" />,
      title: 'Calendar',
      shortDesc: 'Tus turnos y llamadas virtuales agendados automáticamente.',
      detailDesc: 'Evitá el clásico intercambio de "hoy no puedo, ¿el martes a las 4 podés?". Le pasás a tu cliente un enlace personalizado donde ve tus horarios disponibles reales, elige el que mejor le quede, y la reunión se agenda sola en tu calendario con link de llamada y recordatorio automático para ambos.',
      tags: ['Google Calendar', 'Reserva de Citas', 'Recordatorios por WhatsApp'],
      steps: [
        'Le enviás tu enlace de turnos disponible al cliente o interesado',
        'El cliente selecciona el día y horario que mejor le quede en segundos',
        'La cita se guarda sola en tu calendario y se envían recordatorios para que no se olvide'
      ]
    },
    {
      id: 'presupuestos',
      icon: <Zap className="w-6 h-6 text-chapa-orange" />,
      title: 'Pasar Presupuestos',
      shortDesc: 'Generación y envío automático de propuestas y presupuestos en PDF de corrido.',
      detailDesc: 'No pierdas más tiempo sumando precios con la calculadora y haciendo documentos a mano. Diseñamos un flujo en el que ingresás los datos del pedido del cliente o rellenás unas simples preguntas, y el sistema calcula los costos, formatea un PDF impecable con el logotipo de tu marca, y se lo envía directo por mensaje.',
      tags: ['Pasar Presupuestos', 'Cotizaciones en PDF', 'Ahorro de Tiempo'],
      steps: [
        'Ingresás los requerimientos básicos o el pedido del cliente en un formulario simple',
        'El sistema calcula los importes exactos y maqueta un PDF estético',
        'El presupuesto se le envía automáticamente al cliente por WhatsApp o mail'
      ]
    }
  ];

  const currentService = services.find(s => s.id === activeTab) || services[0];

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-white border-b border-neutral-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-chapa-orange mb-2 block">
            Nuestros Trabajos
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tighter text-chapa-black">
            Soluciones simples <br className="hidden sm:inline" /> para dueños de negocios
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base font-semibold max-w-2xl mx-auto leading-relaxed">
            Hacemos que tus sistemas del día a día se conecten entre sí para ahorrar horas de trabajo manual. Sin complicaciones.
          </p>
        </div>

        {/* Bento Grid layouts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Service Card Selector */}
          <div className="lg:col-span-6 space-y-3">
            {services.map((service) => {
              const isActive = service.id === activeTab;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 flex gap-4 cursor-pointer relative overflow-hidden ${
                    isActive
                      ? 'bg-neutral-50 border-neutral-900 shadow-lg chapa-neon-shadow'
                      : 'bg-white border-neutral-200/80 hover:border-neutral-400 hover:bg-neutral-50/50'
                  }`}
                >
                  {/* Left Active Indicator line */}
                  {isActive && (
                    <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-chapa-orange" />
                  )}

                  <div className={`p-3 rounded-xl flex-shrink-0 h-12 w-12 flex items-center justify-center transition-all ${
                    isActive ? 'bg-chapa-orange/10 text-chapa-orange' : 'bg-neutral-100 text-neutral-800'
                  }`}>
                    {service.icon}
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-display font-black text-chapa-black text-base sm:text-lg flex items-center gap-2">
                      {service.title}
                      {isActive && <CheckCircle2 className="w-4.5 h-4.5 text-chapa-orange" />}
                    </h3>
                    <p className="text-neutral-600 text-xs sm:text-sm font-medium line-clamp-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}

            {/* Custom tailored callout */}
            <div className="p-6 rounded-2xl bg-neutral-50 border-2 border-neutral-900 mt-6 text-center lg:text-left flex flex-col sm:flex-row items-center gap-4 justify-between">
              <div>
                <p className="text-sm font-black text-chapa-black">¿Querés algo personalizado?</p>
                <p className="text-xs text-neutral-500 font-semibold mt-0.5">La conexión que necesites para tu negocio, la armamos.</p>
              </div>
              <button
                onClick={() => {
                  const el = document.getElementById('contacto');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-display text-xs font-black text-white bg-chapa-black hover:bg-chapa-orange px-4 py-2.5 rounded-full uppercase tracking-wider transition-all cursor-pointer flex-shrink-0"
              >
                Consultar ahora
                <ArrowRight className="w-3 h-3 inline-block ml-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Live Step-by-Step Flow Simulation Workspace */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="bg-neutral-50 border-2 border-neutral-900 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-chapa-orange/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4 text-chapa-orange animate-pulse" />
                  <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-bold">
                    Vista del Proceso Automatizado
                  </span>
                </div>
                <span className="font-mono text-[10px] text-neutral-900 bg-neutral-200/80 px-2.5 py-0.5 rounded-full font-bold">
                  ACTIVO
                </span>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-black text-chapa-black">
                    {currentService.title}
                  </h3>
                  <p className="text-neutral-600 text-sm font-semibold leading-relaxed">
                    {currentService.detailDesc}
                  </p>
                </div>

                {/* Tech tags - clean visual only, no technical tools */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {currentService.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] font-bold text-neutral-900 bg-neutral-200 border border-neutral-300 px-2.5 py-1 rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Vertical visual timeline representation */}
                <div className="relative border-l-2 border-chapa-orange/30 ml-2.5 pl-6 pt-4 pb-2 space-y-6">
                  {currentService.steps.map((step, idx) => {
                    const isFirst = idx === 0;
                    return (
                      <div key={idx} className="relative">
                        {/* Dot indicator */}
                        <div className={`absolute -left-9.5 top-0.5 w-7 h-7 rounded-full flex items-center justify-center border-2 text-xs font-mono font-black ${
                          isFirst 
                            ? 'bg-chapa-orange text-white border-chapa-orange' 
                            : 'bg-white text-neutral-800 border-neutral-300'
                        }`}>
                          {idx + 1}
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-900 font-bold leading-relaxed">
                          {step}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

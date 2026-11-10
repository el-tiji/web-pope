import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle2, ArrowRight, Star, HelpCircle } from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';

export const Home = () => {
  return (
    <div className="space-y-20 pb-16">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-wide">
              <Sparkles className="w-4 h-4 text-sky-600" />
              Empresa de Servicios de Limpieza Certificada
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-900 leading-tight">
              Fresh, Spotless Cleaning for <span className="text-brand-500">Homes & Businesses</span>
            </h1>

            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
              Solución integral con atención personalizada y respuesta ágil. Cotiza en 2 minutos, programa tu servicio y realiza el seguimiento en tiempo real.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link 
                to="/quote" 
                className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-sky-500/25 transition-all text-base"
              >
                Obtener Cotización Instantánea
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-700 font-bold px-8 py-4 rounded-xl border border-slate-200 transition-all text-base"
              >
                Explorar Servicios
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-6 border-t border-slate-200">
              <div className="flex -space-x-2">
                <div className="w-9 h-9 rounded-full bg-brand-500 text-white font-bold text-xs flex items-center justify-center ring-2 ring-white">KP</div>
                <div className="w-9 h-9 rounded-full bg-sky-600 text-white font-bold text-xs flex items-center justify-center ring-2 ring-white">GP</div>
                <div className="w-9 h-9 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center ring-2 ring-white">MR</div>
              </div>
              <div className="text-xs">
                <div className="flex items-center text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <span className="text-slate-500 font-medium">Respaldado por personal capacitado y supervisión activa</span>
              </div>
            </div>

          </div>

          {/* Hero Visual Banner */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 text-white p-8 space-y-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">Panel en Tiempo Real</span>
                  <h3 className="text-2xl font-bold">Pope Cleaning Operations</h3>
                </div>
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-3 py-1 rounded-full font-semibold">
                  ● Sistema Activo
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>Asignación Inteligente</span>
                  <span className="text-sky-400 font-mono">Triaje Automático OK</span>
                </div>
                <p className="text-sm font-medium text-slate-100">
                  "Priorización de alertas y optimización de agenda con supervisión humana centralizada."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/5 rounded-xl p-3">
                  <div className="text-2xl font-black text-sky-400">99.5%</div>
                  <div className="text-[11px] text-slate-400">Disponibilidad del Servicio</div>
                </div>
                <div className="bg-white/5 rounded-xl p-3">
                  <div className="text-2xl font-black text-emerald-400">100%</div>
                  <div className="text-[11px] text-slate-400">Garantía Bond Back</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* How We Work Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-black text-brand-900">¿Cómo Funciona el Servicio?</h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Proceso transparente en 4 sencillos pasos desde la cotización inicial hasta la entrega final comprobada con evidencias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Solicita Cotización', desc: 'Selecciona el tipo de limpieza, tamaño del inmueble y fecha conveniente.' },
            { step: '02', title: 'Confirmación & Asignación', desc: 'El sistema valida disponibilidad y asigna al profesional calificado.' },
            { step: '03', title: 'Ejecución en Campo', desc: 'El trabajador registra inicio, lista de verificación y avance mediante App.' },
            { step: '04', title: 'Evidencia & Cierre', desc: 'Recibes reporte fotográfico con garantía de satisfacción total.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative space-y-3">
              <span className="text-4xl font-black text-sky-100 block">{item.step}</span>
              <h3 className="text-lg font-bold text-brand-900">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-black text-brand-900">Nuestros Servicios Principales</h2>
            <p className="text-slate-600 text-sm mt-1">Soluciones a la medida para residencias, empresas y mudanzas.</p>
          </div>
          <Link to="/services" className="text-brand-500 font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all mt-4 md:mt-0">
            Ver catálogo completo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_DATA.slice(0, 3).map((svc) => (
            <div key={svc.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-4">
              {svc.badge && (
                <span className="bg-sky-100 text-sky-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {svc.badge}
                </span>
              )}
              <h3 className="text-xl font-bold text-brand-900">{svc.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{svc.description}</p>
              <ul className="space-y-2 pt-2 border-t border-slate-100">
                {svc.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-100/60 p-8 rounded-3xl border border-slate-200 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-black text-brand-900">Preguntas Frecuentes</h2>
          <p className="text-xs text-slate-600">Todo lo que necesitas saber sobre el servicio y las garantías.</p>
        </div>

        <div className="space-y-3">
          {[
            { q: '¿Necesito estar presente durante el servicio de limpieza?', a: 'No es estrictamente necesario. Puedes dejar instrucciones de acceso seguro y el equipo notificará el inicio y fin con fotos desde la App.' },
            { q: '¿Ustedes suministran los insumos y equipos de aseo?', a: 'Sí, todo nuestro personal cuenta con insumos profesionales y equipos de aspiración de alta eficiencia.' },
            { q: '¿Cómo funciona la garantía Bond Back en limpiezas de entrega?', a: 'Si la inmobiliaria o arrendador genera alguna observación en las 72 horas posteriores, realizamos el retoque sin costo adicional.' }
          ].map((faq, i) => (
            <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-sm text-brand-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-sky-500" />
                {faq.q}
              </h4>
              <p className="text-xs text-slate-600 pl-6 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

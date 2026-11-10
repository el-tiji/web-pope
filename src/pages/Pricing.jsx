import { Link } from 'react-router-dom';

export const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-black text-brand-900">Transparencia y Estructura de Precios</h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Sin tarifas ocultas. Nuestras cotizaciones se calculan con base en las dimensiones reales, el nivel de profundidad requerido y la frecuencia.
        </p>
      </div>

      {/* Pricing factors */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: 'Tipo de Inmueble', desc: 'Casas, apartamentos, oficinas o bodegas.' },
          { title: 'Habitaciones & Baños', desc: 'Número de áreas húmedas y espacios principales.' },
          { title: 'Servicios Adicionales', desc: 'Lavadera de hornos, ventanas exteriores o alfombras.' },
          { title: 'Frecuencia del Servicio', desc: 'Descuentos especiales para contrataciones periódicas.' }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 font-black mx-auto flex items-center justify-center text-sm">
              0{idx+1}
            </div>
            <h3 className="font-bold text-brand-900 text-base">{item.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="bg-brand-900 text-white rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-black">¿Necesitas una tarifa estimada para tu propiedad?</h2>
          <p className="text-xs text-slate-300">Usa nuestro calculador de cotización en 5 pasos y recibe una propuesta instantánea.</p>
        </div>
        <Link 
          to="/quote" 
          className="bg-brand-500 hover:bg-brand-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-sky-500/30 transition-all text-sm shrink-0"
        >
          Iniciar Cotizador Online
        </Link>
      </div>

    </div>
  );
};

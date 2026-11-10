import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';

export const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-black text-brand-900">Catálogo de Servicios de Limpieza</h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Diseñados para cubrir requerimientos residenciales, comerciales e industriales con estándares de calidad estrictos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((svc) => (
          <div key={svc.id} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all space-y-6">
            <div className="space-y-4">
              {svc.badge && (
                <span className="bg-sky-100 text-sky-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {svc.badge}
                </span>
              )}
              <h3 className="text-2xl font-bold text-brand-900">{svc.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{svc.description}</p>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Incluye:</h4>
                <ul className="space-y-2">
                  {svc.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link 
              to="/quote" 
              className="w-full inline-flex items-center justify-center gap-2 bg-brand-50 hover:bg-brand-100 text-brand-900 font-bold text-xs py-3 rounded-xl transition-colors border border-brand-200"
            >
              Solicitar Cotización
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
};

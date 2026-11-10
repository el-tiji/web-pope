import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-900 text-slate-300 pt-16 pb-12 border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Col 1: Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-sky-500 text-brand-900 p-2 rounded-lg">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-2xl font-black tracking-tight text-white">POPE</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Servicios profesionales de limpieza residencial y comercial. Garantía de calidad, personal verificado y gestión eficiente auxiliada por IA.
          </p>
          <div className="flex items-center gap-2 text-xs text-sky-400 font-semibold pt-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Operaciones Supervisadas & Aseguradas</span>
          </div>
        </div>

        {/* Col 2: Servicios */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Servicios</h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li><Link to="/services" className="hover:text-white transition-colors">Limpieza Residencial</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Limpieza Profunda / Spring</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Entrega de Inmuebles (Vacate)</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Limpieza Comercial & Oficinas</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Lavado de Alfombras</Link></li>
          </ul>
        </div>

        {/* Col 3: Empresa */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Compañía</h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li><Link to="/about" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
            <li><Link to="/pricing" className="hover:text-white transition-colors">Transparencia de Precios</Link></li>
            <li><Link to="/quote" className="hover:text-white transition-colors">Solicitud de Cotización</Link></li>
            <li><Link to="/login" className="hover:text-white transition-colors">Portal Administrativo</Link></li>
          </ul>
        </div>

        {/* Col 4: Contacto */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Contacto</h4>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <Phone className="w-4 h-4 text-sky-400 shrink-0" />
            <span>+57 (601) 450-2930 / +57 310 000 0000</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <Mail className="w-4 h-4 text-sky-400 shrink-0" />
            <span>contacto@popecleaning.com</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Bogotá D.C. & Cobertura Metropolitana</span>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 mt-10 border-t border-brand-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>© 2026 Pope Cleaning Services. Trabajo de Grado - Universidad de San Buenaventura Bogotá.</p>
        <p className="text-[11px]">Desarrollado con arquitectura React + Vite + Tailwind CSS</p>
      </div>
    </footer>
  );
};

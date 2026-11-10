export const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Sobre Pope Cleaning</span>
          <h1 className="text-4xl font-black text-brand-900 leading-tight">
            A cleaner approach to your everyday life.
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Pope Cleaning Services es una iniciativa orientada a transformar la gestión de servicios operativos mediante la integración de desarrollo full-stack moderno y asistencia inteligente agéntica.
          </p>
        </div>
        <div className="bg-slate-100 p-8 rounded-3xl border border-slate-200 text-center space-y-3">
          <div className="w-16 h-16 bg-brand-900 text-sky-400 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
            USB
          </div>
          <h3 className="font-bold text-brand-900 text-base">Universidad de San Buenaventura Bogotá</h3>
          <p className="text-xs text-slate-500">Proyecto de Trabajo de Grado - Ingeniería de Sistemas 2026</p>
        </div>
      </div>

    </div>
  );
};

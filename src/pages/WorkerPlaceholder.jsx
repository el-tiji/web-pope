import { Construction } from 'lucide-react';

export const WorkerPlaceholder = () => {
  return (
    <div className="max-w-md mx-auto px-4 py-20 text-center space-y-4">
      <div className="w-16 h-16 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center mx-auto">
        <Construction className="w-8 h-8" />
      </div>
      <h1 className="text-2xl font-black text-brand-900">Panel en construcción</h1>
      <p className="text-sm text-slate-600 leading-relaxed">
        El panel para personal de campo (trabajadores) todavía está en desarrollo.
        Pronto podrás ver tus servicios asignados desde aquí.
      </p>
    </div>
  );
};

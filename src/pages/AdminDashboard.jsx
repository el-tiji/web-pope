import { useState } from 'react';
import { MOCK_ADMIN_REQUESTS } from '../data/mockData';
import { Sparkles, CheckCircle, UserCheck } from 'lucide-react';

export const AdminDashboard = () => {
  const [requests, setRequests] = useState(MOCK_ADMIN_REQUESTS);

  const approveRequest = (id) => {
    setRequests(prev => prev.map(r => r.id === id ? { ...r, status: 'ASIGNADO' } : r));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-brand-900">Panel de Control & Triaje IA</h1>
          <p className="text-xs text-slate-500 mt-1">Supervisión centralizada de solicitudes de cotización y asignación de personal de campo.</p>
        </div>
        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs px-3 py-1.5 rounded-full font-bold">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          Copiloto Agéntico RAG: Conectado
        </div>
      </div>

      {/* Metrics Header */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200">
          <div className="text-xs font-bold text-slate-500 uppercase">Solicitudes Hoy</div>
          <div className="text-3xl font-black text-brand-900 mt-1">12</div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200">
          <div className="text-xs font-bold text-slate-500 uppercase">Alertas IA Prioritarias</div>
          <div className="text-3xl font-black text-amber-500 mt-1">2</div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200">
          <div className="text-xs font-bold text-slate-500 uppercase">Operarios en Sitio</div>
          <div className="text-3xl font-black text-emerald-500 mt-1">8 / 10</div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200">
          <div className="text-xs font-bold text-slate-500 uppercase">Precisión Triaje NLU</div>
          <div className="text-3xl font-black text-sky-600 mt-1">98.4%</div>
        </div>
      </div>

      {/* Main Request Table with AI Insights */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-bold text-brand-900 text-base">Bandeja de Entrada & Recomendaciones de Agente</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                <th className="p-4">ID / Cliente</th>
                <th className="p-4">Servicio</th>
                <th className="p-4">Prioridad IA</th>
                <th className="p-4">Resumen de Novedades (NLG / RAG)</th>
                <th className="p-4">Estado</th>
                <th className="p-4 text-right">Acción Humana</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {requests.map((req) => (
                <tr key={req.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-brand-900">
                    {req.id}
                    <div className="text-[11px] font-normal text-slate-500">{req.customerName}</div>
                  </td>
                  <td className="p-4 text-slate-700">{req.serviceType}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold ${
                      req.aiPriority === 'ALTA' ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {req.aiPriority}
                    </span>
                  </td>
                  <td className="p-4 max-w-md text-slate-600 leading-relaxed">
                    <div className="flex items-start gap-1.5 bg-sky-50/60 p-2.5 rounded-xl border border-sky-100 text-[11px]">
                      <Sparkles className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span>{req.aiSummary}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="font-semibold text-slate-800">{req.status}</span>
                  </td>
                  <td className="p-4 text-right">
                    {req.status === 'PENDIENTE' ? (
                      <button 
                        onClick={() => approveRequest(req.id)}
                        className="bg-brand-900 hover:bg-brand-800 text-white font-bold text-[11px] px-3 py-1.5 rounded-lg transition-colors inline-flex items-center gap-1"
                      >
                        <UserCheck className="w-3.5 h-3.5" /> Aprobar & Asignar
                      </button>
                    ) : (
                      <span className="text-emerald-600 font-bold inline-flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" /> Verificado
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

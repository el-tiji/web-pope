import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Clock, PlusCircle, RefreshCw } from 'lucide-react';
import { getRequestsByEmail, addServiceRequest } from '../data/mockData';

function getSession() {
  try {
    return JSON.parse(localStorage.getItem('pope_session'));
  } catch {
    return null;
  }
}

export const ClientDashboard = () => {
  const session = getSession();
  const [requests, setRequests] = useState(() => getRequestsByEmail(session?.email));
  const [renewMessage, setRenewMessage] = useState('');

  const lastRequest = requests[requests.length - 1];

  const handleRenew = () => {
    if (!lastRequest) return;
    addServiceRequest({
      customerName: session.nombre,
      email: session.email,
      serviceType: lastRequest.serviceType,
      amount: lastRequest.amount,
    });
    setRequests(getRequestsByEmail(session.email));
    setRenewMessage('¡Listo! Renovamos tu último servicio y quedó en revisión por nuestro equipo.');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-brand-900">
            Hola, {session?.nombre?.split(' ')[0] || 'cliente'}
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Aquí puedes ver el historial de tus servicios, renovar el último o pedir uno diferente.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-800 border border-sky-200 text-xs px-3 py-1.5 rounded-full font-bold">
          <Sparkles className="w-4 h-4 text-sky-600" />
          Cuenta de Cliente
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleRenew}
          disabled={!lastRequest}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold px-6 py-4 rounded-xl shadow-md shadow-sky-500/20 transition-all text-sm"
        >
          <RefreshCw className="w-4 h-4" />
          Renovar último servicio
        </button>
        <Link
          to="/quote"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-bold px-6 py-4 rounded-xl border border-slate-200 transition-all text-sm"
        >
          <PlusCircle className="w-4 h-4" />
          Solicitar un servicio diferente
        </Link>
      </div>

      {renewMessage && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold px-4 py-3 rounded-xl">
          {renewMessage}
        </div>
      )}

      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-100">
          <h3 className="font-bold text-brand-900 text-base">Mis Servicios</h3>
        </div>

        {requests.length === 0 ? (
          <div className="p-8 text-center text-xs text-slate-500 flex flex-col items-center gap-2">
            <Clock className="w-6 h-6 text-slate-300" />
            Todavía no tienes servicios registrados. Solicita tu primera cotización.
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {requests.map((req) => (
              <div key={req.id} className="p-5 flex items-center justify-between gap-4 text-xs">
                <div>
                  <div className="font-bold text-brand-900">{req.serviceType}</div>
                  <div className="text-[11px] text-slate-500">{req.id} · {req.createdAt}</div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-slate-800">${req.amount} USD</span>
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold ${
                      req.status === 'FINALIZADO'
                        ? 'bg-emerald-100 text-emerald-700'
                        : req.status === 'PENDIENTE'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {req.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

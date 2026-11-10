import { useState } from 'react';
import { Link } from 'react-router-dom';
import { KeyRound, Mail, ShieldAlert } from 'lucide-react';
import { requestPasswordReset } from '../services/api';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await requestPasswordReset({ email });
    setSent(true);
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16 space-y-6">
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-brand-900 text-sky-400 rounded-2xl flex items-center justify-center mx-auto">
            <KeyRound className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-black text-brand-900">Recuperar Contraseña</h1>
          <p className="text-xs text-slate-500">Te enviaremos instrucciones a tu correo</p>
        </div>

        {sent ? (
          <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 border border-slate-200 rounded-xl p-4">
            Si el correo está registrado, te enviaremos instrucciones para restablecer tu contraseña.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Correo electrónico</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className="w-full pl-10 pr-4 py-3 text-xs border border-slate-300 rounded-xl"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-900 hover:bg-brand-800 text-white font-bold py-3 rounded-xl text-xs transition-colors"
            >
              Enviar instrucciones
            </button>
          </form>
        )}

        <div className="text-center text-xs text-slate-500">
          <Link to="/login" className="font-bold text-brand-700 hover:text-brand-900">
            Volver a iniciar sesión
          </Link>
        </div>

        <div className="text-center text-[11px] text-slate-400 pt-2 border-t border-slate-100 flex items-center justify-center gap-1">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
          <span>Supervisión Human-in-the-Loop activada</span>
        </div>
      </div>
    </div>
  );
};

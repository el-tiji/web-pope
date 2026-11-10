import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, Mail, ShieldAlert } from 'lucide-react';
import { loginUser } from '../services/api';

const DASHBOARD_BY_ROLE = {
  ADMINISTRADOR: '/admin/dashboard',
  CLIENTE: '/cliente/dashboard',
  TRABAJADOR: '/trabajador/dashboard',
};

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    const result = await loginUser({ email, password });
    if (!result.success) {
      setError(result.error || 'No fue posible iniciar sesión.');
      return;
    }
    localStorage.setItem('pope_session', JSON.stringify(result.usuario));
    navigate(DASHBOARD_BY_ROLE[result.usuario.rol] || '/');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16 space-y-6">
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-brand-900 text-sky-400 rounded-2xl flex items-center justify-center mx-auto">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-black text-brand-900">Iniciar Sesión</h1>
          <p className="text-xs text-slate-500">Acceso para clientes y staff administrativo</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
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

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Contraseña</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 text-xs border border-slate-300 rounded-xl"
              />
            </div>
            <div className="text-right mt-1.5">
              <Link to="/recuperar" className="text-[11px] font-bold text-brand-700 hover:text-brand-900">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </div>

          {error && (
            <p className="text-[11px] text-red-600 font-semibold">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-brand-900 hover:bg-brand-800 text-white font-bold py-3 rounded-xl text-xs transition-colors"
          >
            Ingresar
          </button>
        </form>

        <div className="text-center text-xs text-slate-500">
          ¿No tienes cuenta?{' '}
          <Link to="/registro" className="font-bold text-brand-700 hover:text-brand-900">
            Crear cuenta
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

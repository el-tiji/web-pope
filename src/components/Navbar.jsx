import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sparkles, User, UserPlus, LogOut, LayoutDashboard } from 'lucide-react';

const DASHBOARD_BY_ROLE = {
  ADMINISTRADOR: '/admin/dashboard',
  CLIENTE: '/cliente/dashboard',
  TRABAJADOR: '/trabajador/dashboard',
};

function getSession() {
  try {
    return JSON.parse(localStorage.getItem('pope_session'));
  } catch {
    return null;
  }
}

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const session = getSession();

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem('pope_session');
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-brand-900 text-white p-2.5 rounded-xl group-hover:bg-brand-700 transition-colors">
            <Sparkles className="w-6 h-6 text-sky-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-brand-900 leading-none">POPE</span>
            <span className="text-[10px] font-bold tracking-widest text-sky-600 uppercase">Cleaning Services</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-sm">
          <Link
            to="/"
            className={`${isActive('/') ? 'text-brand-900 font-bold border-b-2 border-brand-500 py-1' : 'text-slate-600 hover:text-brand-900 transition-colors'}`}
          >
            Inicio
          </Link>
          <Link
            to="/services"
            className={`${isActive('/services') ? 'text-brand-900 font-bold border-b-2 border-brand-500 py-1' : 'text-slate-600 hover:text-brand-900 transition-colors'}`}
          >
            Servicios
          </Link>
          <Link
            to="/pricing"
            className={`${isActive('/pricing') ? 'text-brand-900 font-bold border-b-2 border-brand-500 py-1' : 'text-slate-600 hover:text-brand-900 transition-colors'}`}
          >
            Tarifas
          </Link>
          <Link
            to="/about"
            className={`${isActive('/about') ? 'text-brand-900 font-bold border-b-2 border-brand-500 py-1' : 'text-slate-600 hover:text-brand-900 transition-colors'}`}
          >
            Nosotros
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {session ? (
            <>
              <Link
                to={DASHBOARD_BY_ROLE[session.rol] || '/'}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-brand-900 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                {session.rol === 'ADMINISTRADOR' ? 'Panel Admin' : 'Mi Cuenta'}
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                Salir
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-brand-900 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
              >
                <User className="w-3.5 h-3.5" />
                Iniciar Sesión
              </Link>
              <Link
                to="/registro"
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-brand-900 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
              >
                <UserPlus className="w-3.5 h-3.5" />
                Crear Cuenta
              </Link>
            </>
          )}

          <Link
            to="/quote"
            className="bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-sky-500/20 transition-all transform active:scale-95"
          >
            Cotizar Ahora
          </Link>
        </div>

      </div>
    </header>
  );
};

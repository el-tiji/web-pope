import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserPlus, Mail, Lock, Phone, MapPin } from 'lucide-react';
import { registerUser } from '../services/api';

export const Register = () => {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (form.password !== form.confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }
    const result = await registerUser(form);
    if (!result.success) {
      setError(result.error || 'No fue posible crear la cuenta.');
      return;
    }
    localStorage.setItem('pope_session', JSON.stringify(result.usuario));
    navigate('/cliente/dashboard');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16 space-y-6">
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-brand-900 text-sky-400 rounded-2xl flex items-center justify-center mx-auto">
            <UserPlus className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-black text-brand-900">Crear Cuenta</h1>
          <p className="text-xs text-slate-500">Regístrate para agendar y dar seguimiento a tus servicios</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Nombre completo</label>
            <input
              type="text"
              required
              value={form.nombre}
              onChange={handleChange('nombre')}
              placeholder="Ej. Juan Pérez"
              className="w-full p-3 text-xs border border-slate-300 rounded-xl"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Correo electrónico</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="email"
                required
                value={form.email}
                onChange={handleChange('email')}
                placeholder="tu@correo.com"
                className="w-full pl-10 pr-4 py-3 text-xs border border-slate-300 rounded-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Teléfono</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="tel"
                  value={form.telefono}
                  onChange={handleChange('telefono')}
                  placeholder="300 000 0000"
                  className="w-full pl-10 pr-3 py-3 text-xs border border-slate-300 rounded-xl"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Dirección</label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={form.direccion}
                  onChange={handleChange('direccion')}
                  placeholder="Opcional"
                  className="w-full pl-10 pr-3 py-3 text-xs border border-slate-300 rounded-xl"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Contraseña</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="password"
                required
                value={form.password}
                onChange={handleChange('password')}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 text-xs border border-slate-300 rounded-xl"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Confirmar contraseña</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="password"
                required
                value={form.confirmPassword}
                onChange={handleChange('confirmPassword')}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 text-xs border border-slate-300 rounded-xl"
              />
            </div>
          </div>

          {error && (
            <p className="text-[11px] text-red-600 font-semibold">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-brand-900 hover:bg-brand-800 text-white font-bold py-3 rounded-xl text-xs transition-colors"
          >
            Crear cuenta
          </button>
        </form>

        <div className="text-center text-xs text-slate-500">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="font-bold text-brand-700 hover:text-brand-900">
            Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  );
};

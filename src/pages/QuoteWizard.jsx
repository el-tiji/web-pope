import { useState } from 'react';
import { Check, ArrowRight, Send, Sparkles } from 'lucide-react';
import { addServiceRequest, SERVICE_TYPE_LABELS } from '../data/mockData';

function getInitialFormData() {
  const base = {
    serviceType: 'REGULAR',
    frequency: 'one-off',
    propertyType: 'house',
    bedrooms: 3,
    bathrooms: 2,
    levels: 1,
    extras: [],
    schedule: 'morning',
    fullName: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  };
  try {
    const session = JSON.parse(localStorage.getItem('pope_session'));
    if (session?.rol === 'CLIENTE') {
      return {
        ...base,
        fullName: session.nombre || '',
        email: session.email || '',
        phone: session.telefono || '',
        address: session.direccion || '',
      };
    }
  } catch {
    // localStorage no disponible o sesión corrupta: se usa el formulario vacío
  }
  return base;
}

export const QuoteWizard = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(getInitialFormData);
  const [trackingCode, setTrackingCode] = useState(null);

  const calculateEstimate = () => {
    let base = 80;
    if (formData.serviceType === 'VACATE') base = 250;
    if (formData.serviceType === 'SPRING') base = 180;
    if (formData.serviceType === 'COMMERCIAL') base = 220;

    const roomCost = (formData.bedrooms * 20) + (formData.bathrooms * 25);
    const extrasCost = formData.extras.length * 30;

    let total = base + roomCost + extrasCost;
    if (formData.frequency === 'weekly') total *= 0.85;
    if (formData.frequency === 'fortnightly') total *= 0.90;

    return Math.round(total);
  };

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 5));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const toggleExtra = (extra) => {
    setFormData(prev => ({
      ...prev,
      extras: prev.extras.includes(extra) 
        ? prev.extras.filter(e => e !== extra)
        : [...prev.extras, extra]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addServiceRequest({
      customerName: formData.fullName,
      email: formData.email,
      serviceType: SERVICE_TYPE_LABELS[formData.serviceType] || formData.serviceType,
      amount: calculateEstimate(),
    });
    setTrackingCode(Math.floor(1000 + Math.random() * 9000));
  };

  if (trackingCode !== null) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <Check className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-black text-brand-900">¡Solicitud de Cotización Recibida!</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Hemos registrado tu solicitud con el código de seguimiento <span className="font-mono font-bold text-brand-900">#COT-{trackingCode}</span>.
          Nuestro sistema agéntico está verificando la disponibilidad y te responderemos por correo.
        </p>
        <div className="bg-slate-100 p-6 rounded-2xl text-left text-xs space-y-2">
          <div className="font-bold text-slate-800">Resumen del requerimiento:</div>
          <div>Cliente: {formData.fullName} ({formData.email})</div>
          <div>Dirección: {formData.address}</div>
          <div>Estimación preliminar: <span className="font-bold text-emerald-600 text-sm">${calculateEstimate()} USD</span></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Step Indicator */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
              step === i ? 'bg-brand-500 text-white' : step > i ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-600'
            }`}>
              {step > i ? <Check className="w-4 h-4" /> : i}
            </div>
            <span className="hidden md:inline text-xs font-medium text-slate-600">
              {i === 1 && 'Servicio'}
              {i === 2 && 'Inmueble'}
              {i === 3 && 'Adicionales'}
              {i === 4 && 'Agenda'}
              {i === 5 && 'Contacto'}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Form Main Area */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-brand-900">1. Selecciona el Tipo de Limpieza</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'REGULAR', label: 'Regular Home Cleaning', desc: 'Mantenimiento continuo para hogares' },
                  { id: 'SPRING', label: 'Spring / Deep Cleaning', desc: 'Limpieza profunda acumulada' },
                  { id: 'VACATE', label: 'Vacate / End of Lease', desc: 'Garantía bond back para entregas' },
                  { id: 'COMMERCIAL', label: 'Office / Commercial', desc: 'Oficinas y locales comerciales' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, serviceType: item.id })}
                    className={`p-4 rounded-xl text-left border transition-all ${
                      formData.serviceType === item.id 
                        ? 'border-brand-500 bg-sky-50/50 ring-2 ring-brand-500/20' 
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-bold text-sm text-brand-900">{item.label}</div>
                    <div className="text-[11px] text-slate-500">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-brand-900">2. Detalles del Inmueble</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Habitaciones</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="10" 
                    value={formData.bedrooms}
                    onChange={(e) => setFormData({ ...formData, bedrooms: parseInt(e.target.value) || 1 })}
                    className="w-full p-3 text-sm border border-slate-300 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Baños</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="10" 
                    value={formData.bathrooms}
                    onChange={(e) => setFormData({ ...formData, bathrooms: parseInt(e.target.value) || 1 })}
                    className="w-full p-3 text-sm border border-slate-300 rounded-xl"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-brand-900">3. Servicios Adicionales</h2>
              <div className="grid grid-cols-2 gap-3">
                {['Oven Deep Clean', 'Window Exterior Wash', 'Inside Fridge Clean', 'Balcony Scrub'].map((extra) => (
                  <button
                    key={extra}
                    type="button"
                    onClick={() => toggleExtra(extra)}
                    className={`p-3 rounded-xl text-left text-xs font-semibold border transition-all ${
                      formData.extras.includes(extra)
                        ? 'border-brand-500 bg-sky-50 text-brand-900'
                        : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    {extra}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-brand-900">4. Horario de Preferencia</h2>
              <div className="flex gap-4">
                {['morning', 'afternoon', 'flexible'].map((sch) => (
                  <button
                    key={sch}
                    type="button"
                    onClick={() => setFormData({ ...formData, schedule: sch })}
                    className={`flex-1 p-3 rounded-xl text-center text-xs font-bold capitalize border ${
                      formData.schedule === sch ? 'bg-brand-900 text-white' : 'border-slate-200 text-slate-700'
                    }`}
                  >
                    {sch === 'morning' ? 'Mañana (8:00 AM)' : sch === 'afternoon' ? 'Tarde (1:00 PM)' : 'Flexible'}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-xl font-bold text-brand-900">5. Datos de Contacto</h2>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Nombre Completo</label>
                <input 
                  required
                  type="text" 
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Ej. Juan Perez"
                  className="w-full p-3 text-sm border border-slate-300 rounded-xl"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Correo Electrónico</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="juan@ejemplo.com"
                    className="w-full p-3 text-sm border border-slate-300 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Teléfono</label>
                  <input 
                    required
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+57 300 000 0000"
                    className="w-full p-3 text-sm border border-slate-300 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Dirección del Inmueble</label>
                <input 
                  required
                  type="text" 
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Calle 123 #45-67, Bogotá"
                  className="w-full p-3 text-sm border border-slate-300 rounded-xl"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-600/25 transition-all text-sm flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Enviar Solicitud de Cotización
              </button>
            </form>
          )}

          {/* Navigation Controls */}
          {step < 5 && (
            <div className="flex justify-between pt-6 border-t border-slate-100">
              <button
                disabled={step === 1}
                onClick={handleBack}
                className="px-4 py-2 text-xs font-bold text-slate-600 border border-slate-200 rounded-xl disabled:opacity-40"
              >
                Atrás
              </button>
              <button
                onClick={handleNext}
                className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-2 rounded-xl font-bold text-xs flex items-center gap-1"
              >
                Siguiente <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>

        {/* Dynamic Summary Card */}
        <div className="bg-slate-900 text-white p-6 rounded-3xl space-y-6 h-fit">
          <div className="flex items-center gap-2 text-sky-400">
            <Sparkles className="w-5 h-5" />
            <h3 className="font-bold text-sm tracking-wider uppercase">Quote Summary</h3>
          </div>

          <div className="space-y-3 text-xs text-slate-300 border-t border-slate-800 pt-4">
            <div className="flex justify-between">
              <span>Tipo de Servicio:</span>
              <span className="font-bold text-white">{formData.serviceType}</span>
            </div>
            <div className="flex justify-between">
              <span>Especificación:</span>
              <span className="font-bold text-white">{formData.bedrooms} Hab / {formData.bathrooms} Baño(s)</span>
            </div>
            <div className="flex justify-between">
              <span>Adicionales:</span>
              <span className="font-bold text-white">{formData.extras.length} items</span>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-4 text-center">
            <div className="text-[11px] text-slate-400 uppercase tracking-widest">Valor Estimado</div>
            <div className="text-3xl font-black text-emerald-400 mt-1">${calculateEstimate()} USD</div>
            <p className="text-[10px] text-slate-400 mt-2">Sujeto a confirmación por el administrador tras la revisión de disponibilidad.</p>
          </div>
        </div>

      </div>

    </div>
  );
};

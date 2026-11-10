
export const SERVICES_DATA = [
  {
    id: '1',
    title: 'Residential Cleaning',
    category: 'REGULAR',
    description: 'Keep your home shining without taking up your weekend. Tailored routine cleaning for busy individuals and families.',
    iconName: 'Home',
    features: ['Kitchen & Countertop sanitization', 'Bathroom deep wash', 'Dusting & Vacuuming all rooms', 'Floor mopping']
  },
  {
    id: '2',
    title: 'Spring / Deep Cleaning',
    category: 'SPRING',
    description: 'A comprehensive top-to-bottom scrub designed for seasonal refreshes, post-events, or long-overdue detailed care.',
    iconName: 'Sparkles',
    badge: 'Popular',
    features: ['Inside cabinet cleaning', 'Baseboard & light switch wiping', 'Deep appliance exterior wash', 'Window track cleaning']
  },
  {
    id: '3',
    title: 'Vacate / End of Lease',
    category: 'VACATE',
    description: 'Guaranteed 100% bond back cleaning standard for tenants, landlords, and real estate property managers.',
    iconName: 'Key',
    badge: '100% Bond Back Guarantee',
    features: ['Oven & Rangehood deep clean', 'Full wall spot treatment', 'Detailed window cleaning', 'Real estate checklist compliance']
  },
  {
    id: '4',
    title: 'Office / Commercial Cleaning',
    category: 'COMMERCIAL',
    description: 'Maintain a pristine, hygienic workspace for staff and visitors with custom after-hours schedule options.',
    iconName: 'Building',
    features: ['Desk & Workstation sanitation', 'Communal kitchen upkeep', 'Waste disposal & recycling', 'Restroom sterilization']
  },
  {
    id: '5',
    title: 'Carpet & Upholstery Cleaning',
    category: 'CARPET',
    description: 'Deep steam extraction for carpets, rugs, couches, and armchairs removing stubborn stains and dust mites.',
    iconName: 'Sofa',
    features: ['Hot water extraction', 'Pet hair & odor neutralization', 'Eco-friendly stain removers', 'Fast dry process']
  },
  {
    id: '6',
    title: 'Pressure Washing',
    category: 'PRESSURE',
    description: 'High-pressure exterior cleaning for driveways, outdoor patios, brick walls, and concrete surfaces.',
    iconName: 'Droplets',
    features: ['Driveway oil stain removal', 'Patio moss scrubbing', 'Facade washing', 'Eco-friendly high pressure']
  }
];

// Etiquetas legibles para el tipo de servicio seleccionado en el QuoteWizard,
// usadas para mostrar las solicitudes tanto en el panel de cliente como en el de admin.
export const SERVICE_TYPE_LABELS = {
  REGULAR: 'Residential Cleaning',
  SPRING: 'Spring / Deep Cleaning',
  VACATE: 'Vacate Cleaning',
  COMMERCIAL: 'Commercial Cleaning',
};

// ==============================================================================
// Usuarios (mock de la tabla USUARIOS del esquema SQL del proyecto).
// Sin contraseña real: en modo mock cualquier contraseña no vacía es válida
// si el email existe en esta lista. Los datos de ejemplo replican los de
// pope_db_con_datos.sql para que el login sea reconocible en la demo.
// ==============================================================================
export const MOCK_USERS = [
  { id_usuario: 1, nombre: 'Carlos Mendoza', email: 'carlos.admin@popecleaning.com', rol: 'ADMINISTRADOR' },
  { id_usuario: 2, nombre: 'Laura Gómez', email: 'laura.admin@popecleaning.com', rol: 'ADMINISTRADOR' },
  { id_usuario: 3, nombre: 'Jorge Ramírez', email: 'jorge.ramirez@popecleaning.com', rol: 'TRABAJADOR' },
  { id_usuario: 4, nombre: 'María Pérez', email: 'maria.perez@popecleaning.com', rol: 'TRABAJADOR' },
  { id_usuario: 5, nombre: 'Andrés Castro', email: 'andres.castro@popecleaning.com', rol: 'TRABAJADOR' },
  { id_usuario: 6, nombre: 'Camila Ruiz', email: 'camila.ruiz@popecleaning.com', rol: 'TRABAJADOR' },
  { id_usuario: 7, nombre: 'Luis Vargas', email: 'luis.vargas@popecleaning.com', rol: 'TRABAJADOR' },
  { id_usuario: 8, nombre: 'Juan Pablo Silva', email: 'juan.silva@email.com', rol: 'CLIENTE', telefono: '3116667788', direccion: 'Cra 15 # 93-60, Bogotá' },
  { id_usuario: 9, nombre: 'Diana Rojas', email: 'diana.rojas@email.com', rol: 'CLIENTE', telefono: '3147778899', direccion: 'Calle 116 # 45-20, Bogotá' },
  { id_usuario: 10, nombre: 'Esteban Martínez', email: 'esteban.m@email.com', rol: 'CLIENTE', telefono: '3198889900', direccion: 'Av. Esperanza # 68-15, Bogotá' },
  { id_usuario: 11, nombre: 'Valentina Torres', email: 'valen.torres@email.com', rol: 'CLIENTE', telefono: '3009990011', direccion: 'Calle 72 # 10-34, Bogotá' },
  { id_usuario: 12, nombre: 'Santiago Rincón', email: 'santiago.rincon@email.com', rol: 'CLIENTE', telefono: '3120001122', direccion: 'Cra 7 # 120-25, Bogotá' },
];

export function findUserByEmail(email) {
  if (!email) return undefined;
  return MOCK_USERS.find((u) => u.email.toLowerCase() === String(email).toLowerCase());
}

// Alta de cliente nuevo (mock). El auto-registro público siempre crea rol CLIENTE;
// ADMINISTRADOR/TRABAJADOR no se crean por este flujo.
export function registerUser({ nombre, email, telefono, direccion }) {
  if (findUserByEmail(email)) {
    return { success: false, error: 'Ese correo ya está registrado.' };
  }
  const nextId = Math.max(...MOCK_USERS.map((u) => u.id_usuario)) + 1;
  const usuario = { id_usuario: nextId, nombre, email, telefono, direccion, rol: 'CLIENTE' };
  MOCK_USERS.push(usuario);
  return { success: true, usuario };
}

// ==============================================================================
// Solicitudes de servicio (mock compartido entre QuoteWizard, ClientDashboard y
// AdminDashboard). Representa, de forma simplificada, SERVICIOS/COTIZACIONES.
// ==============================================================================
export const MOCK_ADMIN_REQUESTS = [
  {
    id: 'SR-1092',
    customerName: 'Familia Torres',
    email: 'torres.family@email.com',
    serviceType: 'Vacate Cleaning',
    status: 'ASIGNADO',
    amount: 380.00,
    createdAt: '2026-11-08 09:30',
    aiPriority: 'ALTA',
    aiSummary: 'Cliente requiere entrega de llaves hoy a las 5 PM. Mascota presente (gato). Asignado a María Rodríguez.'
  },
  {
    id: 'SR-1093',
    customerName: 'Apex Capital Inc',
    email: 'facilities@apexcapital.co',
    serviceType: 'Commercial Cleaning',
    status: 'PENDIENTE',
    amount: 650.00,
    createdAt: '2026-11-09 08:15',
    aiPriority: 'ALTA',
    aiSummary: 'Contrato corporativo recurrence (3x semana). Requiere verificación de credenciales de seguridad antes de las 2 PM.'
  },
  {
    id: 'SR-1094',
    customerName: 'Carlos Mendoza',
    email: 'cmendoza@gmail.com',
    serviceType: 'Residential Cleaning',
    status: 'EN_CURSO',
    amount: 140.00,
    createdAt: '2026-11-09 10:00',
    aiPriority: 'BAJA',
    aiSummary: 'Limpieza estándar de 3 habitaciones / 2 baños. Operario en sitio.'
  }
];

function nextRequestId() {
  const maxNumber = MOCK_ADMIN_REQUESTS.reduce((acc, r) => {
    const n = parseInt(String(r.id).replace('SR-', ''), 10);
    return Number.isNaN(n) ? acc : Math.max(acc, n);
  }, 1000);
  return `SR-${maxNumber + 1}`;
}

export function getRequestsByEmail(email) {
  if (!email) return [];
  return MOCK_ADMIN_REQUESTS.filter((r) => r.email?.toLowerCase() === String(email).toLowerCase());
}

export function addServiceRequest({ customerName, email, serviceType, amount = 0 }) {
  const newRequest = {
    id: nextRequestId(),
    customerName,
    email,
    serviceType,
    status: 'PENDIENTE',
    amount,
    createdAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
    aiPriority: 'MEDIA',
    aiSummary: 'Generado automáticamente a partir de una solicitud de cliente.',
  };
  MOCK_ADMIN_REQUESTS.push(newRequest);
  return newRequest;
}

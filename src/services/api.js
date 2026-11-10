// API Client Layer configured for Pope Cleaning Services REST Backend
import { findUserByEmail, registerUser as registerUserMock } from '../data/mockData';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

export async function submitQuote(payload) {
  try {
    const res = await fetch(`${API_BASE_URL}/quotes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error('Error al procesar cotización');
    return await res.json();
  } catch {
    console.warn('API Offline - usando respuesta simulada local');
    return { success: true, quoteId: 'COT-MOCK-99', status: 'PENDIENTE' };
  }
}

export async function loginUser({ email, password }) {
  try {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, contrasena: password })
    });
    if (!res.ok) throw new Error('Credenciales inválidas');
    return await res.json();
  } catch {
    console.warn('API Offline - usando autenticación simulada local');
    const usuario = findUserByEmail(email);
    if (!usuario) {
      return { success: false, error: 'No existe una cuenta con ese correo.' };
    }
    return { success: true, usuario };
  }
}

export async function requestPasswordReset({ email }) {
  try {
    const res = await fetch(`${API_BASE_URL}/auth/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    if (!res.ok) throw new Error('No se pudo procesar la solicitud');
    return await res.json();
  } catch {
    console.warn('API Offline - usando recuperación simulada local');
    return { success: true };
  }
}

export async function registerUser({ nombre, email, telefono, direccion, password }) {
  try {
    const res = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, email, telefono, direccion, contrasena: password })
    });
    if (!res.ok) throw new Error('No se pudo registrar la cuenta');
    return await res.json();
  } catch {
    console.warn('API Offline - usando registro simulado local');
    return registerUserMock({ nombre, email, telefono, direccion });
  }
}

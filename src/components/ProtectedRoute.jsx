import { Navigate } from 'react-router-dom';

function getSession() {
  try {
    return JSON.parse(localStorage.getItem('pope_session'));
  } catch {
    return null;
  }
}

// Protege una ruta según el rol de la sesión guardada en localStorage (pope_session).
// Si no hay sesión o el rol no coincide, redirige al login.
export const ProtectedRoute = ({ role, children }) => {
  const session = getSession();

  if (!session || session.rol !== role) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

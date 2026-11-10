import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Pricing } from './pages/Pricing';
import { QuoteWizard } from './pages/QuoteWizard';
import { AboutUs } from './pages/AboutUs';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ForgotPassword } from './pages/ForgotPassword';
import { AdminDashboard } from './pages/AdminDashboard';
import { ClientDashboard } from './pages/ClientDashboard';
import { WorkerPlaceholder } from './pages/WorkerPlaceholder';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-slate-50 text-slate-800 font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/quote" element={<QuoteWizard />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/recuperar" element={<ForgotPassword />} />
            <Route
              path="/admin/dashboard"
              element={(
                <ProtectedRoute role="ADMINISTRADOR">
                  <AdminDashboard />
                </ProtectedRoute>
              )}
            />
            <Route
              path="/cliente/dashboard"
              element={(
                <ProtectedRoute role="CLIENTE">
                  <ClientDashboard />
                </ProtectedRoute>
              )}
            />
            <Route
              path="/trabajador/dashboard"
              element={(
                <ProtectedRoute role="TRABAJADOR">
                  <WorkerPlaceholder />
                </ProtectedRoute>
              )}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

export default function ProtectedRoute({ children }) {
  const { isAuth, loading } = useAuth();

  if (loading) return <div>Cargando...</div>; // o tu skeleton

  if (!isAuth) return <Navigate to="/login" replace />;

  return children;
}

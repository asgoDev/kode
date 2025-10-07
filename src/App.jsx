import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Reportes from "./pages/Reportes";
import Barberos from "./pages/Barberos";
import ProtectedRoute from "./components/ProtectedRoute";
import BodyLayout from "./layouts/BodyLayout";
import LoggedLayout from "./layouts/LoggedLayout.jsx";
import { useAuth } from "./contexts/AuthProvider";

function App() {
  const { isAuth } = useAuth();
  return (
    <BodyLayout>
      <BrowserRouter>
        <Routes>
          {/* "/" será dinámico: login o dashboard */}
          <Route path="/" element={isAuth ? <LoggedLayout /> : <Login />}>
            {/* si está loggeado, carga rutas hijas dentro del Dashboard */}
            {isAuth && (
              <>
                <Route index element={<Home />} />
                <Route path="reportes" element={<Reportes />} />
                <Route path="barberos" element={<Barberos />} />
              </>
            )}
          </Route>

          {/* fallback: proteger rutas con el componente ProtectedRoute */}
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <LoggedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Home />} />
            <Route path="reportes" element={<Reportes />} />
            <Route path="barberos" element={<Barberos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BodyLayout>
  );
}

export default App;

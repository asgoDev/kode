import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Reportes from "./pages/Reportes";
import Barberos from "./pages/Barberos";
import ProtectedRoute from "./components/ProtectedRoute";
import BodyLayout from "./layouts/BodyLayout";
import LoggedLayout from "./layouts/LoggedLayout";
import Settings from "./pages/Settings";

function App() {
  return (
    <BodyLayout>
      <BrowserRouter>
        <Routes>
          {/* pública */}
          <Route path="/login" element={<Login />} />

          {/* privada: LoggedLayout es el padre; siempre declarada */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <LoggedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Home />} />
            <Route path="reportes" element={<Reportes />} />
            <Route path="barberos" element={<Barberos />} />
            <Route path="configuracion" element={<Settings />} />
          </Route>

          {/* fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </BodyLayout>
  );
}

export default App;

// src/pages/Login.jsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/kode.jpg";
import { useAuth } from "../contexts/AuthProvider";

export default function Login() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Limpia errores previos
    try {
      const res = await axios.post(`${API_URL}/api/auth/login`, {
        username,
        password,
      });
      //   localStorage.setItem("token", res.data.token);
      login(res.data.token); // actualiza contexto y localStorage
      navigate("/", { replace: true });
    } catch (err) {
      setError("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
  };

  return (
    <>
      <div className="flex-1 flex flex-col justify-center items-center p-4">
        <header className="flex justify-center mb-4">
          <img className="w-1/2 mix-blend-screen" src={Logo} alt="Kode logo" />
        </header>
        <div className="p-8 w-full max-w-sm">
          <p className="text-center uppercase text-sm font-[100] text-white-md  tracking-widest">
            Inicio de sesion
          </p>
          <form onSubmit={handleLogin} className="space-y-20">
            <div className="space-y-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-muted"
              ></label>
              <input
                id="username"
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border-b-1 border-muted text-gray-200  placeholder-muted focus:outline-none  focus:border-border-focus"
                required
              />
              <label
                htmlFor="password"
                className="block text-sm font-medium text-muted"
              ></label>
              <input
                id="password"
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border-b-1 border-muted text-gray-200  placeholder-muted focus:outline-none  focus:border-border-focus"
                required
              />
            </div>
            {error && <p className="text-sm text-error-red">{error}</p>}
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border-1 border-muted rounded-md uppercase text-sm font-light text-white-md tracking-widest bg-gray-button hover:bg-muted focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-barber-gold transition-colors"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
      <footer className="text-muted text-sm text-center p-2">
        Desarrollado por{" "}
        <a className="text-white-md" href="https://github.com/asgoDev">
          asgoDev
        </a>
        . All rights reserved.
      </footer>
    </>
  );
}

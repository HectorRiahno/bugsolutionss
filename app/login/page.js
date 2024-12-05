"use client";
import logo from "../components/img/bugs1.png";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // O un loader opcional

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    if (email === "admin@example.com" && password === "password123") {
      setError("");
      setSuccess("Inicio de sesión exitoso.");
    } else {
      setError("Credenciales inválidas.");
      setSuccess("");
    }
  };

  return (
    < > 
    
      <div className="min-h-screen bg-gray-100 flex flex-col w-screen items-center justify-center">
        <div className="">
          <Link href="/">
            <Image
              className="h-9 w-full mb-10"
              src={logo}
              alt="Picture of the author"
            />
          </Link>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">
            Iniciar Sesión
          </h1>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {success && <p className="text-green-500 text-sm mb-4">{success}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="ejemplo@correo.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="********"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Iniciar Sesión
            </button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-4">
            ¿No tienes cuenta?{" "}
            <a href="/registro" className="text-blue-600 hover:underline">
              Regístrate aquí
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

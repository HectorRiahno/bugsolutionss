'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import logo from "../components/img/bugs1.png";

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones simples
    if (!formData.name || !formData.email || !formData.password) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    if (formData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    // Simular un envío exitoso
    setSuccess(true);
    setError('');
    console.log('Datos enviados:', formData);
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="">
          <Link href="/">
            <Image
              className="h-9 w-full mb-10"
              src={logo}
              alt="Picture of the author"
            />
          </Link>
        </div>
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Crear Cuenta</h2>
        {success ? (
          <div className="mt-4 text-green-600 text-center">
            <p>¡Registro exitoso! 🎉</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="text-red-500 text-sm p-2 rounded bg-red-100">{error}</div>
            )}
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="ejemplo@correo.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Mínimo 6 caracteres"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Registrarse
            </button>
          </form>
        )}
        <p className="text-center text-gray-600 text-sm mt-4">
          ¿Ya tienes una cuenta?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
}

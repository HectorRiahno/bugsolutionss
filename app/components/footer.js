import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna de navegación */}
          <div className="mb-6">
            <h5 className="text-xl font-semibold mb-4">Navegación</h5>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white hover:text-gray-400">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-gray-400">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-gray-400">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Columna de contacto */}
          <div className="mb-6">
            <h5 className="text-xl font-semibold mb-4">Contacto</h5>
            <p className="flex items-center mb-2">
              <i className="bi bi-geo-alt-fill mr-2"></i> Calle Falsa 123, Ciudad, País
            </p>
            <p className="flex items-center mb-2">
              <i className="bi bi-envelope-fill mr-2"></i> contacto@ejemplo.com
            </p>
            <p className="flex items-center mb-2">
              <i className="bi bi-telephone-fill mr-2"></i> +57 123 456 789
            </p>
          </div>

          {/* Columna de redes sociales */}
          <div className="mb-6">
            <h5 className="text-xl font-semibold mb-4">Síguenos</h5>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <i className="bi bi-facebook text-2xl"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <i className="bi bi-twitter text-2xl"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <i className="bi bi-instagram text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
        
        {/* Línea divisoria */}
        <hr className="border-gray-700 my-6" />
        
        {/* Créditos */}
        <div className="text-center">
          <p className="mb-0">© 2024 Bug Solutions. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

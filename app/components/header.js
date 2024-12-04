import image from "../components/img/bugs1.png"

import Image from 'next/image'
import logo from './img/bugs1.png'

export default function Page() {
  return (
    <header className="bg-gray-300 text-white p-4 flex items-center justify-between">
     
      <Image className="h-10 w-auto" src={logo} alt="Picture of the author" />

      <div className="flex space-x-4 ">
        <a
          href="/"
          className="px-4 py-2 rounded-lg text-black hover:bg-gray-400 transition"
        >
          Store
        </a>
        <a
          href="/about"
          className="px-4 py-2 rounded-lg text-black hover:bg-gray-400 transition"
        >
          About
        </a>
        <a
          href="/services"
          className="px-4 py-2 rounded-lg text-black hover:bg-gray-400 transition"
        >
          Services
        </a>
      </div>

      {/* Botones de acción */}
      <div className="flex space-x-4">
        <a
          href="/signup"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Sign-Up
        </a>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
           Login
        </button>
      </div>
    </header>
  );
}

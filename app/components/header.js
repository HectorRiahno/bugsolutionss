import image from "../components/img/bugs1.png"

import Image from 'next/image'
import logo from './img/bugs1.png'

export default function Page() {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-10">
  <nav className="flex items-center justify-around px-8 py-4 ">
    <Image className="h-9 w-auto" src={logo} alt="Picture of the author" />
    <ul className="flex space-x-10 text-gray-600">
      <li className=" hover:text-blue-600"><a href="/">Store</a></li>
      <li className="hover:text-blue-600"><a href="/about">About</a></li>
      <li className="hover:text-blue-600"><a href="/services">Services</a></li>
    </ul>
    <div className="space-x-4">
      <a href="/signup" className="btn-primary hover:text-blue-600">Sign-Up</a>
      <a href="/login" className="btn-secondary hover:text-blue-600">Login</a>
    </div>
  </nav>
</header>
  );
}

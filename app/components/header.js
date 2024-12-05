
import Link from "next/link";
import Image from "next/image";
import logo from "./img/bugs1.png";

export default function Page() {
  return (
    <header className="bg-white shadow-md mt-4 w-11/12 m-auto rounded-xl top-0 z-10">
      <nav className="flex items-center justify-around px-8 py-4 ">
        <Link href="/">
          <Image
            className="h-9 w-auto"
            src={logo}
            alt="Picture of the author"
          />
        </Link>
        <ul className="flex space-x-10 text-gray-600">
          <li className=" hover:text-blue-600">
            <Link href="/tienda">store</Link>
          </li>
          {/* <li className="hover:text-blue-600">
            <a href="#services">Services</a>
          </li> */}
        </ul>
        <div className="space-x-6">
        <Link className=" hover:text-blue-600" href="/register">Sing up</Link>
          <Link className=" hover:text-blue-600" href="/login">Login</Link>
        </div>
      </nav>
    </header>
  );
}

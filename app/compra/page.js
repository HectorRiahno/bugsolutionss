"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../components/img/bugs1.png";
import { useCart } from "../components/CartContext";

export default function ConfirmPurchasePage() {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <Link href="/">
          <Image
            src={logo}
            alt="Descripción"
            layout="responsive"
            width={500}
            height={300}
            sizes="(max-width: 600px) 100vw, 50vw"
          />
        </Link>
        <div className="bg-white p-8 mt-6 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="text-2xl font-bold text-center mb-4 text-gray-700">
            ¡Compra confirmada!
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Gracias por tu compra. Aquí están los detalles de tu pedido:
          </p>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-bold mt-4">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </>
  );
}

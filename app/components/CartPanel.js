'use client';

import Link from 'next/link';
import { useCart } from './CartContext';

export default function CartPanel() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow-lg">
      <h3 className="font-bold">Carrito de Compras</h3>
      {cart.length > 0 ? (
        <div>
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex mt-2 justify-between items-center"
              >
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-4">
            <span className="font-bold">Total: ${total.toFixed(2)}</span>
            <Link href="/compra">
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Comprar
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <p>No hay productos en el carrito.</p>
      )}
    </div>
  );
}

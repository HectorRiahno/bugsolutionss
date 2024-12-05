'use client';
import Header from "../components/header";
import Footer from "../components/footer.js";
import FilterPanel from "../components/FilterPanel";
import ProductList from "../components/ProductList";
import { useCart } from '../components/CartContext';
import Link from "next/link"; 

export default function Tienda() {
  const { cart, addToCart, removeFromCart, calculateTotal } = useCart();

  return (
    <>
      <Header />
      <div className="flex">
        <div className="w-1/5 p-4">
          <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow-lg">
            <h3 className="font-bold">Carrito de Compras</h3>
            {cart.length > 0 ? (
              <div>
                <ul>
                  {cart.map((product) => (
                    <li key={product.id} className="flex mt-2 justify-between items-center">
                      <span>{product.name} (x{product.quantity})</span>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded"
                        onClick={() => removeFromCart(product.id)}
                      >
                        Eliminar
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold">
                    Total: ${calculateTotal().toFixed(3)}
                  </span>
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
        </div>

        <div className="w-4/5 p-4">
          {/* Mostrar los productos */}
          <ProductList />
        </div>
      </div>
      <Footer />
    </>
  );
}

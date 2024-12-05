import Image from "next/image";
import img from "./img/tarjetagrafica.png"; 
// import { useCart } from '../context/CartContext';

export default function ProductCard({ name, price, image, quantity, onAddToCart }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center">
      <Image
         src={img}  
         alt={name}
         width={150}
         height={150}
         className="rounded-lg object-contain bg-transparent"
      />
      <h2 className="text-lg font-bold mt-2">{name}</h2>
      <p className="text-gray-700 text-md mt-1">${price.toFixed(3)}</p>

      <p className="text-sm text-gray-500 mt-2">Cantidad en stock: {quantity}</p>

      <button
        className={`bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition ${quantity === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={onAddToCart}
        disabled={quantity === 0} 
      >
        <i className="bi bi-cart-plus"></i> Agregar al carrito
      </button>
    </div>
  );
}

'use client';

import { useCart } from './CartContext';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Producto A', price: 50, image: '/images/product1.png' },
  { id: 2, name: 'Producto B', price: 20, image: '/images/product2.png' },
  { id: 3, name: 'Producto A', price: 50, image: '/images/product1.png' },
  { id: 4, name: 'Producto B', price: 20, image: '/images/product2.png' },
  { id: 5, name: 'Producto A', price: 50, image: '/images/product1.png' },
  { id: 6, name: 'Producto B', price: 20, image: '/images/product2.png' },
  { id: 7, name: 'Producto A', price: 50, image: '/images/product1.png' },
  { id: 8, name: 'Producto B', price: 20, image: '/images/product2.png' },
  { id: 9, name: 'Producto A', price: 50, image: '/images/product1.png' },
  { id: 10, name: 'Producto B', price: 20, image: '/images/product2.png' },
  { id: 11, name: 'Producto A', price: 50, image: '/images/product1.png' },
  { id: 12, name: 'Producto B', price: 20, image: '/images/product2.png' },
  { id: 14, name: 'Producto A', price: 50, image: '/images/product1.png' },
  { id: 13, name: 'Producto B', price: 20, image: '/images/product2.png' },

 
];

export default function ProductList() {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          onAddToCart={() => addToCart(product)}
        />
      ))}
    </div>
  );
}

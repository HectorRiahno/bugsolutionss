import "./globals.css";
import { CartProvider } from './components/CartContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-gradient-to-b from-skyBlue to-navyBlue">
      <CartProvider> 
          <main>{children}</main>
        </CartProvider>
        
      </body>
    </html>
  );
}
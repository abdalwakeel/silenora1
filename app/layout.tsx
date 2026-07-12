import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartSidebar from './components/cart/CartSidebar';
import ContactSection from './components/layout/ContactSection';
import ScrollToTop from './components/common/ScrollToTop'; // 👈 استدعاء الزرار الجديد
import { CartProvider } from '../app/context/CartContext';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className="bg-[#070707] text-gray-200 min-h-screen flex flex-col justify-between font-sans relative">
        <CartProvider>
          <Navbar />
          <CartSidebar />
          <main className="flex-grow w-full">
            {children}
          </main>
          <ContactSection />
          <Footer />
          <ScrollToTop /> {/* 👈 وضعه هنا ليكون متاحاً في كل الموقع */}
        </CartProvider>
      </body>
    </html>
  );
}
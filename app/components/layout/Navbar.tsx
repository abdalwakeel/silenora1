"use client";

import { usePathname } from 'next/navigation'; // 👈 استدعاء هوك معرفة المسار الحالي لحظياً
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../../context/CartContext";

// 👈 استيراد الصورة استيراداً ثابتاً (Static Import) من مجلد public
import logoImg from "../../../public/images/logo.png";

export default function Navbar() {
  const pathname = usePathname();
  const { setIsOpen, cartCount } = useCart();

  // مصفوفة اللينكات الذكية للتنقل
  const navLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'المنتجات', href: '/products' },
    { name: 'لماذا سيلينورا؟', href: '/about' }, 
    { name: 'تواصل معنا', href: '/#contact' },
  ];

  return (
    <nav className="bg-[#070707]/90 text-gray-300 border-b border-[#8a7243]/20 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* منطقة اللوجو والاسم */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              {/* اللوجو */}
              <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={logoImg} 
                  alt="Silenora Logo"
                  className="object-contain"
                  priority
                />
              </div>
              {/* النص */}
              <span className="text-xl md:text-2xl font-black text-[#cbb381] tracking-[0.15em] transition-colors duration-300 group-hover:text-[#e5d4b3]">
                SILENORA
              </span>
            </Link>
          </div>

          {/* القائمة الذكية بتأثير اللون الذهبي الفعال (Active Link) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-reverse space-x-8">
              {navLinks.map((link) => {
                // التحقق ديناميكياً هل اللينك هو الصفحة الحالية المفتوحة؟
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                      isActive
                        ? 'text-[#cbb381] font-bold drop-shadow-[0_0_8px_rgba(203,179,129,0.5)]' // منور دهبي متوهج لو نشط
                        : 'text-gray-400 hover:text-[#cbb381]' // رمادي وبيقلب دهبي بالهوفير
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* أزرار السلة والأيقونة */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(true)}
              className="relative p-2.5 bg-[#121212] border border-[#8a7243]/20 rounded-full hover:border-[#cbb381] text-[#cbb381] transition-all duration-300"
              aria-label="فتح السلة"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -left-1 bg-gradient-to-r from-[#b39964] to-[#e5d4b3] text-[#201808] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
// src/components/cart/CartSidebar.js
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../../context/CartContext";
import Image from 'next/image';
import Link from 'next/link';

export default function CartSidebar() {
  const { cart, isOpen, setIsOpen, updateQuantity, removeFromCart, cartTotal } =
    useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* الخلفية المظلمة الشفافة (Overlay) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black z-50 cursor-pointer"
          />

          {/* لوحة السلة الجانبية */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-[#0a0a0a] border-l border-[#8a7243]/20 z-50 shadow-2xl flex flex-col justify-between p-6 text-gray-200"
          >
            {/* الهيدر */}
            <div className="flex items-center justify-between pb-6 border-b border-[#8a7243]/10">
              <h2 className="text-xl font-black text-[#cbb381]">
                سلة المشتريات
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:text-[#cbb381] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* محتويات السلة (المنتجات) */}
            <div className="flex-grow overflow-y-auto py-4 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-500 gap-2">
                  <span className="text-4xl">🛒</span>
                  <p className="text-sm">السلة فارغة حالياً.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3 bg-[#121212] border border-[#8a7243]/5 rounded-xl items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 bg-[#1a1a1a] rounded-lg border border-[#8a7243]/10 overflow-hidden flex items-center justify-center">
                        {item.imageSrc ? (
                          <Image
                            src={item.imageSrc}
                            alt={item.title}
                            fill
                            sizes="48px"
                            className="object-contain"
                          />
                        ) : (
                          <span className="text-xl">🛍️</span>
                        )}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-200 mb-1">
                          {item.title}
                        </h4>
                        <span className="text-xs text-[#cbb381] font-black">
                          {item.price} ج.م
                        </span>
                      </div>
                    </div>

                    {/* التحكم في الكمية والحذف */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center bg-[#1a1a1a] border border-[#8a7243]/10 rounded-md">
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2 py-1 text-xs hover:text-[#cbb381]"
                        >
                          +
                        </button>
                        <span className="px-2 text-xs font-bold text-gray-300">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2 py-1 text-xs hover:text-[#cbb381]"
                        >
                          -
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-500 hover:text-red-400 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* الفوتر الخاص بالسلة والإجمالي */}
            {cart.length > 0 && (
              <div className="pt-6 border-t border-[#8a7243]/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">الإجمالي:</span>
                  <span className="text-xl font-black text-[#cbb381]">
                    {cartTotal} ج.م
                  </span>
                </div>
                <Link
                  href="/checkout"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-3.5 rounded-xl font-bold text-[#201808] bg-gradient-to-r from-[#b39964] via-[#e5d4b3] to-[#b39964] shadow-lg shadow-[#cbb381]/10 text-center text-sm tracking-wide"
                >
                  إتمام الطلب (Checkout)
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
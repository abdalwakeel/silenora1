'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, cartTotal } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'القاهرة',
    address: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Order Data Sent:", { customer: formData, products: cart, total: cartTotal });

    setIsSuccess(true);

    setTimeout(() => {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('silenora_cart');
        window.location.reload();
      }
    }, 5000);
  };

  if (isSuccess) {
    return (
      <div className="bg-[#070707] min-h-[80vh] flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-[#0a0a0a] border border-[#8a7243]/20 p-8 rounded-2xl text-center space-y-6 shadow-2xl"
        >
          <div className="w-20 h-20 bg-[#cbb381]/10 rounded-full flex items-center justify-center mx-auto text-4xl text-[#cbb381] animate-bounce">
            ✓
          </div>
          <h1 className="text-2xl font-black text-[#cbb381]">تم استلام طلبك بنجاح!</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            شكراً لثقتك في سيلينورا. سيتواصل معكِ فريق خدمة العملاء خلال 24 ساعة لتأكيد الشحن والتوصيل.
          </p>
          <Link href="/products" className="inline-block w-full py-3 rounded-xl font-bold text-[#201808] bg-gradient-to-r from-[#b39964] via-[#e5d4b3] to-[#b39964] text-sm">
            العودة للتسوق
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[#070707] min-h-screen py-16 px-4 text-gray-300">
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-3xl font-black text-[#cbb381] mb-12 text-right">إتمام الشراء</h1>

        {cart.length === 0 ? (
          <div className="text-center py-20 bg-[#0a0a0a] rounded-2xl border border-[#8a7243]/10">
            <p className="text-gray-500 mb-6">لا توجد منتجات في السلة لإتمام الطلب.</p>
            <Link href="/products" className="py-3 px-8 rounded-xl font-bold text-[#201808] bg-gradient-to-r from-[#b39964] to-[#e5d4b3]">تصفح المنتجات</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* 1. فورمة بيانات الشحن */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 bg-[#0a0a0a] border border-[#8a7243]/10 p-6 rounded-2xl space-y-6 text-right">
              <h2 className="text-lg font-bold text-[#cbb381] mb-4">معلومات الشحن والتوصيل</h2>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-400 font-medium">الاسم الكامل *</label>
                <input 
                  type="text" required 
                  className="w-full bg-[#121212] border border-[#8a7243]/20 rounded-xl p-3 text-sm text-gray-200 focus:outline-none focus:border-[#cbb381] transition-colors" 
                  placeholder="اكتبي اسمك الثلاثي"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-400 font-medium">رقم التليفون *</label>
                <input 
                  type="tel" required 
                  className="w-full bg-[#121212] border border-[#8a7243]/20 rounded-xl p-3 text-sm text-gray-200 focus:outline-none focus:border-[#cbb381] transition-colors text-right" 
                  placeholder="رقم الموبايل للتواصل"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-400 font-medium">المحافظة *</label>
                <select 
                  className="w-full bg-[#121212] border border-[#8a7243]/20 rounded-xl p-3 text-sm text-gray-200 focus:outline-none focus:border-[#cbb381] transition-colors"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                >
                  <option>القاهرة</option>
                  <option>الجيزة</option>
                  <option>الإسكندرية</option>
                  <option>القليوبية</option>
                  <option>طنطا</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-400 font-medium">العنوان بالتفصيل *</label>
                <textarea 
                  rows={3} required 
                  className="w-full bg-[#121212] border border-[#8a7243]/20 rounded-xl p-3 text-sm text-gray-200 focus:outline-none focus:border-[#cbb381] transition-colors resize-none" 
                  placeholder="اسم الشارع، رقم العمارة، الدور، الشقة"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>

              <button type="submit" className="w-full py-4 rounded-xl font-bold text-[#201808] bg-gradient-to-r from-[#b39964] via-[#e5d4b3] to-[#b39964] shadow-lg shadow-[#cbb381]/10 text-center text-sm transition-transform duration-300 hover:scale-[1.01]">
                تأكيد طلب الشراء والدفع عند الاستلام
              </button>
            </form>

            {/* 2. ملخص الطلب */}
            <div className="lg:col-span-5 bg-[#0a0a0a] border border-[#8a7243]/10 p-6 rounded-2xl text-right space-y-6">
              <h2 className="text-lg font-bold text-[#cbb381] mb-4">ملخص المنتجات</h2>
              
              <div className="divide-y divide-[#8a7243]/10 max-h-[300px] overflow-y-auto pr-2 space-y-3">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-3 text-sm">
                    <div className="flex items-center gap-3">
                      <span className="relative w-8 h-8 bg-[#121212] rounded overflow-hidden flex items-center justify-center border border-[#8a7243]/10">
                        {item.imageSrc ? (
                          <Image src={item.imageSrc} alt={item.title} fill sizes="32px" className="object-contain" />
                        ) : (
                          <span className="text-lg">🛍️</span>
                        )}
                      </span>
                      <div>
                        <h4 className="font-bold text-gray-300">{item.title}</h4>
                        <span className="text-xs text-gray-500">الكمية: {item.quantity}</span>
                      </div>
                    </div>
                    <span className="font-black text-[#cbb381]">{Number(item.price) * item.quantity} ج.م</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#8a7243]/20 space-y-3">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>تكلفة المنتجات:</span>
                  <span>{cartTotal} ج.م</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>مصاريف الشحن:</span>
                  <span className="text-green-400 font-medium">مجاني لفترة محدودة</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-[#8a7243]/10">
                  <span className="font-bold text-gray-200">الإجمالي النهائي:</span>
                  <span className="text-2xl font-black text-[#cbb381]">{cartTotal} ج.م</span>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
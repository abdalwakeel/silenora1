'use client'; 

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../../context/CartContext'; 
import { motion } from 'framer-motion';

export default function ProductCard({ id, title, category, price, rating, imageSrc, description }) {
  const { addToCart } = useCart(); 

  return (
    <motion.div 
      whileHover={{ 
        scale: 1.02,
        rotateX: -6, 
        rotateY: 6,
        z: 10
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-[#121212] border border-[#8a7243]/10 rounded-xl overflow-hidden group hover:border-[#cbb381]/40 flex flex-col justify-between cursor-pointer shadow-lg"
    >
      
      {/* منطقة الصورة الحقيقية */}
      <Link href={`/products/${id}`} className="relative aspect-square bg-[#1a1a1a] flex items-center justify-center overflow-hidden border-b border-[#8a7243]/5">
        <Image 
          src={imageSrc} 
          alt={title}
          fill
          sizes="(max-w-7xl) 25vw"
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          priority
        />

        <span className="absolute top-3 right-3 bg-gradient-to-r from-[#b39964] to-[#e5d4b3] text-[#201808] text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider uppercase z-10">
          New
        </span>
      </Link>

      {/* تفاصيل المنتج والنبذة */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <span className="text-[#a38a53] text-xs font-medium tracking-wide block mb-1">
            {category}
          </span>
          <Link href={`/products/${id}`}>
            <h3 className="text-gray-200 text-lg font-bold group-hover:text-[#cbb381] transition-colors mb-2 cursor-pointer">
              {title}
            </h3>
          </Link>
          
          <p className="text-gray-400 text-xs font-light leading-relaxed mb-4 text-right line-clamp-2">
            {description}
          </p>
          
          <div className="flex items-center gap-1 mb-4 text-[#cbb381] text-xs">
            {"★".repeat(Math.floor(rating))}
            <span className="text-gray-500 mr-1 text-[11px]">({rating})</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#8a7243]/5">
          <div className="flex flex-col">
            <span className="text-gray-500 text-[10px] uppercase tracking-wider">السعر</span>
            <span className="text-[#cbb381] font-black text-xl">{price} <span className="text-xs font-normal">ج.م</span></span>
          </div>

          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            onClick={() => addToCart({ id, title, price, imageSrc })}
            className="bg-[#1a1a1a] border border-[#8a7243]/30 hover:border-[#cbb381] hover:bg-[#cbb381] text-[#cbb381] hover:text-[#201808] p-3 rounded-lg shadow-md"
            aria-label="إضافة إلى السلة"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
            </svg>
          </motion.button>
          
        </div>
      </div>
    </motion.div>
  );
}
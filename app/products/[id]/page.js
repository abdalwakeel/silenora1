"use client";

import productsData from "../../data/product.json";
import { useCart } from "../../context/CartContext";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function ProductDetails() {
  const params = useParams();
  const { id } = params;
  const { addToCart } = useCart();

  let foundProduct = null;
  let foundSection = null;

  for (const sectionKey in productsData) {
    const product = productsData[sectionKey].items.find(
      (item) => String(item.id) === id,
    );
    if (product) {
      foundProduct = product;
      foundSection = productsData[sectionKey];
      break;
    }
  }

  if (!foundProduct) {
    return (
      <div
        className="bg-[#070707] min-h-screen flex flex-col items-center justify-center text-gray-200"
        dir="rtl"
      >
        <h2 className="text-2xl font-bold mb-4 text-[#cbb381]">
          المنتج غير موجود!
        </h2>
        <Link
          href="/products"
          className="px-6 py-2 border border-[#8a7243]/40 text-[#cbb381] rounded-xl hover:bg-[#cbb381]/10"
        >
          العودة للمنتجات
        </Link>
      </div>
    );
  }

  const displayPrice = foundProduct.price
    ? foundProduct.price
    : foundSection.pricing?.single || 0;

  return (
    <div className="bg-[#070707] min-h-screen py-16 px-4 text-right" dir="rtl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* عرض صورة المنتج الحقيقية */}
        <div className="w-full md:w-1/2 md:sticky md:top-24 bg-[#121212] aspect-square rounded-2xl border border-[#8a7243]/20 flex items-center justify-center relative overflow-hidden group">
          <Image
            src={foundProduct.image}
            alt={foundProduct.name}
            fill
            sizes="(max-w-7xl) 50vw"
            className="object-contain p-8 transform group-hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>

        {/* بيانات المنتج المجلوبة */}
        <div className="w-full md:w-1/2">
          <span className="text-[#a38a53] text-sm font-medium tracking-wide">
            {foundSection.section_title}
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-[#cbb381] mt-2 mb-4 leading-tight">
            {foundProduct.name}
          </h1>

          <p className="text-gray-400 leading-relaxed mb-8">
            {foundProduct.sub_title}
          </p>

          {/* المكونات وطريقة الاستخدام */}
          {foundProduct.details && (
            <div className="bg-[#0d0d0d] border border-[#8a7243]/15 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-[#cbb381] mb-4 flex items-center gap-2">
                <span>🌿</span> المكونات وطريقة الاستخدام
              </h3>
              <div className="text-gray-400 text-sm leading-loose whitespace-pre-line">
                {foundProduct.details}
              </div>
            </div>
          )}

          <div className="mb-10">
            <span className="block text-gray-500 text-sm mb-1 uppercase tracking-wider">
              السعر
            </span>
            <div className="text-4xl font-black text-[#cbb381]">
              {displayPrice} <span className="text-lg font-normal">ج.م</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={() =>
                addToCart({
                  id: foundProduct.id,
                  title: foundProduct.name,
                  price: displayPrice,
                  imageSrc: foundProduct.image,
                })
              }
              className="flex-1 bg-gradient-to-r from-[#b39964] via-[#e5d4b3] to-[#b39964] bg-[length:200%_auto] hover:bg-right text-[#201808] font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-[#cbb381]/10 flex items-center justify-center gap-2"
            >
              إضافة إلى السلة
            </button>
            <Link
              href="/products"
              className="flex items-center justify-center px-8 py-4 border border-[#8a7243]/40 text-[#cbb381] rounded-xl hover:bg-[#cbb381]/10 transition-colors font-semibold"
            >
              العودة للمنتجات
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

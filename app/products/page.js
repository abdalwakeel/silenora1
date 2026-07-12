'use client';

import productsData from '../data/product.json';
import ProductCard from '../components/common/ProductCard'; // تأكد من مطابقة مسار كارت المنتج عندك

export default function ProductsPage() {
  // تحويل كائن الأقسام إلى مصفوفة لعمل Loop (Map) بسهولة
  const sections = Object.keys(productsData).map((key) => ({
    id: key,
    ...productsData[key],
  }));

  return (
    <div className="bg-[#0a0a0a] min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-right" dir="rtl">
      <div className="max-w-7xl mx-auto">
        
        {sections.map((section) => (
          <section key={section.id} className="mb-16">
            
            {/* رأس القسم الفني */}
            <div className="border-b border-[#8a7243]/20 pb-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-black text-[#cbb381] mb-2">
                {section.section_title}
              </h2>
              <p className="text-gray-400 text-sm max-w-2xl font-light">
                {section.description}
              </p>
            </div>

            {/* شبكة المنتجات */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {section.items.map((product) => {
                // تحديد السعر الافتراضي للمنتج بناءً على القسم
                const displayPrice = product.price ? product.price : (section.pricing?.single || 0);

                return (
                  <ProductCard
                    key={product.id}
                    id={product.id} // 👈 مررنا الـ id ليصبح الرابط ديناميكياً
                    title={product.name}
                    category={section.section_title}
                    price={displayPrice}
                    rating={5}
                    imageSrc={product.image}
                    description={product.sub_title}
                  />
                );
              })}
            </div>
            
          </section>
        ))}

      </div>
    </div>
  );
}
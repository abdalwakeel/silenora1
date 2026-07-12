"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FeatureCard from "./components/common/FeatureCard";
import ProductCard from "./components/common/ProductCard";
import StatsSection from "./components/sections/StatsSection";
import ScrollProgress from "./components/common/ScrollProgress";
import productsData from "./data/product.json";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// اختار الـ ids اللي عايز تعرضها في "الأكثر مبيعاً" - عدلها زي ما تحب
const featuredIds = [
  "crown-magic-cobra",
  "egyptian-magic-collagen",
  "greorin-marine-collagen",
  "vitazen-d3-k2",
  "lobil-children-gummies",
  "glossy-crown-hair",
  "vitazen-potassium-magnesium",
  "egyptian-magic-original",
];

// دالة بتدور على المنتج وقسمه جوه product.json بالـ id
function getProductById(id) {
  for (const sectionKey in productsData) {
    const section = productsData[sectionKey];
    const product = section.items.find((item) => item.id === id);
    if (product) {
      return {
        id: product.id,
        title: product.name,
        category: section.section_title,
        price: product.price ? product.price : (section.pricing?.single || 0),
        rating: 5,
        imageSrc: product.image,
        description: product.sub_title,
      };
    }
  }
  return null;
}

export default function Home() {
  const features = [
    {
      icon: "✨",
      title: "مكونات طبيعية 100%",
      description:
        "مستخلصات نباتية وفيتامينات نقية مختبرة معملياً لضمان أعلى جودة وأمان لبشرتك وصحتك.",
    },
    {
      icon: "🧪",
      title: "تركيبات متطورة",
      description:
        "نجمع بين أحدث صيحات تكنولوجيا العناية بالبشرة والعلوم الطبية لتقديم نتائج ملحوظة ودائمة.",
    },
    {
      icon: "👑",
      title: "فخامة تليق بكِ",
      description:
        "تجربة عناية متكاملة تمنحكِ شعور الملكات وإشراقة حقيقية تبدأ من الداخل وتظهر على الخارج.",
    },
  ];

  // المنتجات دلوقتي جايه من product.json مش array محلي
  const products = featuredIds
    .map((id) => getProductById(id))
    .filter(Boolean);

  return (
    <>
      <ScrollProgress />
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center bg-[#070707] overflow-hidden px-4">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #8a7243 1px, transparent 1px), linear-gradient(to bottom, #8a7243 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(circle at center, black 40%, transparent 90%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 40%, transparent 90%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 border border-[#8a7243]/40 bg-[#121212]/80 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
            <span className="text-[#8a7243] text-xs">✦</span>
            <span className="text-gray-300 font-medium tracking-[0.2em] text-[10px] md:text-xs uppercase">
              Silenora — Cosmetics & Vitamins
            </span>
            <span className="text-[#8a7243] text-xs">✦</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-[#cbb381] tracking-wide leading-tight mb-4 drop-shadow-[0_2px_10px_rgba(203,179,129,0.15)]">
            اكتشفي سر جمالك وصحتك
          </h1>
          <h2 className="text-sm md:text-lg font-serif tracking-[0.3em] uppercase text-[#a38a53] mb-8">
            Premium Beauty & Wellness
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mb-12 font-light">
            سيلينورا — البراند الذي يجمع بين فخامة العناية بالبشرة وقوة
            الفيتامينات في تجربة واحدة متكاملة. منتجات مختارة بعناية لتمنحك
            إشراقة حقيقية من الداخل والخارج.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              href="/products"
              className="w-full sm:w-52 py-3.5 px-6 rounded-lg font-bold text-[#201808] transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-[#cbb381]/10 bg-gradient-to-r from-[#b39964] via-[#e5d4b3] to-[#b39964] bg-[length:200%_auto] hover:bg-right text-center"
            >
              استكشفي المنتجات
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-52 py-3.5 px-6 rounded-lg font-semibold text-[#cbb381] border border-[#cbb381]/40 bg-transparent hover:bg-[#cbb381]/5 transition-all duration-300 text-center"
            >
              لماذا سيلينورا؟
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. BRAND FEATURES SECTION */}
      <section className="bg-[#0a0a0a] py-24 px-4 border-t border-[#8a7243]/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#cbb381] mb-4">
              لماذا تختارين سيلينورا؟
            </h2>
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-[#cbb381] to-transparent mx-auto"></div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS SECTION */}
      <section className="bg-[#070707] py-24 px-4 border-t border-[#8a7243]/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#a38a53] text-xs font-serif tracking-[0.2em] uppercase block mb-2">
              Our Collection
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#cbb381] mb-4">
              المنتجات الأكثر مبيعاً
            </h2>
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-[#cbb381] to-transparent mx-auto"></div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {products.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard
                  id={product.id}
                  title={product.title}
                  category={product.category}
                  price={product.price}
                  rating={product.rating}
                  imageSrc={product.imageSrc}
                  description={product.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. STATS SECTION */}
      <StatsSection />
    </>
  );
}
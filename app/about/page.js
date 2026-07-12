'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function AboutPage() {
  return (
    <div className="bg-[#070707] min-h-screen py-20 px-4 text-gray-300">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* هيدر الصفحة */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#a38a53] text-xs font-serif tracking-[0.2em] uppercase block mb-3">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-black text-[#cbb381] mb-4">قصة سيلينورا</h1>
          <div className="h-0.5 w-16 bg-[#cbb381] mx-auto"></div>
        </motion.div>

        {/* سياق القصة والرسالة */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12 text-right border-l border-r border-[#8a7243]/10 px-6 md:px-12 py-8 bg-[#0a0a0a] rounded-2xl"
        >
          <motion.div variants={itemVariants} className="space-y-3">
            <h2 className="text-xl font-bold text-[#cbb381] flex items-center gap-2 justify-end">
              <span>البداية والرؤية</span> ✨
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              ولدت سيلينورا من شغف حقيقي بالجمال والصحة الشمولية. نحن نؤمن أن الإشراق الحقيقي لا يأتي من المستحضرات السطحية فقط، بل يبدأ من العناية بالذات وتغذية الجسد من الداخل ليظهر أثره الفاخر على الخارج.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3">
            <h2 className="text-xl font-bold text-[#cbb381] flex items-center gap-2 justify-end">
              <span>فلسفة المنتجات</span> 🧪
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              كل سيروم، كريم، أو مكمل غذائي يحمل اسم سيلينورا يمر برحلة طويلة من البحث والتطوير. ندمج أحدث ما توصلت إليه علوم العناية بالبشرة مع أنقى الفيتامينات والمستخلصات الطبيعية لنقدم تركيبات متطورة تمنحكِ نتائج ملحوظة وآمنة تماماً.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3">
            <h2 className="text-xl font-bold text-[#cbb381] flex items-center gap-2 justify-end">
              <span>وعدنا لكِ</span> 👑
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              نحن لا نبيع منتجات، بل نقدم تجربة ملكية تليق بكِ. نلتزم بأعلى معايير الجودة والنقاء، ونعدكِ بأن نكون دائماً شريكك الموثوق في رحلة الحفاظ على شباب بشرتك وحيويتك.
            </p>
          </motion.div>
        </motion.div>

        {/* زر التوجيه النهائي */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <p className="text-gray-500 text-sm mb-6 font-light">هل أنتِ مستعدة لبدء رحلة العناية الفاخرة؟</p>
          <Link 
            href="/products" 
            className="inline-block py-3.5 px-10 rounded-xl font-bold text-[#201808] transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-[#cbb381]/10 bg-gradient-to-r from-[#b39964] via-[#e5d4b3] to-[#b39964] bg-[length:200%_auto] hover:bg-right text-center text-sm"
          >
            استكشفي مجموعتنا الآن
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
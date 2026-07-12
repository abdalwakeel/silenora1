
'use client';

import { motion } from 'framer-motion';

export default function StatsSection() {
  const stats = [
    { id: 1, number: '5★', label: 'تقييم العملاء' },
    { id: 2, number: '20+', label: 'منتج متميز' },
    { id: 3, number: '100%', label: 'مكونات طبيعية' },
    { id: 4, number: '500+', label: 'عميلة سعيدة' },
  ];

  return (
    <section className="bg-[#050505] border-y border-[#8a7243]/10 py-16 px-4 text-gray-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 text-center">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.id * 0.1 }}
              className="flex flex-col items-center justify-center space-y-2"
            >
              {/* الرقم - مع تطبيق ستايل فخم للخط مشابه للصورة */}
              <span className="text-3xl md:text-5xl font-serif text-[#cbb381] tracking-wide block">
                {stat.number === '5★' ? (
                  <span className="flex items-center justify-center gap-1 font-sans">
                    <span className="text-[#cbb381] text-2xl md:text-4xl">★</span>5
                  </span>
                ) : (
                  stat.number
                )}
              </span>
              
              {/* الوصف السفلي */}
              <p className="text-xs md:text-sm text-gray-400 font-light tracking-wide pt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-gray-500 border-t border-[#8a7243]/10 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-[#8a7243]/5 pb-8 mb-8">
          
          {/* اسم البراند في الفوتر */}
          <div className="text-center md:text-right">
            <span className="text-xl font-black text-[#cbb381] tracking-widest block mb-1">SILENORA</span>
            <span className="text-[10px] text-gray-600 tracking-widest uppercase block">Premium Beauty & Wellness</span>
          </div>

          {/* روابط سريعة مبسطة */}
          <div className="flex gap-6 text-xs font-light">
            <Link href="/privacy" className="hover:text-[#cbb381] transition-colors">سياسة الخصوصية</Link>
            <Link href="/terms" className="hover:text-[#cbb381] transition-colors">الشروط والأحكام</Link>
            <Link href="/contact" className="hover:text-[#cbb381] transition-colors">اتصلي بنا</Link>
          </div>
        </div>

        {/* حقوق الملكية */}
        <div className="text-center text-xs font-light tracking-wide text-gray-600">
          <p>© {new Date().getFullYear()} SILENORA. جميع الحقوق محفوظة.</p>
          <br />
          <p>made with abdalwakeel mohamed</p>
          
        </div>
      </div>
    </footer>
  );
}
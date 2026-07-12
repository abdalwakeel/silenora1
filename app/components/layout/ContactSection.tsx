'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact Form Data:", formData);
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    // 👈 أضفنا id="contact" عشان نقدر نعمل سكرول ليه من أي مكان
    <section id="contact" className="bg-[#090909] border-t border-[#8a7243]/10 py-16 px-4 text-gray-300 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* هيدر السيكشن */}
        <div className="text-center mb-16">
          <span className="text-[#a38a53] text-xs font-serif tracking-[0.2em] uppercase block mb-2">Get In Touch</span>
          <h2 className="text-2xl md:text-4xl font-black text-[#cbb381] mb-4">تواصل معنا</h2>
          <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-[#cbb381] to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* كروت معلومات الاتصال */}
          <div className="lg:col-span-5 space-y-6 text-right order-2 lg:order-1">
            <div className="bg-[#0a0a0a] border border-[#8a7243]/5 p-6 rounded-2xl flex flex-row-reverse items-center gap-4">
              <div className="w-12 h-12 bg-[#cbb381]/10 rounded-xl flex items-center justify-center text-xl text-[#cbb381]">📞</div>
              <div>
                <h3 className="text-sm font-bold text-gray-400 mb-1">خدمة العملاء</h3>
                <p className="text-base font-black text-[#cbb381]" style={{ direction: 'ltr' }}>+20 106 285 6027</p>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-[#8a7243]/5 p-6 rounded-2xl flex flex-row-reverse items-center gap-4">
              <div className="w-12 h-12 bg-[#cbb381]/10 rounded-xl flex items-center justify-center text-xl text-[#cbb381]">✉️</div>
              <div>
                <h3 className="text-sm font-bold text-gray-400 mb-1">البريد الإلكتروني</h3>
                <p className="text-sm font-medium text-gray-200">support@silenora.com</p>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-[#8a7243]/5 p-6 rounded-2xl flex flex-row-reverse items-center gap-4">
              <div className="w-12 h-12 bg-[#cbb381]/10 rounded-xl flex items-center justify-center text-xl text-[#cbb381]">⏳</div>
              <div>
                <h3 className="text-sm font-bold text-gray-400 mb-1">ساعات العمل</h3>
                <p className="text-sm font-medium text-gray-200">يومياً من الساعة 10:00 صباحاً حتى 10:00 مساءً</p>
              </div>
            </div>
          </div>

          {/* فورمة التواصل */}
          <div className="lg:col-span-7 bg-[#111] border border-[#8a7243]/10 p-8 rounded-2xl text-right order-1 lg:order-2 relative overflow-hidden shadow-xl">
            {submitted && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute inset-0 bg-[#111] z-20 flex flex-col items-center justify-center text-center p-6"
              >
                <div className="w-16 h-16 bg-[#cbb381]/10 rounded-full flex items-center justify-center text-2xl text-[#cbb381] mb-4 animate-bounce">✉️</div>
                <h3 className="text-xl font-black text-[#cbb381] mb-2">تم إرسال رسالتك بنجاح!</h3>
                <p className="text-gray-400 text-xs">شكراً لتواصلك معنا، سيرد عليك أحد ممثلينا في أقرب وقت ممكن.</p>
              </motion.div>
            )}

            <h3 className="text-lg font-bold text-[#cbb381] mb-6">أرسلي لنا رسالة مباشرة</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-400">الاسم بالكامل *</label>
                  <input 
                    type="text" required
                    className="bg-[#1a1a1a] border border-[#8a7243]/20 rounded-xl p-3 text-sm text-gray-200 focus:outline-none focus:border-[#cbb381]"
                    placeholder="اسمك الكريم"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-400">البريد الإلكتروني *</label>
                  <input 
                    type="email" required
                    className="bg-[#1a1a1a] border border-[#8a7243]/20 rounded-xl p-3 text-sm text-gray-200 focus:outline-none focus:border-[#cbb381]"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-400">عنوان الموضوع *</label>
                <input 
                  type="text" required
                  className="bg-[#1a1a1a] border border-[#8a7243]/20 rounded-xl p-3 text-sm text-gray-200 focus:outline-none focus:border-[#cbb381]"
                  placeholder="عن ماذا تود الاستفسار؟"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-400">نص الرسالة *</label>
                <textarea 
                  rows={4} required
                  className="bg-[#1a1a1a] border border-[#8a7243]/20 rounded-xl p-3 text-sm text-gray-200 focus:outline-none focus:border-[#cbb381] resize-none"
                  placeholder="اكتب رسالتك بالتفصيل هنا..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button type="submit" className="w-full py-3.5 rounded-xl font-bold text-[#201808] bg-gradient-to-r from-[#b39964] via-[#e5d4b3] to-[#b39964] shadow-lg shadow-[#cbb381]/10 text-center text-sm">
                إرسال الرسالة الآن
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
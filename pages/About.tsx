
import React, { useState } from 'react';
import { COMPANY_NAME, ADDRESS, FAQS } from '../constants';
import { useLanguage } from '../App';

const About: React.FC = () => {
  const { lang, t } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-24 border-b">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">
            {lang === 'en' ? 'Since 2014' : 'منذ عام ٢٠١٤'}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">{t('aboutTitle')} 🏢</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t('aboutSubtitle')}
          </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className={`${lang === 'ar' ? 'order-2' : ''}`}>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">{t('ourMission')}</h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              {lang === 'en' 
                ? "Our mission is to ensure every home and office in Abu Dhabi stays cool and functional. We believe in professional integrity, transparent communication, and technical excellence. Whether it's a minor leak or a major central AC overhaul, we treat every job with the same level of priority. ❄️"
                : "مهمتنا هي ضمان بقاء كل منزل ومكتب في أبوظبي بارداً وعملياً. نحن نؤمن بالنزاهة المهنية والتواصل الشفاف والتميز الفني. سواء كان تسرباً بسيطاً أو إصلاحاً شاملاً للتكييف المركزي، فإننا نتعامل مع كل وظيفة بنفس المستوى من الأهمية. ❄️"}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm transition-transform hover:-translate-y-1">
                <p className="font-bold text-blue-900 mb-2">Expert Team 👨‍🔧</p>
                <p className="text-sm text-blue-700">
                  {lang === 'en' ? 'Qualified engineers with years of UAE experience.' : 'مهندسون مؤهلون يتمتعون بسنوات من الخبرة في الإمارات.'}
                </p>
              </div>
              <div className="p-6 bg-green-50 rounded-2xl border border-green-100 shadow-sm transition-transform hover:-translate-y-1">
                <p className="font-bold text-green-900 mb-2">Local Shop 📍</p>
                <p className="text-sm text-green-700">
                  {lang === 'en' ? 'Conveniently located in Mussafah M9 for fast response.' : 'موقع متميز في مصفح M9 للاستجابة السريعة.'}
                </p>
              </div>
            </div>
          </div>
          <div className={`${lang === 'ar' ? 'order-1' : ''}`}>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" alt="Al Dawood Workshop" className="rounded-[2.5rem] shadow-2xl relative z-10" />
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-600 rounded-[2.5rem] -z-10 opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{t('faqTitle')}</h2>
            <p className="text-lg text-gray-600">{t('faqSubtitle')}</p>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-start hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-bold text-gray-800">
                    {lang === 'en' ? faq.q : faq.qAr}
                  </span>
                  <svg 
                    className={`w-6 h-6 text-blue-600 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4 animate-in fade-in slide-in-from-top-1 duration-300">
                    {lang === 'en' ? faq.a : faq.aAr}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <circle cx="50" cy="50" r="40" fill="currentColor" />
            </svg>
         </div>
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl font-bold mb-8 italic text-blue-400">
              {lang === 'en' ? '"Your comfort is our commitment."' : '"راحتكم هي التزامنا."'} ❄️
            </h2>
            <p className="text-xl opacity-80 mb-10 leading-relaxed">
               {lang === 'en' 
                 ? "We understand that air conditioning isn't just a luxury in Abu Dhabi—it's a necessity. That's why we maintain a fleet of service vehicles ready to deploy anytime."
                 : "نحن ندرك أن تكييف الهواء ليس مجرد رفاهية في أبوظبي - بل هو ضرورة. لهذا السبب نحتفظ بأسطول من مركبات الخدمة الجاهزة للعمل في أي وقت."}
            </p>
            <div className="text-sm font-medium text-blue-300 uppercase tracking-widest">
               📍 {ADDRESS}
            </div>
         </div>
      </section>
    </div>
  );
};

export default About;

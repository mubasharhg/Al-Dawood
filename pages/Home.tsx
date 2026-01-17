
import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, CONTACT_NUMBERS, SERVICES_LIST, TESTIMONIALS } from '../constants';
import { useLanguage } from '../App';

const Home: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-gray-900 text-white overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1599933333333-333333333333?auto=format&fit=crop&q=80&w=1600" 
            alt="Abu Dhabi HVAC Service" 
            className="w-full h-full object-cover opacity-40 mix-blend-multiply scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/90 via-blue-900/60 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="lg:w-3/5">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 rounded-full text-blue-300 text-sm font-bold uppercase tracking-widest mb-8 animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-3 rtl:ml-3 rtl:mr-0 animate-ping"></span>
              {lang === 'en' ? 'Expert AC Team in Mussafah M9' : 'فريق خبراء التكييف في مصفح M9'}
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tight animate-slide-up">
              {t('heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-blue-100/90 max-w-2xl leading-relaxed font-medium animate-slide-up delay-100">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 animate-slide-up delay-200">
              <a 
                href={`tel:${CONTACT_NUMBERS[0]}`}
                className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95"
              >
                <svg className="w-6 h-6 mr-3 rtl:ml-3 rtl:mr-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.47 5.47L11 14.043a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {t('callNow')}
              </a>
              <a 
                href="https://wa.me/971554227898"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/20 transition-all flex items-center justify-center"
              >
                <span className="mr-3 rtl:ml-3 rtl:mr-0">💬</span>
                {t('whatsapp')}
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 hidden lg:block p-12 opacity-20">
           <svg className="w-64 h-64 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
           </svg>
        </div>
      </section>

      {/* Trust Badges - Improved Visuals */}
      <section className="bg-white py-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 -mt-20">
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/10 border border-gray-50 p-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { text: t('trust1'), icon: '🏗️', bg: 'bg-blue-50', color: 'text-blue-600' },
              { text: t('trust2'), icon: '😊', bg: 'bg-green-50', color: 'text-green-600' },
              { text: t('trust3'), icon: '🚨', bg: 'bg-red-50', color: 'text-red-600' },
              { text: t('trust4'), icon: '✅', bg: 'bg-yellow-50', color: 'text-yellow-600' }
            ].map((badge, i) => (
              <div key={i} className="flex flex-col items-center group cursor-default">
                <div className={`w-16 h-16 ${badge.bg} rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:rotate-12`}>
                   <span className="text-3xl">{badge.icon}</span>
                </div>
                <div className="text-lg font-black text-gray-900 text-center leading-tight max-w-[150px]">{badge.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - Modernized Cards */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                {lang === 'en' ? 'Quality Solutions For' : 'حلول جودة لـ'} <span className="text-blue-600">{lang === 'en' ? 'Your Comfort' : 'راحتكم'}</span>
              </h2>
              <p className="text-gray-600 text-lg font-medium leading-relaxed">
                {lang === 'en' 
                  ? 'We bring a decade of expertise to Mussafah and Abu Dhabi, ensuring your systems run cool 24/7. ❄️' 
                  : 'نقدم عقداً من الخبرة في مصفح وأبوظبي، لضمان عمل أنظمتكم ببرودة على مدار الساعة. ❄️'}
              </p>
            </div>
            <Link to="/services" className="inline-flex items-center font-black text-blue-600 text-lg hover:underline underline-offset-8">
               {lang === 'en' ? 'View all services' : 'عرض كافة الخدمات'} <span className="ml-2 rtl:mr-2">→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES_LIST.map((service) => (
              <div key={service.id} className="group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full hover:-translate-y-2">
                <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 leading-tight">{lang === 'en' ? service.title : service.titleAr}</h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed font-medium flex-grow">
                  {lang === 'en' ? service.description : 'خدمات تشخيص وإصلاح احترافية لجميع أنواع وحدات التكييف المركزي في أبوظبي.'}
                </p>
                <Link 
                  to="/services" 
                  className="w-full text-center py-4 bg-gray-50 rounded-2xl text-blue-600 font-black text-sm group-hover:bg-blue-600 group-hover:text-white transition-all"
                >
                  {lang === 'en' ? 'Service Details' : 'تفاصيل الخدمة'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - More Professional Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">{t('testimonialsTitle')}</h2>
             <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">{t('testimonialsSub')}</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-10">
             {TESTIMONIALS.map((tst, i) => (
                <div key={i} className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100 flex flex-col h-full hover:bg-white hover:shadow-xl transition-all duration-300">
                   <div className="flex text-yellow-400 mb-8">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                   </div>
                   <p className="text-xl text-gray-800 mb-10 leading-relaxed font-bold italic">
                      "{lang === 'en' ? tst.text : tst.textAr}"
                   </p>
                   <div className="flex items-center mt-auto pt-8 border-t border-gray-200">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center text-white text-xl font-black mr-4 rtl:ml-4 rtl:mr-0 shadow-lg">
                         {tst.name[0]}
                      </div>
                      <div>
                         <div className="font-black text-gray-900 text-lg">{tst.name}</div>
                         <div className="text-sm text-blue-600 font-bold uppercase tracking-widest">{tst.area}</div>
                      </div>
                   </div>
                </div>
             ))}
          </div>
          
          <div className="mt-20 bg-blue-900 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl overflow-hidden relative">
             <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
             
             <div className="relative z-10">
                <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                  {lang === 'en' ? 'Experience Abu Dhabi\'s Preferred Service' : 'تجربة الخدمة المفضلة في أبوظبي'}
                </h3>
                <p className="max-w-3xl mx-auto mb-12 text-blue-100 text-xl font-medium leading-relaxed opacity-90">
                  {lang === 'en' 
                    ? 'Join 2000+ happy clients who trust Al Dawood for their annual maintenance and urgent repairs.' 
                    : 'انضم إلى أكثر من 2000 عميل سعيد يثقون في الداود لصيانتهم السنوية وإصلاحاتهم العاجلة.'}
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <Link 
                    to="/contact" 
                    className="bg-white text-blue-900 px-12 py-5 rounded-[1.5rem] font-black text-xl hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
                  >
                    {lang === 'en' ? 'Book a Free Inspection' : 'احجز فحصاً مجانياً'}
                  </Link>
                   <a 
                    href={`tel:${CONTACT_NUMBERS[0]}`}
                    className="border-2 border-white/30 hover:border-white/60 text-white px-12 py-5 rounded-[1.5rem] font-black text-xl transition-all"
                  >
                    {t('callNow')}
                  </a>
                </div>
             </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; opacity: 0; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .animate-pulse-slow { animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes pulse { 0%, 100% { opacity: 0.4; transform: scale(1.05); } 50% { opacity: 0.5; transform: scale(1); } }
      `}} />
    </div>
  );
};

export default Home;


import React, { useState } from 'react';
import { COMPANY_NAME, ADDRESS, CONTACT_NUMBERS } from '../constants';
import { useLanguage } from '../App';

const Contact: React.FC = () => {
  const { lang, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', area: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = lang === 'en' ? 'Name is required' : 'الاسم مطلوب';
    if (!formData.phone || formData.phone.length < 8) newErrors.phone = lang === 'en' ? 'Valid phone is required' : 'رقم الهاتف مطلوب';
    if (!formData.message) newErrors.message = lang === 'en' ? 'Message is required' : 'الرسالة مطلوبة';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">{t('contactUs')}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {lang === 'en' ? 'We are ready to handle your AC and maintenance needs 24/7 in Abu Dhabi.' : 'نحن مستعدون للتعامل مع احتياجات التكييف والصيانة الخاصة بك على مدار الساعة طوال أيام الأسبوع في أبوظبي.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-sm border border-gray-100">
            {!submitted ? (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <h2 className="text-3xl font-bold mb-4">{lang === 'en' ? 'Get a Free Quote' : 'احصل على عرض سعر مجاني'}</h2>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">{lang === 'en' ? 'Your Name' : 'اسمك'}</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full p-5 bg-gray-50 border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none transition-all`} 
                    placeholder={lang === 'en' ? 'Full Name' : 'الاسم الكامل'} 
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 font-bold">{errors.name}</p>}
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">{lang === 'en' ? 'Phone Number' : 'رقم الهاتف'}</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className={`w-full p-5 bg-gray-50 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none transition-all`} 
                      placeholder="05x xxx xxxx" 
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1 font-bold">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">{lang === 'en' ? 'Your Area' : 'منطقتك'}</label>
                    <input 
                      type="text" 
                      value={formData.area}
                      onChange={(e) => setFormData({...formData, area: e.target.value})}
                      className="w-full p-5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none transition-all" 
                      placeholder="e.g. MBZ City" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">{lang === 'en' ? 'Describe the Issue' : 'صف المشكلة'}</label>
                  <textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className={`w-full p-5 bg-gray-50 border ${errors.message ? 'border-red-500' : 'border-gray-200'} rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none transition-all`} 
                    rows={4} 
                    placeholder={lang === 'en' ? 'What service do you need?' : 'ما الخدمة التي تحتاجها؟'}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1 font-bold">{errors.message}</p>}
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl hover:bg-blue-700 transition-all shadow-xl text-xl">
                  {lang === 'en' ? 'Send Request' : 'أرسل الطلب'}
                </button>
              </form>
            ) : (
              <div className="py-20 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                   <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{lang === 'en' ? 'Request Sent!' : 'تم إرسال الطلب!'}</h2>
                <p className="text-lg text-gray-600 mb-10">{t('formSuccess')}</p>
                <button onClick={() => setSubmitted(false)} className="text-blue-600 font-bold hover:underline">
                   {lang === 'en' ? 'Send another request' : 'أرسل طلباً آخر'}
                </button>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-blue-900 text-white p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                 <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.47 5.47L11 14.043a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
              </div>
              <h2 className="text-3xl font-bold mb-10 relative z-10">{lang === 'en' ? 'Emergency Support' : 'دعم الطوارئ'}</h2>
              <div className="space-y-6 relative z-10">
                {CONTACT_NUMBERS.map(num => (
                  <a key={num} href={`tel:${num}`} className="flex items-center p-5 bg-white bg-opacity-10 rounded-2xl hover:bg-opacity-20 transition-all border border-white border-opacity-10 group">
                    <div className="w-14 h-14 bg-white text-blue-900 rounded-2xl flex items-center justify-center mr-5 rtl:ml-5 rtl:mr-0 shadow-lg group-hover:scale-105 transition-transform">
                       <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.47 5.47L11 14.043a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                       <div className="text-xs font-bold opacity-60 uppercase tracking-widest mb-1">{lang === 'en' ? 'Direct Line' : 'خط مباشر'}</div>
                       <div className="text-2xl font-black">{num}</div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-12 pt-10 border-t border-white border-opacity-10">
                <p className="font-bold text-xl mb-4 tracking-tight">{lang === 'en' ? 'Mussafah M9 Shop' : 'محل مصفح M9'}</p>
                <p className="opacity-80 leading-relaxed text-lg">{ADDRESS}</p>
              </div>
            </div>
            
            <div className="bg-gray-200 h-80 rounded-[2.5rem] flex items-center justify-center text-gray-500 font-bold border-2 border-dashed border-gray-300">
               [ Interactive Map: Al Dawood AC Mussafah M9 ]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

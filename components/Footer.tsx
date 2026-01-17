
import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, ADDRESS, CONTACT_NUMBERS, SERVICE_AREAS } from '../constants';
import { useLanguage } from '../App';

const Footer: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-white text-2xl font-black mb-6">
              {lang === 'en' ? 'Al Dawood' : 'الداود'} <span className="text-blue-500">{lang === 'en' ? 'AC Works' : 'للتكييف'}</span>
            </h3>
            <p className="text-sm leading-relaxed mb-8 opacity-70">
              {t('footerDesc')}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all cursor-pointer shadow-lg">
                <span className="font-bold text-xs">FB</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all cursor-pointer shadow-lg">
                <span className="font-bold text-xs">IG</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6">{t('footerLinks')}</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors flex items-center">
                <span className="mr-2 rtl:ml-2">→</span> {t('home')}
              </Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors flex items-center">
                <span className="mr-2 rtl:ml-2">→</span> {t('ourServices')}
              </Link></li>
              <li><Link to="/areas" className="hover:text-blue-400 transition-colors flex items-center">
                <span className="mr-2 rtl:ml-2">→</span> {t('areas')}
              </Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors flex items-center">
                <span className="mr-2 rtl:ml-2">→</span> {t('about')}
              </Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors flex items-center">
                <span className="mr-2 rtl:ml-2">→</span> {t('contactUs')}
              </Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6">{t('footerContact')}</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <div className="w-8 h-8 bg-blue-900/50 rounded-lg flex items-center justify-center mr-3 rtl:ml-3 shrink-0">
                   <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                </div>
                <span>{ADDRESS}</span>
              </li>
              {CONTACT_NUMBERS.map(num => (
                <li key={num} className="flex items-center">
                  <div className="w-8 h-8 bg-green-900/50 rounded-lg flex items-center justify-center mr-3 rtl:ml-3 shrink-0">
                     <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <a href={`tel:${num}`} className="hover:text-blue-400 transition-colors font-mono">{num}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6">{t('footerAreas')}</h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {SERVICE_AREAS.slice(0, 15).map(area => (
                <Link key={area} to="/areas" className="bg-gray-800 px-3 py-1.5 rounded-lg hover:bg-gray-700 hover:text-white transition-all">
                  {area}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-50">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. {lang === 'en' ? 'All rights reserved.' : 'جميع الحقوق محفوظة.'}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 rtl:space-x-reverse">
             <Link to="/contact" className="hover:text-white transition-colors">{lang === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية'}</Link>
             <Link to="/contact" className="hover:text-white transition-colors">{lang === 'en' ? 'Terms of Service' : 'شروط الخدمة'}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

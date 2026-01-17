
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_NAME, CONTACT_NUMBERS } from '../constants';
import { useLanguage } from '../App';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('ourServices'), path: '/services' },
    { name: t('acRepair'), path: '/central-ac-repair-abu-dhabi' },
    { name: t('areas'), path: '/areas' },
    { name: t('about'), path: '/about' },
    { name: t('contactUs'), path: '/contact' },
    { name: t('aiTools'), path: '/ai-tools' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2.5 rounded-xl mr-3 rtl:ml-3 rtl:mr-0 shadow-lg group-hover:scale-105 transition-transform">
                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                 </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-gray-900 leading-none uppercase tracking-tighter">
                  {lang === 'en' ? COMPANY_NAME.split(' ')[0] : 'الداود'}
                </span>
                <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">
                  {lang === 'en' ? 'Central AC Works' : 'للتكييف المركزي'}
                </span>
              </div>
            </Link>
          </div>
          
          <div className="hidden xl:flex items-center space-x-1 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                  isActive(link.path) 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <button 
              onClick={toggleLang}
              className="flex items-center px-4 py-2 border-2 border-gray-100 rounded-xl hover:bg-gray-50 text-sm font-bold transition-all"
            >
              {t('lang')}
            </button>
            <a 
              href={`tel:${CONTACT_NUMBERS[0]}`}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-blue-200"
            >
              {t('callNow')}
            </a>
          </div>

          <div className="flex items-center xl:hidden space-x-2 rtl:space-x-reverse">
            <button onClick={toggleLang} className="p-2 text-sm font-bold border rounded-xl md:hidden">{t('lang')}</button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-500 hover:text-blue-600 hover:bg-blue-50 focus:outline-none transition-all"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`xl:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen border-t' : 'max-h-0'}`}>
        <div className="px-4 pt-4 pb-6 space-y-2 bg-white shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-bold transition-all ${
                isActive(link.path) ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
             <a 
              href={`tel:${CONTACT_NUMBERS[0]}`}
              className="w-full text-center bg-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg"
            >
              {t('callNow')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

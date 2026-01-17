
import React, { createContext, useState, useContext, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ACRepairLanding from './pages/ACRepairLanding';
import ServiceAreas from './pages/ServiceAreas';
import Contact from './pages/Contact';
import AIExperience from './pages/AIExperience';

type Language = 'en' | 'ar';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

import { TRANSLATIONS } from './constants';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');

  const toggleLang = () => setLang(prev => prev === 'en' ? 'ar' : 'en');
  const t = (key: string) => TRANSLATIONS[lang][key] || key;

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      <Router>
        <div className={`flex flex-col min-h-screen ${lang === 'ar' ? 'font-sans' : ''}`}>
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/central-ac-repair-abu-dhabi" element={<ACRepairLanding />} />
              <Route path="/areas" element={<ServiceAreas />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/ai-tools" element={<AIExperience />} />
            </Routes>
          </main>
          <Footer />
          
          <div className="md:hidden sticky bottom-4 mx-4 z-40">
             <div className="bg-blue-600 text-white p-4 rounded-2xl flex justify-between items-center shadow-2xl">
                <div className="flex flex-col">
                   <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">{lang === 'en' ? 'Emergency Help' : 'مساعدة طوارئ'}</span>
                   <span className="font-bold">0554227898</span>
                </div>
                <div className="flex space-x-2 rtl:space-x-reverse">
                   <a href="tel:0554227898" className="bg-white text-blue-600 p-2.5 rounded-full">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.47 5.47L11 14.043a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                   </a>
                </div>
             </div>
          </div>
        </div>
      </Router>
    </LanguageContext.Provider>
  );
};

export default App;

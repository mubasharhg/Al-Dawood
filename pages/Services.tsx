
import React from 'react';
import { COMPANY_NAME, CONTACT_NUMBERS, SERVICES_LIST } from '../constants';

const Services: React.FC = () => {
  const hvac = SERVICES_LIST.filter(s => s.category === 'HVAC');
  const maint = SERVICES_LIST.filter(s => s.category === 'Maintenance');

  // Additional services not in the primary list but mentioned in the prompt
  // Standardized 'desc' to 'description' to match the Service interface and SERVICES_LIST
  const moreMaint = [
    { title: 'Floor Tiling', description: 'Professional installation of ceramic and porcelain tiles for bathrooms, kitchens, and living areas.' },
    { title: 'Home Painting', description: 'Interior and exterior painting services with high-quality finishes and wall preparation.' },
    { title: 'Electrical Work', description: 'Fixing electrical faults, installing lights, and managing distribution boards safely.' },
    { title: 'Refrigerant Gas Refill', description: 'Ensuring your AC has the right pressure for maximum cooling efficiency.' }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From emergency repairs in **Mussafah Industrial Area** to routine maintenance across **Abu Dhabi**, we offer a full spectrum of home solutions.
          </p>
        </header>

        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-10 flex items-center">
            <span className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </span>
            HVAC & Central AC Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {hvac.map(service => (
              <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
                <div className="flex items-center text-blue-600 font-bold text-sm">
                   <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                   Genuine Parts Used
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-10 flex items-center">
             <span className="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
             </span>
             General Home Maintenance
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...maint, ...moreMaint].map((m, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">{m.title}</h3>
                {/* Fixed: Use standardized 'description' property which is now common across all list members */}
                <p className="text-xs text-gray-500 leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-20 bg-blue-900 rounded-3xl p-12 text-center text-white">
           <h3 className="text-3xl font-bold mb-6">Experience the Al Dawood Difference</h3>
           <p className="max-w-2xl mx-auto mb-10 opacity-80">
              We provide free inspections for large maintenance projects in **Mussafah M9** and **Abu Dhabi City**. 
              Call us today to schedule a visit from our technical team.
           </p>
           <a href={`tel:${CONTACT_NUMBERS[0]}`} className="inline-block bg-white text-blue-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl">
              Call Now: {CONTACT_NUMBERS[0]}
           </a>
        </div>
      </div>
    </div>
  );
};

export default Services;

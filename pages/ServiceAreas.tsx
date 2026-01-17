
import React from 'react';
import { SERVICE_AREAS, COMPANY_NAME, ADDRESS } from '../constants';

const ServiceAreas: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Service Areas in Abu Dhabi</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Based in **Mussafah M9**, Al Dawood Central AC Works provides fast and reliable services across the entire emirate.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold mb-4 italic">Primary Service Hub</h2>
              <p className="text-3xl font-extrabold mb-2">Mussafah M9</p>
              <p className="opacity-90 mb-6">Industrial Area & Surroundings</p>
              <div className="h-px bg-blue-400 mb-6"></div>
              <p className="text-sm">We provide the fastest response times for customers in our immediate vicinity in Mussafah.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">Visit Our Shop</h3>
              <p className="text-sm text-gray-600">{ADDRESS}</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-8">We cover all major Abu Dhabi communities:</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {SERVICE_AREAS.map(area => (
                <div key={area} className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors border border-gray-100">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">{area}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Don't see your area?</h3>
              <p className="text-blue-800 text-center mb-6">
                We often travel further for specialized projects. Give us a call to confirm if we can reach your location.
              </p>
              <div className="flex justify-center">
                 <a href="/#/contact" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-shadow shadow-md">Get a Quote</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreas;

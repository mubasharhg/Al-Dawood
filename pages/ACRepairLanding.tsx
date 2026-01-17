
import React from 'react';
import { COMPANY_NAME, CONTACT_NUMBERS, ADDRESS } from '../constants';

const ACRepairLanding: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* SEO Title: Central AC Repair Abu Dhabi | Expert Maintenance in Mussafah M9 */}
      <header className="bg-white py-16 border-b">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Central AC Repair Abu Dhabi: Fast, Reliable & Professional
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the best AC technician services in **Mussafah M9** and across Abu Dhabi. 
            We specialize in central unit troubleshooting, gas refills, and urgent repairs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${CONTACT_NUMBERS[0]}`} className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-blue-700">
              Emergency Repair: {CONTACT_NUMBERS[0]}
            </a>
            <a href="https://wa.me/971554227898" className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-green-700">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-16">
        <section className="prose prose-blue lg:prose-lg max-w-none text-gray-700">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Expert AC Technicians in Mussafah M9</h2>
          <p>
            When the heat in Abu Dhabi rises, you need a cooling system that works flawlessly. 
            At **Al Dawood Central AC Works**, we provide top-tier **AC maintenance Mussafah** residents trust. 
            Our shop in **Mussafah M9** is equipped with the latest tools and genuine spare parts to fix any AC brand.
          </p>

          <div className="my-12 grid md:grid-cols-2 gap-8 not-prose">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Residential AC Services</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Keeping your home comfortable is our priority. We handle villa central AC systems, apartment split units, and regular filter cleanings in areas like **Shabiya** and **MBZ City**.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Commercial AC Maintenance</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We support businesses in **Mussafah Industrial Area** with large-scale chiller maintenance, rooftop unit repairs, and duct cleaning to ensure a productive working environment.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose Our AC Services in Abu Dhabi?</h2>
          <p>
            Finding a reliable **AC technician in Mussafah M9** can be challenging. We differentiate ourselves through:
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>24/7 Availability:</strong> AC breakdowns don't wait for business hours. We provide emergency response anytime.</li>
            <li><strong>Certified Professionals:</strong> Our team is highly trained in all major HVAC brands including Daikin, O'General, Carrier, and York.</li>
            <li><strong>Honest Pricing:</strong> We give you a clear quote before starting any work. No surprise charges.</li>
            <li><strong>Gas Refill Specialists:</strong> Low cooling? We provide R22 and R410A gas refills at competitive prices.</li>
          </ul>

          <div className="bg-blue-900 text-white p-10 rounded-3xl mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Cool with Al Dawood</h3>
            <p className="mb-8 opacity-90">Don't let a faulty AC ruin your day. Contact the Mussafah M9 experts now.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {CONTACT_NUMBERS.map(num => (
                <a key={num} href={`tel:${num}`} className="bg-blue-800 py-3 rounded-lg hover:bg-blue-700 transition-colors font-mono">
                  {num}
                </a>
              ))}
            </div>
            <p className="mt-8 text-sm opacity-75 italic text-center">Visit us at: {ADDRESS}</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ACRepairLanding;

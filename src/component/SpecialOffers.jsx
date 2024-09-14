import React from 'react';
import './styles/SpecialOffers.css'; 

export default function SpecialOffers() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-green-500 py-8 w-[85%] rounded-lg shadow-lg mx-auto mt-12 sm:mt-15 md:mt-8 lg:mt-6">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-white glowing-text">Our Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-opacity duration-1000 opacity-0 animate-fadeIn">
            <h3 className="text-xl font-semibold mb-2">Monthly Offer</h3>
            <p className="text-gray-700 mb-4">Buy one main meal and get another one free. Don’t miss this opportunity!</p>
            <span className="block bg-yellow-300 text-gray-800 text-center py-2 px-4 rounded-lg">Discount Code: FREEBIE</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-opacity duration-1000 opacity-0 animate-fadeIn">
            <h3 className="text-xl font-semibold mb-2">20% Off First Order</h3>
            <p className="text-gray-700 mb-4">Use the discount code: WELCOME20 at checkout to get 20% off your first order.</p>
            <span className="block bg-yellow-300 text-gray-800 text-center py-2 px-4 rounded-lg">Discount Code: WELCOME20</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-opacity duration-1000 opacity-0 animate-fadeIn">
            <h3 className="text-xl font-semibold mb-2">Christmas Offer</h3>
            <p className="text-gray-700 mb-4">Get 25% off any order during the Christmas season. Use the discount code below.</p>
            <span className="block bg-yellow-300 text-gray-800 text-center py-2 px-4 rounded-lg">Discount Code: XMAS25</span>
          </div>
        </div>
      </div>
    </section>
  );
}

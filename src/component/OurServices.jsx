import React from 'react';
import { FaUtensils, FaPizzaSlice, FaWineGlassAlt, FaIceCream } from 'react-icons/fa';
import './styles/OurServices.css'; 

export default function OurServices() {
  return (
    <section className="py-12 px-4 bg-gradient-to-r from-gray-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white glowing-text text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
{/* Service 1: Eating */}
          <div className="group flex flex-col items-center p-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg shadow-lg text-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <FaUtensils className="text-5xl text-white mb-4 transition-transform duration-300 ease-in-out group-hover:rotate-12" />
            <h2 className="text-2xl font-bold mb-4 text-white">Dining Experience</h2>
            <p className="text-white">
              Enjoy a delightful dining experience with our exquisite menu and excellent service.
            </p>
          </div>

{/*Service 2: Pizza */}
<div className="group flex flex-col items-center p-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg shadow-lg text-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <FaPizzaSlice className="text-5xl text-white mb-4 transition-transform duration-300 ease-in-out group-hover:rotate-12" />
            <h2 className="text-2xl font-bold mb-4 text-white">Pizza Specials</h2>
            <p className="text-white">
              Savor our special pizza recipes made with fresh ingredients.
            </p>
          </div>

{/* Service 3: Drinks */}
<div className="group flex flex-col items-center p-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg shadow-lg text-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <FaWineGlassAlt className="text-5xl text-white mb-4 transition-transform duration-300 ease-in-out group-hover:rotate-12" />
            <h2 className="text-2xl font-bold mb-4 text-white">Drinks & Beverages</h2>
            <p className="text-white">
              Explore our selection of fine wines and creative cocktails.
            </p>
          </div>

{/* Service 4: Desserts */}
<div className="group flex flex-col items-center p-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg shadow-lg text-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <FaIceCream className="text-5xl text-white mb-4 transition-transform duration-300 ease-in-out group-hover:rotate-12" />
            <h2 className="text-2xl font-bold mb-4 text-white">Desserts</h2>
            <p className="text-white">
              Treat yourself to our delicious desserts and sweet treats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

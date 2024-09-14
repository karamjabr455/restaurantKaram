import React from 'react';

function ContactUs() {
  return (
    <div className="contact-us p-6 bg-gray-800 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-white mb-8">Contact Us</h2>
      
{/* Contact form */}
<div className="w-full max-w-lg">
        <form className="contact-form bg-gradient-to-r from-blue-500 to-green-500 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-2 mt-2 border-b-2 border-gray-300 focus:border-blue-500 bg-transparent outline-none transition duration-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-2 mt-2 border-b-2 border-gray-300 focus:border-blue-500 bg-transparent outline-none transition duration-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input 
              type="tel" 
              placeholder="Your Phone Number" 
              className="w-full p-2 mt-2 border-b-2 border-gray-300 focus:border-blue-500 bg-transparent outline-none transition duration-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea 
              placeholder="Your Message" 
              className="w-full p-2 mt-2 border-b-2 border-gray-300 focus:border-blue-500 bg-transparent outline-none transition duration-300"
              rows="4"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-4 hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

{/* Contact information */}
      <div className="contact-info mt-8 text-white text-center">
        <h3 className="text-2xl font-semibold mb-2">Our Contact Information</h3>
        <p><strong>Address:</strong> Syria Damascus, Food City, FC 12345</p>
        <p><strong>Phone:</strong> 0996369002</p>
        <p><strong>Email:</strong> abua33012@gmail.com</p>
        <p><strong>Working Hours:</strong> Mon - Fri: 9:00 AM - 6:00 PM</p>
      </div>

{/* social media sites */}
<div className="social-media mt-6 text-center">
        <h3 className="text-2xl font-semibold text-white mb-2">Follow Us</h3>
        <div className="flex justify-center space-x-4">
          <a href="#" className="glowing-text hover:text-blue-700 transition duration-300">Facebook</a>
          <a href="#" className="glowing-text hover:text-blue-600 transition duration-300">Twitter</a>
          <a href="#" className="glowing-text hover:text-pink-800 transition duration-300">Instagram</a>
          <a href="#" className="glowing-text hover:text-blue-800 transition duration-300">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

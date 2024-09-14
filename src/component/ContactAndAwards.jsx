import React, { useState } from 'react';

// Import image
import certificateImage from '../image/certificate.png';

export default function ContactAndAwards() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add here the code to send data if you are using an email sending service
    console.log('Form Data:', formData);
    alert('Your message has been sent successfully!');
  };

  return (
    <section className="py-12 px-4 bg-gradient-to-r from-gray-900 via-black to-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Awards Section */}
        <div className="flex flex-col items-center p-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-white">Quality Certificates</h2>
          <p className="text-white mb-4">
            We are proud to hold the following certificates ensuring the quality of our services and dishes.
          </p>
          <img
            src={certificateImage}
            alt="Quality Certificate"
            className="w-full h-auto max-w-xs mb-4"
          />
          <ul className="list-disc list-inside text-white">
            <li>Global Food Quality Certification</li>
            <li>Best Restaurant Award 2023</li>
            <li>Food Safety Certificate</li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col items-center p-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
          <p className="text-white mb-4">
            If you have any inquiries or would like to book a table, please don't hesitate to contact us using the form below.
          </p>
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white mb-2">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white mb-2">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-white mb-2">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                rows="4"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-400 text-zinc-800 hover:bg-yellow-300 py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-110"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

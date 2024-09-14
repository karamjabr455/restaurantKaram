import React from 'react';
import Footer from '../component/Footer';
import certificateImage from '../image/certificate.png';


function About() {
  return (
    <>
{/* Our Story section */}
<div className="about-intro py-6 px-4 mt-1 shadow-lg rounded-lg bg-gradient-to-r from-blue-500 to-green-500">
        <h2 className="text-3xl font-bold glowing-text">About Us</h2>
        <p className="mt-4 text-white">
        Welcome to Karam Restaurant. We are committed to providing the best delicious meals with high quality. Our mission is customer satisfaction.        </p>
      </div>

{/* Our Story section */}      <div className="our-story py-6 px-4 mt-4 shadow-lg rounded-lg bg-gradient-to-r from-blue-500 to-green-500">
        <h3 className="text-2xl font-semibold glowing-text">Our Story</h3>
        <p className="mt-2 text-white">
        Our journey began in 2015 with a simple dream of providing delicious, high-quality meals at affordable prices. From that moment, we faced great challenges, but with team spirit and hard work, we were able to achieve tangible successes and expand the scope of our services. Today, we are proud to be a part of our customers’ lives, We continue to innovate to always provide the best.
        </p>
      </div>

{/* Timeline section */}
      <div className="timeline py-6 px-4 mt-4 shadow-lg rounded-lg bg-gradient-to-r from-blue-500 to-green-500">
        <h3 className="text-2xl font-semibold glowing-text">Timeline</h3>
        <ul className="mt-4 text-white">
          <li className="mb-2">
            <span className="font-bold">[2015]:</span> [ Establishing the restaurant with the aim of providing innovative solutions in the field of cooking.]
          </li>
          <li className="mb-2">
            <span className="font-bold">[2018]:</span> [The restaurant received the first award for excellence in the field of restaurants and expanding the scope of services.]
          </li>
          <li className="mb-2">
            <span className="font-bold">[2024]:</span> [Celebrating the 10th anniversary of the company’s founding and achieving more than [10] achievements and awards.]
          </li>
        </ul>
      </div>

{/* Achievements and Awards section */}
<div className="achievements py-6 px-4 mt-4 shadow-lg rounded-lg bg-gradient-to-r from-blue-500 to-green-500">
  <h3 className="text-2xl font-semibold glowing-text">Achievements and Awards</h3>
  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <div className="achievement-item bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
      <img 
        src={certificateImage}
        alt="Award Certificate" 
        className="w-100% h-40 object-cover rounded-lg mb-2" 
      />
      <h4 className="text-xl font-semibold text-gray-800 text-center">Quality Certificates</h4>
      <p className="text-gray-600 text-center">Quality Certificate

Global Food Quality Certification</p>
    </div>
{/* Achievements and Awards section */}
<div className="achievement-item bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
      <img 
        src={certificateImage}
        alt="Award Certificate" 
        className="w-100% h-40 object-cover rounded-lg mb-2" 
      />
      <h4 className="text-xl font-semibold text-gray-800 text-center">Quality Certificates</h4>
      <p className="text-gray-600 text-center">Quality Certificate

Global Food Quality Certification</p>
    </div>
{/* Achievements and Awards section */}
<div className="achievement-item bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
      <img 
        src={certificateImage}
        alt="Award Certificate" 
        className="w-100% h-40 object-cover rounded-lg mb-2" 
      />
      <h4 className="text-xl font-semibold text-gray-800 text-center">Quality Certificates</h4>
      <p className="text-gray-600 text-center">Quality Certificate

Global Food Quality Certification</p>
    </div>
  </div>
</div>


    

{/* footer */}
<div className="mt-8">
        <Footer />
      </div>
    </>
  );
}

export default About;

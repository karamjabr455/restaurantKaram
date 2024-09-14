import React from 'react';
import videoSrc from '../video/Yellow and White Cooking Food YouTube Video Intro.mp4'; 

export default function WelcomeBanner() {
  return (
    <div className="relative overflow-hidden w-[90%] mx-auto mt-8 h-[calc(100vh-6rem)] max-w-7xl rounded-lg shadow-lg">
{/* video */}
<video
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        autoPlay
        muted
        loop
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 bg-gradient-to-r from-blue-500 to-green-500 text-white py-6 px-4 md:px-6 lg:px-8 text-center rounded-lg">
        <p className="font-bold text-xl md:text-2xl mb-2">
          🌟 Welcome to our wonderful restaurant! 🌟
        </p>
        <p className="text-base md:text-lg">
          We are here to provide you with the best dining experience with amazing flavors and warm service. Enjoy 20% off your first order using the discount code: <strong>WELCOME20</strong>
        </p>
      </div>
    </div>
  );
}

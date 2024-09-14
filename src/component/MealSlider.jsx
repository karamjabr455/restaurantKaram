import React from 'react';
import Slider from 'react-slick';
// Import images
import mealImage1 from '../image/1.png';
import mealImage2 from '../image/2.png';
import mealImage3 from '../image/3.png';

const meals = [
  { id: 1, name: 'Kwek-Kwek', image: mealImage1 },
  { id: 2, name: 'Barbeque', image: mealImage2 },
  { id: 3, name: 'Banana Que', image: mealImage3 },
  

];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0',
  autoplay: true, // Activate autoplay

  autoplaySpeed: 3000, // Delay time between switches (in milliseconds)

};

export default function MealSlider() {
  return (
    <section className="py-12 px-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">Featured Meals</h2>
      <div className="overflow-hidden"> {/* To avoid accidental scrolling */}

        <Slider {...settings} className="relative">
          {meals.map(meal => (
            <div
              key={meal.id}
              className="flex flex-col items-center px-4"
            >
              <div className="relative w-full h-46 overflow-hidden rounded-full">
                <img
                  src={meal.image}
                  alt={meal.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{meal.name}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

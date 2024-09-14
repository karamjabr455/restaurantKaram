import React, { useEffect, useState } from 'react';
import { FaNewspaper } from 'react-icons/fa';

const articles = [
    {
      id: 1,
      title: 'Latest Special Offer: Elegant Dinner Experience',
      content: 'Enjoy a luxurious dining experience with our special menu available for two weeks only. Choose from our signature dishes prepared by our expert chefs. Book your table now for an unforgettable dining experience!',
      imageUrl: 'https://via.placeholder.com/600x400?text=Elegant+Dinner+Experience'
    },
    {
      id: 2,
      title: 'New Branch Opening in the City',
      content: 'We are excited to announce the opening of our new branch in the heart of the city! Join us for the grand opening event and enjoy special offers and a fantastic dining experience. We look forward to seeing you at the new location.',
      imageUrl: 'https://via.placeholder.com/600x400?text=New+Branch+Opening'
    },
    {
      id: 3,
      title: 'Restaurant Wins Best Restaurant Award for 2024',
      content: 'Our restaurant has won the "Best Restaurant of the Year 2024" award at the local awards ceremony. Thank you for your continued support! We are committed to providing the best dining experience for you.',
      imageUrl: 'https://via.placeholder.com/600x400?text=Best+Restaurant+Award'
    },
    {
      id: 4,
      title: 'Sharing Popular Recipes from Our Menu',
      content: 'Want to try our delicious recipes at home? Check out the recipes for some of our signature dishes that can be easily prepared. Follow us for exclusive recipes and cooking tips.',
      imageUrl: 'https://via.placeholder.com/600x400?text=Popular+Recipes'
    },
    {
      id: 5,
      title: 'New Healthy Menu Items Available',
      content: 'We now offer a new healthy menu featuring nutrient-rich and fresh dishes. Come and enjoy delicious and healthy food that suits all tastes.',
      imageUrl: 'https://via.placeholder.com/600x400?text=Healthy+Menu'
    }
  ];

export default function NewsAndUpdates() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
    }, 12000); // Change article every 12 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 px-4  bg-gradient-to-r from-gray-900 via-black to-gray-800">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-white text-center mb-8 glowing-text">Latest News & Updates</h2><div className="relative">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0'
              }`}
            >
              <div className="p-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg shadow-lg">
                <FaNewspaper className="text-5xl text-white mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">{article.title}</h3>
                <p className="text-white">{article.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

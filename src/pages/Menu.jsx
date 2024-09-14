// Menu.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '../component/Footer';


import CaesarSaladImg from './image/229063-Classic-Restaurant-Caesar-Salad-ddmfs-4x3-231-89bafa5e54dd4a8c933cf2a5f9f12a6f.jpg';
import TomatoSoup from './image/277311spicy-fresh-tomato-soupFranceC4x3-56454ad082214f33960f62665fc8c169.jpg';
import Bruschetta from './image/Bruschetta-with-Mozzarella-SQUARE3.jpg';
import StuffedMushrooms from './image/stuffed-mushrooms-lead-65202691734ba.jpg';
import GrilledChicken from './image/Grilled-Chicken-Overhead.jpg';
import SpaghettiBolognese from './image/Spaghetti-Bolognese-square-FS-0204.jpg';
import BeefStroganoff from './image/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__12__20150110-beef-stroganoff-food-lab-28-c02205e4bcc64a1bb5.jpg';

import VegetableStirFry from './image/images.jfif';

import FrenchFries  from './image/depositphotos_144857921-stock-photo-delicious-french-fries.jpg';
import SteamedVegetables  from './image/hero.jpg';
import GarlicMashedPotatoes  from './image/roasted-garlic-mashed-potatoes-5_191119_090512.jpg';

import RicePilaf  from './image/20220627-RICEPILAF-ANDREWJANJIGIAN-Hero-850fb3b67ef84859a1cb8bc687e6e198.jfif';
import RicePiChocolateCakelaf  from './image/IMG_4117-feature.jpg';
import IceCream from './image/homemade-ice-cream.jpg';
import ApplePie from './image/images (1).jfif';
import Cheesecake from './image/images (2).jfif';
import FreshJuice from './image/istockphoto-487402642-612x612.jpg';
import Coffee from './image/flat-white-3402c4f.jpg';
import Tea from './image/Tea-thumb.jpg';
import Smoothie from './image/Blueberry-smoothie-573aa19.jpg';
import FamilyCombo from './image/bc4a2ae9b4e7461a869d673af6a0d275.avif';
import CouplesDelight from './image/couples-delight.jpg';
import ChickenNuggets from './image/ChickenNuggets.webp';
import MiniPizza from './image/istockphoto-1221018858-612x612.jpg';
import MacandCheese from './image/baked-mac-and-cheese-featured.jpg';
import FruitCup from './image/Tropical-Fruit-Cups-picture.jpg';
import VeggieBurger from './image/20231204-SEA-VeganBurger-FredHardy-00-dbf603c78b694bfd99489b85ab44f4c4.jpg';
import VeganPasta from './image/images (3).jfif';
import StuffedBellPeppers from './image/Stuffed-Bell-Peppers-f.webp';
import Chickpea from './image/how-to-cook-chickpeas-21.jpg';
























export default function Menu() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [filter, setFilter] = useState('all'); // 'all' to display all meals


    

   


    const handleImageClick = (image) => {
      setSelectedImage(image);
    };
  
    const handleCloseModal = () => {
      setSelectedImage(null);
    };
  const menuSections = [
    {
      id: 1,
      title: 'Appetizers',
      items: [
        { 
          name: 'Caesar Salad', 
          description: 'Crispy romaine lettuce with Caesar dressing, croutons, and Parmesan.', 
          price: '$8.99',
          image: CaesarSaladImg,

          ingredients: [
            { name: 'Romaine Lettuce', quantity: '1 head' },
            { name: 'Caesar Dressing', quantity: '3 tbsp' },
            { name: 'Croutons', quantity: '1/2 cup' },
            { name: 'Parmesan Cheese', quantity: '1/4 cup' }
          ]
        },
        { 
          name: 'Tomato Soup', 
          description: 'Creamy tomato soup with a hint of basil.', 
          price: '$6.99',
          image: TomatoSoup,

          ingredients: [
            { name: 'Tomatoes', quantity: '6 large' },
            { name: 'Basil', quantity: '1 tbsp' },
            { name: 'Cream', quantity: '1/2 cup' },
            { name: 'Onion', quantity: '1 medium' }
          ]
        },
        { 
          name: 'Bruschetta', 
          description: 'Toasted bread topped with fresh tomatoes, basil, and garlic.', 
          price: '$7.99',
         image: Bruschetta,

          ingredients: [
            { name: 'Bread', quantity: '4 slices' },
            { name: 'Tomatoes', quantity: '2 large' },
            { name: 'Basil', quantity: '1/4 cup' },
            { name: 'Garlic', quantity: '1 clove' }
          ]
        },
        { 
          name: 'Stuffed Mushrooms', 
          description: 'Mushrooms filled with a savory cheese and herb mixture.', 
          price: '$9.49',
          image: StuffedMushrooms,

          ingredients: [
            { name: 'Mushrooms', quantity: '12 large' },
            { name: 'Cream Cheese', quantity: '1/2 cup' },
            { name: 'Parmesan Cheese', quantity: '1/4 cup' },
            { name: 'Herbs', quantity: '2 tbsp' }
          ]
        },
      ],
    },
    {
      id: 2,
      title: 'Main Courses',
      items: [
        { 
          name: 'Grilled Chicken', 
          description: 'Juicy grilled chicken served with vegetables.', 
          price: '$14.99',
          image: GrilledChicken,
          ingredients: [
            { name: 'Chicken Breast', quantity: '2 pieces' },
            { name: 'Olive Oil', quantity: '2 tbsp' },
            { name: 'Garlic', quantity: '2 cloves' },
            { name: 'Mixed Vegetables', quantity: '1 cup' }
          ]
        },
        { 
          name: 'Spaghetti Bolognese', 
          description: 'Classic spaghetti with rich Bolognese sauce.', 
          price: '$12.99',
          image: SpaghettiBolognese,
          ingredients: [
            { name: 'Spaghetti', quantity: '200g' },
            { name: 'Ground Beef', quantity: '300g' },
            { name: 'Tomato Sauce', quantity: '1 cup' },
            { name: 'Onion', quantity: '1 medium' },
            { name: 'Garlic', quantity: '2 cloves' },
            { name: 'Olive Oil', quantity: '2 tbsp' }
          ]
        },
        { 
          name: 'Beef Stroganoff', 
          description: 'Tender beef in a creamy mushroom sauce served over noodles.', 
          price: '$16.99',
          image:BeefStroganoff,
          ingredients: [
            { name: 'Beef', quantity: '300g' },
            { name: 'Mushrooms', quantity: '1 cup' },
            { name: 'Cream', quantity: '1/2 cup' },
            { name: 'Egg Noodles', quantity: '200g' }
          ]
        },
        { 
          name: 'Vegetable Stir-Fry', 
          description: 'A colorful mix of stir-fried vegetables with a savory sauce.', 
          price: '$13.99',
          image:VegetableStirFry,
          ingredients: [
            { name: 'Bell Peppers', quantity: '2' },
            { name: 'Broccoli', quantity: '1 cup' },
            { name: 'Carrots', quantity: '1 cup' },
            { name: 'Soy Sauce', quantity: '2 tbsp' }
          ]
        },
      ],
    },
    {
      id: 3,
      title: 'Side Dishes',
      items: [
        { 
          name: 'French Fries', 
          description: 'Crispy golden fries.', 
          price: '$3.99',
          image: FrenchFries,
          ingredients: [
            { name: 'Potatoes', quantity: '4 large' },
            { name: 'Salt', quantity: '1 tsp' },
            { name: 'Oil', quantity: '2 cups' }
          ]
        },
        { 
          name: 'Steamed Vegetables', 
          description: 'Freshly steamed seasonal vegetables.', 
          price: '$4.99',
          image: SteamedVegetables,
          ingredients: [
            { name: 'Mixed Vegetables', quantity: '1 cup' },
            { name: 'Salt', quantity: '1/2 tsp' },
            { name: 'Butter', quantity: '1 tbsp' }
          ]
        },
        { 
          name: 'Garlic Mashed Potatoes', 
          description: 'Creamy mashed potatoes with a hint of garlic.', 
          price: '$5.49',
          image: GarlicMashedPotatoes,
          ingredients: [
            { name: 'Potatoes', quantity: '4 large' },
            { name: 'Garlic', quantity: '2 cloves' },
            { name: 'Butter', quantity: '2 tbsp' },
            { name: 'Cream', quantity: '1/4 cup' }
          ]
        },
        { 
          name: 'Rice Pilaf', 
          description: 'Fluffy rice cooked with onions and herbs.', 
          price: '$4.49',
          image: RicePilaf,
          ingredients: [
            { name: 'Rice', quantity: '1 cup' },
            { name: 'Onion', quantity: '1 small' },
            { name: 'Butter', quantity: '1 tbsp' },
            { name: 'Chicken Broth', quantity: '1 cup' }
          ]
        },
      ],
    },
    {
      id: 4,
      title: 'Desserts',
      items: [
        { 
          name: 'Chocolate Cake', 
          description: 'Rich chocolate cake with a gooey center.', 
          image:RicePiChocolateCakelaf,
          price: '$5.99',
          ingredients: [
            { name: 'Flour', quantity: '1 cup' },
            { name: 'Cocoa Powder', quantity: '1/2 cup' },
            { name: 'Sugar', quantity: '1 cup' },
            { name: 'Butter', quantity: '1/2 cup' }
          ]
        },
        { 
          name: 'Ice Cream', 
          description: 'Choice of vanilla, chocolate, or strawberry.', 
          price: '$3.99',
          image:IceCream,
          ingredients: [
            { name: 'Milk', quantity: '2 cups' },
            { name: 'Cream', quantity: '1 cup' },
            { name: 'Sugar', quantity: '3/4 cup' },
            { name: 'Flavoring', quantity: '1 tsp' }
          ]
        },
        { 
          name: 'Apple Pie', 
          description: 'Classic apple pie with a buttery crust.', 
          price: '$4.99',
          image:ApplePie,
          ingredients: [
            { name: 'Apples', quantity: '4 large' },
            { name: 'Sugar', quantity: '1/2 cup' },
            { name: 'Pie Crust', quantity: '1 package' },
            { name: 'Cinnamon', quantity: '1 tsp' }
          ]
        },
        { 
          name: 'Cheesecake', 
          description: 'Rich and creamy cheesecake with a graham cracker crust.', 
          price: '$6.49',
          image:Cheesecake,
          ingredients: [
            { name: 'Cream Cheese', quantity: '2 cups' },
            { name: 'Graham Cracker Crumbs', quantity: '1 cup' },
            { name: 'Sugar', quantity: '1/2 cup' },
            { name: 'Butter', quantity: '1/4 cup' }
          ]
        },
      ],
    },
    {
      id: 5,
      title: 'Beverages',
      items: [
        { 
          name: 'Fresh Juice', 
          description: 'Orange, apple, or mixed fruit juice.', 
          price: '$4.99',
          image: FreshJuice,
          ingredients: [
            { name: 'Oranges', quantity: '4' },
            { name: 'Apples', quantity: '4' },
            { name: 'Sugar', quantity: '2 tbsp' },
            { name: 'Water', quantity: '2 cups' }
          ]
        },
        { 
          name: 'Coffee', 
          description: 'Freshly brewed coffee.', 
          price: '$2.99',
          image:Coffee,
          ingredients: [
            { name: 'Coffee Beans', quantity: '2 tbsp' },
            { name: 'Water', quantity: '1 cup' },
            { name: 'Sugar', quantity: '1 tsp' },
            { name: 'Milk', quantity: '1/4 cup' }
          ]
        },
        { 
          name: 'Tea', 
          description: 'Selection of black, green, or herbal tea.', 
          price: '$2.49',
          image:Tea,
          ingredients: [
            { name: 'Tea Leaves', quantity: '1 tbsp' },
            { name: 'Water', quantity: '1 cup' },
            { name: 'Sugar', quantity: '1 tsp' },
            { name: 'Lemon', quantity: '1 slice' }
          ]
        },
        { 
          name: 'Smoothie', 
          description: 'Blended fruit smoothie with yogurt.', 
          price: '$5.49',
          image:Smoothie,
          ingredients: [
            { name: 'Fruit', quantity: '1 cup' },
            { name: 'Yogurt', quantity: '1/2 cup' },
            { name: 'Honey', quantity: '1 tbsp' },
            { name: 'Ice', quantity: '1/2 cup' }
          ]
        },
      ],
    },
    {
      id: 6,
      title: 'Special Offers',
      items: [
        { 
          name: 'Family Combo', 
          description: 'Includes 2 main courses, 2 side dishes, and 2 desserts.', 
          price: '$29.99',
          image:FamilyCombo,
          ingredients: [ 
            { name: 'rice', quantity: '1/2 cup' },
            { name: 'chickens', quantity: '1 tbsp' },
            { name: 'tomato', quantity: '1/2' }]
        },
        { 
          name: 'Couple’s Delight', 
          description: '2 appetizers, 2 main courses, and 2 beverages.', 
          price: '$24.99',
          image:CouplesDelight,
          ingredients: [ 
            { name: 'rice', quantity: '1/2 cup' },
            { name: 'chickens', quantity: '1 tbsp' },
            { name: 'tomato', quantity: '1/2 cup' }]
        },
      ],
    },
    {
      id: 7,
      title: 'Kids Menu',
      items: [
        { 
          name: 'Chicken Nuggets', 
          description: 'Crispy chicken nuggets with fries.', 
          price: '$6.99',
          image:ChickenNuggets,
          ingredients: [
            { name: 'Chicken Nuggets', quantity: '6 pieces' },
            { name: 'French Fries', quantity: '1 cup' },
            { name: 'Ketchup', quantity: '2 tbsp' }
          ]
        },
        { 
          name: 'Mini Pizza', 
          description: 'Small pizza with cheese and tomato sauce.', 
          price: '$5.99',
          image: MiniPizza,
          ingredients: [
            { name: 'Pizza Dough', quantity: '1 piece' },
            { name: 'Tomato Sauce', quantity: '1/4 cup' },
            { name: 'Cheese', quantity: '1/2 cup' },
            { name: 'Pepperoni', quantity: '5 slices' }
          ]
        },
        { 
          name: 'Mac and Cheese', 
          description: 'Creamy macaroni and cheese.', 
          price: '$7.49',
          image:MacandCheese,
          ingredients: [
            { name: 'Macaroni', quantity: '1 cup' },
            { name: 'Cheese Sauce', quantity: '1/2 cup' },
            { name: 'Milk', quantity: '1/4 cup' },
            { name: 'Butter', quantity: '1 tbsp' }
          ]
        },
        { 
          name: 'Fruit Cup', 
          description: 'A mix of fresh seasonal fruits.', 
          price: '$4.49',
          image: FruitCup,
          ingredients: [
            { name: 'Mixed Fruits', quantity: '1 cup' },
            { name: 'Honey', quantity: '1 tbsp' }
          ]
        },
      ],
    },
    {
      id: 8,
      title: 'Vegetarian & Vegan Options',
      items: [
        { 
          name: 'Veggie Burger', 
          description: 'Delicious veggie burger with lettuce and tomato.', 
          price: '$10.99',
          image:VeggieBurger,
          ingredients: [
            { name: 'Veggie Patty', quantity: '1 piece' },
            { name: 'Burger Bun', quantity: '1 piece' },
            { name: 'Lettuce', quantity: '1 leaf' },
            { name: 'Tomato', quantity: '1 slice' }
          ]
        },
        { 
          name: 'Vegan Pasta', 
          description: 'Pasta with tomato sauce and vegetables.', 
          price: '$11.99',
          image: VeganPasta,
          ingredients: [
            { name: 'Pasta', quantity: '200g' },
            { name: 'Tomato Sauce', quantity: '1 cup' },
            { name: 'Mixed Vegetables', quantity: '1 cup' },
            { name: 'Olive Oil', quantity: '2 tbsp' }
          ]
        },
        { 
          name: 'Stuffed Bell Peppers', 
          description: 'Bell peppers stuffed with a mix of rice and vegetables.', 
          price: '$12.49',
          image: StuffedBellPeppers,

          ingredients: [
            { name: 'Bell Peppers', quantity: '4' },
            { name: 'Rice', quantity: '1 cup' },
            { name: 'Mixed Vegetables', quantity: '1/2 cup' },
            { name: 'Tomato Sauce', quantity: '1/2 cup' }
          ]
        },
        { 
          name: 'Chickpea Salad', 
          description: 'A refreshing salad with chickpeas, cucumbers, and tomatoes.', 
          price: '$9.99',
          image:Chickpea,
          ingredients: [
            { name: 'Chickpeas', quantity: '1 cup' },
            { name: 'Cucumber', quantity: '1' },
            { name: 'Tomatoes', quantity: '2' },
            { name: 'Lemon Juice', quantity: '2 tbsp' }
          ]
        },
      ],
    },
  ];
// Filter the list based on status
  // Filter sections based on selected filter
  const filteredSections = filter === 'all'
  ? menuSections
  : menuSections.filter(section => section.title.toLowerCase() === filter);

  // Handle filter change
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
};


 
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="menu-container"
>

     <section className="py-12 px-4 bg-gradient-to-r from-gray-900 via-black to-gray-800 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 glowing-text">Our Menu</h2>

        <div className="mb-4 ">
                <label htmlFor="filter" className="mr-2 glowing-text">Filter:</label>
                <select id="filter" className='bg-blue-500 glowing-text ' onChange={handleFilterChange}>
                    <option value="all">All</option>
                    <option value="appetizers">Appetizers</option>
                    <option value="main courses">Main Courses</option>
                    <option value="side dishes">Side Dishes</option>
                    <option value="desserts">Desserts</option>
                    <option value="beverages">Beverages</option>
                    <option value="special offers">Special Offers</option>
                    <option value="kids menu">Kids Menu</option>
                    <option value="vegetarian & vegan options">Vegetarian & Vegan Options</option>
                </select>
            </div>

{/* Display meals based on filter */}
{filteredSections.map((section) => (
          <div key={section.id} className="mb-8">
            <h3 className="text-3xl font-semibold glowing-text mb-4">{section.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.items.map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-500 to-green-500 p-6 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold mb-2 text-white">{item.name}</h4>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-64 h-64 object-cover rounded-lg mx-auto mb-4 cursor-pointer"
                    onClick={() => handleImageClick(item.image)}
                  />
                  <p className="text-gray-300 mb-2">{item.description}</p>
                  <span className="text-lg font-semibold text-green-600">{item.price}</span>

{/* Table of quantities and ingredients */}

<div className="mt-4">
                    <h5 className="text-lg font-bold text-white mb-2">Ingredients:</h5>
                    <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
                      <thead className="bg-gray-800 text-white">
                        <tr>
                          <th className="py-2 px-4">Ingredient</th>
                          <th className="py-2 px-4">Quantity</th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.ingredients && item.ingredients.map((ingredient, index) => (
                          <tr key={index} className="border-t">
                            <td className="py-2 px-4 text-gray-700">{ingredient.name}</td>
                            <td className="py-2 px-4 text-gray-700">{ingredient.quantity}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

{/* Modal to display the large image */}

{selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="relative">
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 text-white text-2xl bg-red-500 rounded-full p-2"
              >
                ×
              </button>
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="w-full max-w-3xl h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
    <div className="mt-8">
                  <Footer />
                </div>




    </motion.div>

  );
};

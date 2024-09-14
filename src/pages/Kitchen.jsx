import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import ClipLoader from 'react-spinners/ClipLoader'; // Import the animation component


const RecipeMixer = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false); // Loading status

  const [selectedTimer, setSelectedTimer] = useState(null); // Timer status

  const [timeRemaining, setTimeRemaining] = useState(0); // Remaining time

  const [intervalId, setIntervalId] = useState(null); //Interval ID

// Component options
  const ingredientsOptions = [
    { value: 'chicken', label: 'Chicken' },
    { value: 'tomato', label: 'Tomato' },
    { value: 'cheese', label: 'Cheese' },
    { value: 'onion', label: 'Onion' },
    { value: 'garlic', label: 'Garlic' },
    { value: 'beef', label: 'Beef' },
    { value: 'pepper', label: 'Pepper' },
    { value: 'mushroom', label: 'Mushroom' },
    { value: 'spinach', label: 'Spinach' },
    { value: 'potato', label: 'Potato' },
    { value: 'carrot', label: 'Carrot' },
    { value: 'lettuce', label: 'Lettuce' },
    { value: 'zucchini', label: 'Zucchini' },
    { value: 'pasta', label: 'Pasta' },
    { value: 'rice', label: 'Rice' },
    { value: 'egg', label: 'Egg' },
    { value: 'fish', label: 'Fish' },
    { value: 'basil', label: 'Basil' },
    { value: 'broccoli', label: 'Broccoli' },
    { value: 'bell pepper', label: 'Bell Pepper' },
    { value: 'corn', label: 'Corn' },
    { value: 'avocado', label: 'Avocado' },
    { value: 'shrimp', label: 'Shrimp' },
    { value: 'cucumber', label: 'Cucumber' },
    { value: 'olive oil', label: 'Olive Oil' },
    { value: 'milk', label: 'Milk' },
    { value: 'yogurt', label: 'Yogurt' },
    { value: 'cream', label: 'Cream' },
    { value: 'flour', label: 'Flour' },
    { value: 'sugar', label: 'Sugar' },
    { value: 'salt', label: 'Salt' },
    { value: 'butter', label: 'Butter' },
    { value: 'honey', label: 'Honey' },
    { value: 'nuts', label: 'Nuts' }
  ];

// Cooking times for each type of meal in seconds
const cookingTimes = {
  'pasta': 600, // 10 minutes
  'beef': 1800, // 30 minutes
  'bread': 2400, // 40 minutes
  'chicken': 1200, // 20 minutes
  'fish': 900, // 15 minutes
  'rice': 600, // 10 minutes
  'egg': 300, // 5 minutes
  'shrimp': 300, // 5 minutes
  'vegetables': 600, // 10 minutes
  'pizza': 900, // 15 minutes
  'lasagna': 2400, // 40 minutes
  'soup': 1200 // 20 minutes
};
// Call API to fetch recipes based on selected ingredients
const fetchRecipes = async () => {
    const ingredients = selectedIngredients.map((ingredient) => ingredient.value).join(',');
    setLoading(true); // Activate the upload status
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=8&apiKey=d9a6896d38d84e389c0368d2f91bf5c1`
      );
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
    setLoading(false); // Stop loading status

  };

// Start the timer based on the meal type
const startTimer = (type) => {
    const time = cookingTimes[type];
    if (time) {
      setSelectedTimer(type);
      setTimeRemaining(time);

// Set up the refresh interval every second
const id = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(id);
            alert(`The ${type} is done!`);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      setIntervalId(id);
    }
  };

// Stop the timer when the selection is cancelled
const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setTimeRemaining(0);
      setSelectedTimer(null);
    }
  };

// Clean up when the component is unloaded
useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <div className="recipe-mixer p-6 bg-gray-800 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-white">Recipe Mixer</h2>
      
{/* input components */}
<Select
        isMulti
        options={ingredientsOptions}
        value={selectedIngredients}
        onChange={setSelectedIngredients}
        placeholder="Select your ingredients"
        className="text-black mb-4"
      />
      
{/* button to search for recipes */}
<button 
        onClick={fetchRecipes} 
        className="bg-yellow-400 text-zinc-800 hover:bg-yellow-300 mt-4 px-4 py-2 rounded"
      >
        Get Recipes
      </button>

{/* Show recipes */}
<div className="recipes-list mt-6">
        {loading ? ( // Show animation when waiting for data

          <div className="flex justify-center items-center">
            <ClipLoader color={"#ffffff"} loading={loading} size={50} />
            <span className="ml-4 text-white">Fetching recipes...</span>
          </div>
        ) : recipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="recipe-item bg-gray-700 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-white truncate">{recipe.title}</h3>
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="w-full h-40 object-cover mt-2 rounded-lg" 
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white">No recipes found for selected ingredients.</p>
        )}
      </div>

{/*temporary section*/}
<div className="timer-section mt-6">
        <h3 className="text-xl font-semibold text-white mb-2">Cooking Timer</h3>
        
        <div className="timer-controls flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => startTimer('pasta')}
            className="bg-blue-500 text-white px-4 py-2 rounded flex-1 sm:flex-none"
          >
            Start Pasta Timer
          </button>
          <button
            onClick={() => startTimer('beef')}
            className="bg-green-500 text-white px-4 py-2 rounded flex-1 sm:flex-none"
          >
            Start Beef Timer
          </button>
          <button
            onClick={() => startTimer('bread')}
            className="bg-red-500 text-white px-4 py-2 rounded flex-1 sm:flex-none"
          >
            Start Bread Timer
          </button>
          <button
            onClick={() => startTimer('chicken')}
            className="bg-yellow-500 text-white px-4 py-2 rounded flex-1 sm:flex-none"
          >
            Start Chicken Timer
          </button>
          <button
            onClick={() => startTimer('fish')}
            className="bg-teal-500 text-white px-4 py-2 rounded flex-1 sm:flex-none"
          >
            Start Fish Timer
          </button>
          <button
            onClick={() => startTimer('rice')}
            className="bg-purple-500 text-white px-4 py-2 rounded flex-1 sm:flex-none"
          >
            Start Rice Timer
          </button>
          <button
            onClick={() => startTimer('egg')}
            className="bg-orange-500 text-white px-4 py-2 rounded flex-1 sm:flex-none"
          >
            Start Egg Timer
          </button>
          <button
            onClick={() => startTimer('shrimp')}
            className="bg-pink-500 text-white px-4 py-2 rounded flex-1 sm:flex-none"
          >
            Start Shrimp Timer
          </button>
          <button
            onClick={() => startTimer('vegetables')}
            className="bg-gray-500 text-white px-4 py-2 rounded flex-1 sm:flex-none"
          >
            Start Vegetables Timer
          </button>
          <button
            onClick={() => startTimer('pizza')}
            className="bg-indigo-500 text-white px-4 py-2 rounded flex-1 sm:flex-none"
          >
            Start Pizza Timer
          </button>
          <button
            onClick={() => startTimer('lasagna')}
            className="bg-blue-800 text-white px-4 py-2 rounded flex-1 sm:flex-none"
          >
            Start Lasagna Timer
          </button>
          <button
            onClick={() => startTimer('soup')}
            className="bg-cyan-500 text-white px-4 py-2 rounded flex-1 sm:flex-none"
          >
            Start Soup Timer
          </button>
          <button
            onClick={stopTimer}
            className="bg-gray-500 text-white px-4 py-2 rounded flex-1 sm:flex-none mt-2"
          >
            Stop Timer
          </button>
        </div>

        {selectedTimer && (
          <div className="timer-display text-white text-xl">
            <p>Timer for: {selectedTimer}</p>
            <p>Time Remaining: {Math.floor(timeRemaining / 60)}:{('0' + (timeRemaining % 60)).slice(-2)}</p>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default RecipeMixer;

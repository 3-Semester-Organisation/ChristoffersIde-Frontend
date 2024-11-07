import React, { useState } from "react";
import { Bars } from "react-loading-icons";
import { fetchRecipeByUserRequest } from "../../js/api/recipeapi.js";
import Response from "../recipebyname/Response.jsx";
import Backdrop from "../backdrop/Backdrop.jsx";
import IngredientList from "./IngredientList.jsx";
import IngredientInput from "./IngredientInput.jsx";
import Checkbox from "./Checkbox.jsx";

export default function RecipeByIngredientAndDietaryLimitations() {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [recipe, setRecipe] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  const [dietaryLimitations, setDietaryLimitations] = useState({
    Vegan: false,
    Vegetarian: false,
    "Lactose Intolerant": false,
    "Gluten Intolerant": false,
  });

  function addIngredient(ingredient) {
    if (ingredient.trim() !== "") {
      setIngredients([...ingredients, ingredient.trim()]);
    }
  }

  const handleCheckbox = (event) => {
    const { name, checked } = event.target;
    setDietaryLimitations((prevLimitations) => ({
      ...prevLimitations,
      [name]: checked,
    }));
  };

  async function handleSubmit() {
    try {
        setLoading(true);

        const dietaryLimitationsPayload = {
            vegan: dietaryLimitations["Vegan"],
            vegetarian: dietaryLimitations["Vegetarian"],
            lactoseIntolerant: dietaryLimitations["Lactose Intolerant"],
            glutenIntolerant: dietaryLimitations["Gluten Intolerant"]
        };

        const data = await fetchRecipeByUserRequest(ingredients, dietaryLimitationsPayload);
        setRecipe((JSON.parse(data.answer)));

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setVisible(true);
    }
  }

  return (
    <>
      <Backdrop />
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h1 className=" mt-10 font-semibold text-4xl">Enter ingredients.</h1>
        <div className="mt-10">
          <IngredientInput addIngredient={addIngredient} />
        </div>

        <div className="">
          <Checkbox
            handleCheckbox={handleCheckbox}
            dietaryLimitations={dietaryLimitations}
          />
        </div>

        <div className="mt-10">
          <IngredientList className="" ingredients={ingredients} />
        </div>

        <div className="mt-10">
          <button
            onClick={handleSubmit}
            className=" ml-2 mt-4 cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            disabled={loading}
          >
            {loading ? <Bars height="20px" width="46px" /> : "Submit"}
          </button>
        </div>

        <div className="mt-10">
          <div className={`fade-in ${visible ? "visible" : ""}`}>
            <Response data={recipe} />
          </div>
        </div>

        
      </div>
    </>
  );
}

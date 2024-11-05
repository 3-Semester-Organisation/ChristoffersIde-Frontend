import React, { useState } from "react";
import { Bars } from "react-loading-icons";
import { fetchRecipeByUserRequest } from "../js/api/recipeapi.js";
import Response from "./Response.jsx";
import Header from "../components/Header.jsx";
import Backdrop from "./backdrop/Backdrop.jsx";
import IngredientList from "./IngredientList.jsx";

export default function RecipeByIngredientAndDietaryLimitations() {
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [recipe, setRecipe] = useState(null);
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    const [dietaryLimitations, setDietaryLimitations] = useState({
        "Vegan": false,
        "Vegetarian": false,
        "Lactose Intolerant": false,
        "Gluten Intolerant": false,
    });

    function handleInputChange(event) {
        setNewIngredient(event.target.value);
    }

    function addIngredient(event) {
        event.preventDefault();
        setIngredients([...ingredients, newIngredient]);
        setNewIngredient("");
    }

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setDietaryLimitations((prevLimitations) => ({
            ...prevLimitations,
            [name]: checked,
        }));
    };

    async function handleSubmit() {
        try {
            setLoading(true);
            setRecipe(await fetchRecipeByUserRequest(ingredients, dietaryLimitations));
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
            setVisible(true);
        }
    }

    return (
        <>
            <Header />
            <Backdrop />
            <div className="relative mt-2 mb-10 rounded-md flex justify-center">
                <form onSubmit={addIngredient} className="flex items-center">
                    <input
                        id="ingredient"
                        name="ingredient"
                        type="text"
                        placeholder="ingredient"
                        value={newIngredient}
                        onChange={handleInputChange}
                        className="w-full rounded-md border-0 pr-20 text-gray-900 ring-1 ring-inset ring-indigo-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        style={{ height: "40px" }}
                        required
                    />
                    <button
                        type="submit"
                        className="ml-2 cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                    >
                        Add
                    </button>
                </form>
            </div>

            <div className="dietary-limitations">
                {Object.keys(dietaryLimitations).map((key) => (
                    <label key={key} className="mr-4">
                        <input
                            type="checkbox"
                            name={key}
                            checked={dietaryLimitations[key]}
                            onChange={handleCheckboxChange}
                        />
                        {key}
                    </label>
                ))}
            </div>

            <IngredientList ingredients={ingredients} />

            <div className="container mx-auto p-4">
                <div className={`fade-in ${visible ? "visible" : ""}`}>
                    <Response data={recipe} />
                </div>
            </div>


            <button
                onClick={handleSubmit}
                className="ml-2 mt-4 cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                disabled={loading}
            >
                {loading ? <Bars height="20px" width="46px" /> : "Submit"}
            </button>
        </>
    );
}

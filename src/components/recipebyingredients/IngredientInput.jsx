import React, { useState } from "react";

export default function IngredientInput( {addIngredient} ) {
  const [newIngredient, setNewIngredient] = useState("");


  const handleInputChange = (event) => {
    setNewIngredient(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addIngredient(newIngredient);
    setNewIngredient("");

  }

  return (
    <>
      <div className="relative mt-2 mb-10 rounded-md flex justify-center">
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            id="ingredient"
            name="ingredient"
            type="text"
            placeholder="Ingredient"
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
    </>
  );
}

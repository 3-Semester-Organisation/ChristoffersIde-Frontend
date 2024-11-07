import React, {useState} from "react";

export default function Checkbox({ handleCheckbox, dietaryLimitations }) {
    
  return (
    <>
        {Object.keys(dietaryLimitations).map((key) => (
          <label key={key} className="ms-2 text-sm font-medium text-gray-900 p-4">
            <input
              className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              type="checkbox"
              name={key}
              checked={dietaryLimitations[key]}
              onChange={handleCheckbox}
            />
            {key}
          </label>
        ))}
    </>
  );
}

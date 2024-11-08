import React, { useState } from "react";

export default function Checkbox({ handleCheckbox, dietaryLimitations }) {
  return (
    <div className="flex flex-wrop justify-center sm:justify-start">
      {Object.keys(dietaryLimitations).map((key) => (
        <label
          key={key}
          className="w-full sm:w-auto sm:mr-4 mb-2 sm:mb-0 text-sm flex items-center font-medium text-gray-900 p-4"
        >
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
    </div>
  );
}

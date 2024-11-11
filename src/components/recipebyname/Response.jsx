import React from "react";

export default function Response({ data }) {
  // modtager data fra parent component som prop (Dialog.jsx)

  if (!data) {
    return <></>; // return blank when no data
  }
  if (!data.ingredients) {
      return (
          <div>{data}</div>
      )
    }


  return (
    <div className="p-2 mb-80">
      <h1 className="mb-8 text-3xl font-semibold italic">{data.title}</h1>
      <p className="mb-6 text-lg font-semibold">{data.description}</p>
      <div className="border-b-2 border-gray-300 mb-10"></div>
      <div className="container mx-auto flex">
        <div className="w-2/5">
          <h2 className="text-2xl font-bold mb-5">Ingredients:</h2>
          <ul>
            {Object.entries(data.ingredients).map(([ingredient, amount]) => (
              <li className="p-2" key={ingredient}>
                <strong>{ingredient}:</strong> {amount}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/5">
          <h2 className="text-2xl font-bold mb-5">Procedure:</h2>
          <ul className="list-decimal list-inside">
            {data.instructions.map((instruction, index) => (
              <li className="p-2" key={index}>
                {instruction}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

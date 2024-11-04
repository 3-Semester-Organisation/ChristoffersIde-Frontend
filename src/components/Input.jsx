import { fetchRecipe } from "../api/recipeapi"

export default function Input() {
    return (
        <>
          <div className="relative mt-2 rounded-md shadow-sm flex justify-center">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
          />
          <button
          type="button"
          className=" cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
        >
          Submit
        </button>
          </div>
        
      </>
      
      
    )
  }
  

  
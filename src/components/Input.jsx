export default function Input() {
    return (
        <form>
        <div className="flex justify-center" >
            <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute flex items-center">
          </div>
          <input
            id="price"
            name="price"
            type="text"
            placeholder="Name"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
          />
        </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          style={{ transition: 'background-color 0.3s' }}
        >
          Submit
        </button>
        </div>
      
      </form>
    )
  }
  

  
import React, { useState } from "react";
import { Bars } from "react-loading-icons";

export default function Input({ handleFetch }) { //modtager handleFetch fra parent component (Dialog.jsx)

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false); // used for loading icon on submit

  const handleInputChange = (event) => {
    setName(event.target.value); // opdaterer state af name ved hver change
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await handleFetch(name); // kører handleFetch modtaget fra parent component (Dialog.jsx)
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative mt-2 mb-10 rounded-md flex justify-center">
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleInputChange} // sætter "name" state til indhold af input
            className="w-full rounded-md border-0 pr-20 text-gray-900 ring-1 ring-inset ring-indigo-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            style={{ height: "40px" }}
            required
          />
          <button
            type="submit"
            className="ml-2 cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            disabled={loading} // samme som nedenunder
          >
            {loading ? <Bars height="20px" width="46px" /> : "Submit"} {/* skifter mellem loading icon og submit alt efter state */}
          </button>
        </form>
      </div>
    </>
  );
}
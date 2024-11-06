import React from "react";

export default function Response({ data }) { // modtager data fra parent component som prop (Dialog.jsx)

  if (!data) {
    return <></>; // return blank when no data
  }

  return (
    <div className="mt-4 p-4 rounded-md">
      <pre className="overflow-x-auto whitespace-pre-wrap break-words">{ data }</pre> {/* sætter text til værdi af data prop */}
    </div>
  );
}
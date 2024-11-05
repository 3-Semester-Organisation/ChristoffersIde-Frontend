import React, { useEffect, useState } from "react";
import { fetchRecipeByPersonName } from "../js/api/recipeapi";
import Input from "./input";
import Response from "./Response";
import Backdrop from "./backdrop/Backdrop";


export default function Dialog() {

    // state der holder data fra fetch
    const [data, setData] = useState(null);

    // state der holder visibility af response component
    const [visible, setVisible] = useState(false);


    // vi laver fetch function her, så den kan gives videre til child component
    const handleFetch = async (name) => {
        const data = await fetchRecipeByPersonName(name);
        setData(data.answer);
        setVisible(true);
    }

    // sætter response til at være synlig når data ændrer state
    useEffect(() => {
        if (data) {
            setVisible(true);
        }
    }, [data]); // specify at det er data vi observerer

    return (
        <>
        <Backdrop />
        
        <div className="container mx-auto p-4 max-w-lg">

            <Input handleFetch={handleFetch}/> {/* giver handleFetch funktionen videre til Input component */}

        </div>
        <div className="container mx-auto p-4" >
            <div className={`fade-in ${visible ? "visible" : ""}`}>

                <Response data={data}/> {/* giver "data" state videre som prop til Response component  */}

            </div>
        </div>
        
        
        </>
    )
}
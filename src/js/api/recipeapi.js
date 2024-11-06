import {checkHttpErrors, makeOption} from "../util.js";

const HOST = "http://localhost:8080/";
const RECIPE_BY_PERSON_NAME_URL = "recipe-by-individual";
const RECIPE_BY_USER_SPECIFICATION_URL = "recipe-by-specification";

export async function fetchRecipeByPersonName(name) {
    try {
        const response = await fetch(HOST + RECIPE_BY_PERSON_NAME_URL + "?name=" + name);
        await checkHttpErrors(response);
        return await response.json();
    }catch (error) {
        console.error(error);
        return error;

    }
}



export async function fetchRecipeByUserRequest(ingredientList, dietaryRequirements) {

    const userSpecifications = {
        ingredients: ingredientList,
        dietaryRequirements: dietaryRequirements
    }

    const getOption = makeOption("POST", userSpecifications);
    try {
        const response = await fetch(HOST + RECIPE_BY_USER_SPECIFICATION_URL, getOption);
        checkHttpErrors(response);
        return await response.json();

    } catch (error) {
        console.error(error);
    }
}
const HOST = "http://localhost:8080/";
const RECIPE_URL = "recipe-by-individual";

export async function fetchRecipe(name) {
    try {
        const response = await fetch(HOST + RECIPE_URL + "?name=" + name);
        return await response.json();
    }catch (error) {
        console.error(error);
    }
}
const RECIPE_URL = "recipe-by-individual";

export async function fetchRecipe(name) {
    try {
        const response = await fetch(RECIPE_URL + "?name=" + name);
        return await response.json();
    }catch (error) {
        console.error(error);
    }
}
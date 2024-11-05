export default function IngredientList({ ingredients }) {
    return (
        <>
            <h2>Ingredients</h2>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{"- " + ingredient}</li>
                ))}
            </ul>
        </>
    );
}

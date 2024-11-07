export default function IngredientList({ ingredients }) {
    return (
        <>
            <h1 className="text-2xl font-semibold mb-5" >Ingredients</h1>
            <ul className="list-disc list-inside" >
                {ingredients.map((ingredient, index) => (
                    <li className="p-2 flex flex-col" key={index}>
                        <strong></strong>{"" + ingredient}</li>
                ))}
            </ul>
        </>
    );
}
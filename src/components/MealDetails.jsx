// <div className="mockup-window border border-base-300 w-full">
//     <div className="grid place-content-center border-t border-base-300 h-80">
//         Hello!
//     </div>
// </div>


 const MealDetails = ({ meal, onClose }) => {
    return ( <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg w-full max-w-4xl max-h-[80%] overflow-y-auto relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                >
                    Close
                </button>
                <h1 className="text-2xl font-bold mb-4">{meal.strMeal}</h1>
                <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-full mb-4"
                />
                <p>
                    <strong>Category:</strong> {meal.strCategory}
                </p>
                <p>
                    <strong>Area:</strong> {meal.strArea}
                </p>
                <p>
                    <strong>Instructions:</strong>
                </p>
                <p>{meal.strInstructions}</p>
                <p>
                    <strong>Ingredients:</strong>
                </p>
                <ul>
                    {Object.keys(meal)
                        .filter(
                            (key) => key.includes('strIngredient') && meal[key]
                        )
                        .map((key, index) => (
                            <li key={index}>{meal[key]}</li>
                        ))}
                </ul>
            </div>
        </div>
    )
}
export default MealDetails

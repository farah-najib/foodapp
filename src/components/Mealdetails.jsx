const MealDetails = ({ meal }) => {
    return (
        <dialog id="meal_modal" className="modal">
            <div className="modal-box w-full max-w-4xl">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                </form>

                {/* Meal Details */}

                <h1 className="badge badge-secondary  ">
                    Category:{meal.strCategory}
                </h1>
                <h1 className="badge badge-secondary">Area: {meal.strArea}</h1>
                <h1 className="text-2xl font-bold mb-4 text-center">
                    {meal.strMeal}
                </h1>

                <div className="flex flex-row">
                    <div className="basis-1/3">
                        <p className="mt-2">
                            <strong>Ingredients:</strong>
                        </p>
                        <ul className="list-disc ml-6">
                            {Object.keys(meal)
                                .filter(
                                    (key) =>
                                        key.includes('strIngredient') &&
                                        meal[key]
                                )
                                .map((key, index) => (
                                    <li key={index}>{meal[key]}</li>
                                ))}
                        </ul>
                    </div>
                    <div className="basis-2/3">
                        <img
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                            className="aspect-3/2 object-cover"
                        />
                    </div>
                </div>

                <p className="mt-2">
                    <strong>Instructions:</strong>
                </p>
                <p>{meal.strInstructions}</p>
            </div>
        </dialog>
    )
}

export default MealDetails

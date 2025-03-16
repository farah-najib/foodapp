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

                <div className="flex h-10">
                    <div className="w-20">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
                            />
                        </svg>
                        {meal.strArea}
                    </div>
                    <div className="w-20 ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 6h.008v.008H6V6Z"
                            />
                        </svg>

                        {meal.strCategory}
                    </div>
                </div>
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

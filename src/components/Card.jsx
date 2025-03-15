

const Card = ({ meal, onShowRecipe, onToggleFavorite, isFavorite }) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img src={meal.strMealThumb} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{meal.strMeal}</h2>
                <p>
                    {meal.strCategory}, {meal.strArea}, {meal.strTags}
                </p>
                <div className="card-actions justify-end">
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            console.log(meal)
                            onShowRecipe(meal)
                        }}
                    >
                        Show Recipe
                    </button>
                    <button
                        onClick={() => onToggleFavorite(meal)}
                        className={`btn btn-ghost ${
                            isFavorite ? 'text-red-500' : 'text-gray-500'
                        }`}
                    >
                        <svg
                            className="h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d={
                                    isFavorite
                                        ? 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
                                        : 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
                                }
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card

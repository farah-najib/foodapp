const Card = ({ meal, onShowRecipe, onToggleFavorite, isFavorite }) => {
    return (
        <div className="card bg-secondary w-80 h-110 shadow-sm ">
            <div className="absolute top-2 left-2 flex flex-wrap gap-2">
                {Array.isArray(meal.strTags)
                    ? meal.strTags.map((tag, index) => (
                          <h1 key={index} className="badge badge-secondary  ">
                              {tag}
                          </h1>
                      ))
                    : meal.strTags?.split(',').map((tag, index) => (
                          <h1 key={index} className="badge badge-secondary ">
                              {tag.trim()} {/* Trim to remove extra spaces */}
                          </h1>
                      ))}
            </div>
            <figure>
                <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="h-48 w-full object-cover rounded-t-lg"
                />
            </figure>
            <div className="card-body h-60">
                <h2 className="card-title text-lg font-extrabold h-15 ">
                    {meal.strMeal}
                </h2>
                <div className="flex h-10 ">
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
                <div className="p-0 flex justify-between mt-10">
                    <button
                        className="btn btn-primary"
                        onClick={() => {
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

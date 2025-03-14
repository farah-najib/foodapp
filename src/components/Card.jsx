

const Card = ({ meal, onShowRecipe }) => {
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
                        onClick={() => onShowRecipe(meal)}
                    >
                        Show Recipe
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card

// <div className="mockup-window border border-base-300 w-full">
//     <div className="grid place-content-center border-t border-base-300 h-80">
//         Hello!
//     </div>
// </div>
import {
    ModalBackdrop,
    ModalContainer,
    CloseButton
} from './styles/DetailPage.styled'

export const MealDetails = ({ meal, onClose }) => {
    return (
        <div className="mockup-window border border-base-300 w-full">
              <div className="grid place-content-center border-t border-base-300 h-80">
                <button onClick={onClose}>Close</button>
                <h1>{meal.strMeal}</h1>
                <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    style={{ width: '100%' }}
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

import Card from '../components/Card'
import MealDetails from '../components/Mealdetails'
import { useFavorites } from '../hooks/useFavorites'
import { useMealSelection } from '../hooks/useMealSelection'
function FavoritePage() {

    const { favorites, removeFavorite } = useFavorites()
    const { selectedMeal, handleShowRecipe } = useMealSelection()


    return (
        <div>
            <h1 className="text-3xl flex justify-center mt-10">Favorite Meals</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  mt-10">
                {favorites.length > 0 ? (
                    favorites.map((meal) => (
                        <Card
                            key={meal.idMeal}
                            meal={meal}
                            onShowRecipe={handleShowRecipe}
                            onToggleFavorite={removeFavorite}
                            isFavorite={true}
                        />
                    ))
                ) : (
                    <p>No favorite meals yet.</p>
                )}

                {selectedMeal && <MealDetails meal={selectedMeal} />}
            </div>
        </div>
    )
}

export default FavoritePage

import { useState, useEffect } from 'react'
import Card from '../components/Card'
import MealDetails from '../components/Mealdetails'
function FavoritePage() {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        setFavorites(JSON.parse(localStorage.getItem('favorites')) || [])
    }, [])

    const removeFavorite = (meal) => {
        const updatedFavorites = favorites.filter(
            (fav) => fav.idMeal !== meal.idMeal
        )
        setFavorites(updatedFavorites)
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
    }
const [selectedMeal, setSelectedMeal] = useState(null)
    const handleShowRecipe = (meal) => {
        setSelectedMeal(meal) // Update state first
    }

    useEffect(() => {
        if (selectedMeal) {
            const modal = document.getElementById('meal_modal')
            if (modal) {
                modal.showModal()
            }
        }
    }, [selectedMeal])

    return (
    <div>
            <h1>Favorite Meals</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  mt-30">
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
        </div></div>
    )
}

export default FavoritePage

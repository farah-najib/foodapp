import { useEffect, useState, useCallback } from 'react'
import Card from '../components/Card'
import TheMealApi from '../services/TheMealApi'
import MealDetails from '../components/Mealdetails'
import { useFavorites } from '../hooks/useFavorites'
import { useMealSelection } from '../hooks/useMealSelection'

function Home({ searchQuery }) {
    const [meals, setMeals] = useState([])
    const { favorites, addFavorite, removeFavorite } = useFavorites()
    const { selectedMeal, handleShowRecipe } = useMealSelection()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getMeals = useCallback(async () => {
        setLoading(true)
        setError(null)

        try {
            const response = searchQuery
                ? await TheMealApi.getMealByName(searchQuery) // Search by name if there's a query
                : await TheMealApi.getMealsByFirstLetter() // Default to fetching by first letter

            console.log('API Response:', response) // Debugging

            if (response && response.meals) {
                setMeals(response.meals)
            } else {
                setMeals([])
                setError('No meals found.')
            }
        } catch (err) {
            setError(err.message || 'Network error')
        } finally {
            setLoading(false)
        }
    }, [searchQuery])

    useEffect(() => {
        getMeals()
    }, [getMeals, searchQuery])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : meals.length > 0 ? (
                meals.map((meal, index) => (
                    <Card
                        key={index}
                        meal={meal}
                        onShowRecipe={handleShowRecipe}
                        onToggleFavorite={
                            favorites.some((fav) => fav.idMeal === meal.idMeal)
                                ? removeFavorite
                                : addFavorite
                        }
                        isFavorite={favorites.some(
                            (fav) => fav.idMeal === meal.idMeal
                        )}
                    />
                ))
            ) : (
                <p>No meals found.</p>
            )}
            {selectedMeal && <MealDetails meal={selectedMeal} />}
        </div>
    )
}

export default Home

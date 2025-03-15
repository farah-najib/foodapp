import { useEffect, useState, useCallback } from 'react'
import Card from '../components/Card'
import TheMealApi from '../services/TheMealApi'
import MealDetails from '../components/Mealdetails'


function Home({ searchQuery }) {
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
const [selectedMeal, setSelectedMeal] = useState(null)
 const [favorites, setFavorites] = useState(() => {
     return JSON.parse(localStorage.getItem('favorites')) || []
 })
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

   const toggleFavorite = (meal) => {
       let updatedFavorites
       if (favorites.some((fav) => fav.idMeal === meal.idMeal)) {
           updatedFavorites = favorites.filter(
               (fav) => fav.idMeal !== meal.idMeal
           )
       } else {
           updatedFavorites = [...favorites, meal]
       }
       setFavorites(updatedFavorites)
       localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
   }

    return (
        <div className="grid h-56 grid-cols-3 place-items-stretch gap-4 ">
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : meals.length > 0 ? (
                meals.map((meal, index) => (
                    <Card
                        key={index}
                        meal={meal}
                        onShowRecipe={setSelectedMeal}
                        onToggleFavorite={toggleFavorite}
                        isFavorite={favorites.some(
                            (fav) => fav.idMeal === meal.idMeal
                        )}
                    />
                ))
            ) : (
                <p>No meals found.</p>
            )}
            {selectedMeal && (
                <MealDetails
                    meal={selectedMeal}
                    onClose={() => setSelectedMeal(null)}
                />
            )}
        </div>
    )
}

export default Home

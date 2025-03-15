import { useState, useEffect } from 'react'
import Card from '../components/Card'
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

    return (
        <div>
            <h1>Favorite Meals</h1>
            {favorites.length > 0 ? (
                favorites.map((meal) => (
                    <Card
                        key={meal.idMeal}
                        meal={meal}
                        onToggleFavorite={removeFavorite}
                        isFavorite={true}
                    />
                ))
            ) : (
                <p>No favorite meals yet.</p>
            )}
        </div>
    )
}

export default FavoritePage

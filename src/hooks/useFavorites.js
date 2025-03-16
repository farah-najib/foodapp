import { useState, useEffect } from 'react'

export function useFavorites() {

    const [favorites, setFavorites] = useState(() => {
        return JSON.parse(localStorage.getItem('favorites')) || []
    })


    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addFavorite = (meal) => {
        const updatedFavorites = [...favorites, meal]
        setFavorites(updatedFavorites)
    }

    const removeFavorite = (meal) => {
        const updatedFavorites = favorites.filter(
            (fav) => fav.idMeal !== meal.idMeal
        )
        setFavorites(updatedFavorites) 
    }

    return {
        favorites,
        addFavorite,
        removeFavorite
    }
}

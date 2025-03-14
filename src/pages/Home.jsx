import { useEffect, useState, useCallback } from 'react'
import Card from '../components/Card'
import TheMealApi from '../services/TheMealApi'
function Home({ searchQuery }) {
    const [meals, setMeals] = useState([])
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
        <div className="grid grid-cols-3 gap-4 p-4">
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : meals.length > 0 ? (
                meals.map((meal, index) => (
                    <Card
                        key={index}
                        meal={meal}

                    />
                ))
            ) : (
                <p>No meals found.</p>
            )}


        </div>
    )
}

export default Home

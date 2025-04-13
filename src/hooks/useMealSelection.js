import { useState, useEffect } from 'react'

export function useMealSelection() {
    const [selectedMeal, setSelectedMeal] = useState(null)

    const handleShowRecipe = (meal) => {
        if (!selectedMeal || selectedMeal.idMeal !== meal.idMeal) {
            setSelectedMeal(meal)
        }
    }

        const closeMealModal = () => {
            const modal = document.getElementById('meal_modal')
            if (modal) {
                modal.close()
            }
            setSelectedMeal(null)
        }

    useEffect(() => {
        if (selectedMeal) {
            const modal = document.getElementById('meal_modal')
            if (modal) {
                modal.showModal()
            }
        }
    }, [selectedMeal])

     return { selectedMeal, handleShowRecipe, closeMealModal }
}

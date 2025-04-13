import axios from 'axios'
import { BASE_URL, FAKE_DELAY, TEST_KEY } from '../utils/Utils'
console.log(BASE_URL)
// Create axios instance
const axiosInstance = () => {
    return axios.create({
        baseURL: BASE_URL,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        timeout: 10000
    })
}

// Generic GET function
const get = async (endpoint) => {
    const response = await axiosInstance().get(endpoint)
    // if (FAKE_DELAY) {
    //     await new Promise((r) => setTimeout(r, FAKE_DELAY))
    // }
    return response.data
}

// API functionswww.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
//get meals by first letter
const getMeals = async () => {
    return get(`${TEST_KEY}/search.php?f=s`)
}

// Search meal by name const getMealByName = async (productId: string)
const getMealByName = async (mealName) => {
    return get(`${TEST_KEY}/search.php?s=${mealName}`)
}

export default {
    getMeals,
    getMealByName
}

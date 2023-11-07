import axios from "axios";

export const getCards = async (limit = 8) => {
    try {
        const response = await axios.get(`http://localhost:8181/cards?_start=0&_limit=${limit}`)
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}

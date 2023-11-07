import axios from "axios";

export const getCardsForSect2 = async () => {
    try {
        const response = await axios.get(`http://localhost:8181/cards_1`)
        console.log(response.data)
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}
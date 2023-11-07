import style from './style.module.css'
import CardsList__Section_4 from '../CardsList__Section_4/CardsList__Section_4';
import { useEffect, useState } from 'react';
import { getCardsForSect4 } from '../../api/get-cardsForSect4';



function Section_4() {

    const [cards, setCards] = useState([]);

    useEffect(() => {

        const fetchCards = async () => {
            try {
                const response = await getCardsForSect4();
                setCards(response);
            } catch (error) {
                console.log(error)
            }
        }
        fetchCards();
    }, [])


    return (
        <div className={style.section_4}>
            <div className="wrapper">
                {cards ? <CardsList__Section_4 cards={cards} /> : "loading..."}

            </div>
        </div >
    );
}

export default Section_4
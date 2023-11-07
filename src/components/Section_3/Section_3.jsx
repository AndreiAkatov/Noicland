import style from "./style.module.css";
import CardsList__Section_3 from "../CardList__Section_3/CardList__Section_3";
import { useEffect, useState } from 'react';
import { getCards } from '../../api/get-cards';

function Section_3() {

    const [cards, setCards] = useState([]);
    const [limit, setLimit] = useState(8);

    useEffect(() => {

        const fetchCards = async () => {
            try {
                const response = await getCards(limit);
                setCards(response);
            } catch (error) {
                console.log(error)
            }
        }
        fetchCards();

    }, [limit])



    return (
        <div className={style.section_3}>
            <div className="wrapper">
                <p className={style.title}>Latest posts</p>
                {cards ? <CardsList__Section_3 cards={cards} /> : "loading..."}
                <div className={style.btn_box}>
                    <button className={style.btn} onClick={() => {
                        if (limit >= 16) {
                            setLimit(8)
                        }
                        else {
                            setLimit(limit + 8);
                        }
                    }}>{limit >= 16 ? "Hide posts" : 'View all latest posts'}</button>

                </div>
            </div>
        </div>
    );
}

export default Section_3;

import style from './style.module.css'
import CardsList__Section_2 from '../CardsList__Section_2/CardsList__Section_2';
import { useEffect, useState } from 'react';
import { getCardsForSect2 } from '../../api/get-cardsForSect2';



function Section_2() {

   const [cards, setCards] = useState([]);
   console.log(cards)
   useEffect(() => {

      const fetchCards = async () => {
         try {
            const response = await getCardsForSect2();
            setCards(response);
         } catch (error) {
            console.log(error)
         }
      }
      fetchCards();
   }, [])


   return (
      <div className={style.section_2}>
         <div className="wrapper">
            {cards ? <CardsList__Section_2 cards={cards} /> : "loading..."}

         </div>
      </div >
   );
}

export default Section_2
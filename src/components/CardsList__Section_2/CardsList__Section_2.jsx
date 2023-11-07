import style from './style.module.css';
import Card from '../Card__Section_2/Card__Section_2'


function CardsList__Section_2({ cards }) {
    return (<div className={style.list}>
        {cards.map((item, index) => {
            return <Card key={item.id} information={item} />
        })}
    </div>
    );
}

export default CardsList__Section_2;
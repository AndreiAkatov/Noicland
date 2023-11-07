import style from './style.module.css'
import Card from '../Card__Section_3/Card__Section_3';

function CardsList__Section_3({ cards }) {
    return (<div className={style.list}>
        {cards.map((item) => {
            return <Card key={item.id} information={item} />
        })}
    </div>)
}

export default CardsList__Section_3;
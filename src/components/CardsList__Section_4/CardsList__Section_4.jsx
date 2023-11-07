import style from './style.module.css';
import Card from '../Card__Section_4/Card__Section_4'


function CardsList__Section_4({ cards }) {
    return (<div className={style.list}>
        {cards.map((item, index) => {
            return <Card key={item.id} information={item} />
        })}
    </div>
    );
}

export default CardsList__Section_4;
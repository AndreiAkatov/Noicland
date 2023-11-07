import style from './style.module.css'

function Card({ information }) {
   return (
      <div className={style.card}>
         <div className={style.image_box}>
            <img className={style.image} src={information.image}></img>
         </div>
         <div className={style.name}>
            {information.name}
         </div>
         <div className={style.description}>
            {information.description}
         </div>
         <div className={style.author}>by {information.author}</div>
      </div>
   );
}

export default Card;
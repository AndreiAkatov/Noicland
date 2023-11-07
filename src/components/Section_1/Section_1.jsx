import style from "./style.module.css";
import img from '../../images/sect1-img.jpg';

function Section_1() {
    return (
        <div className={style.section_1}>
            <div className="wrapper">
                <div className={style.container}>
                    <div className={style.img_box}>
                        <img className={style.image} src={img} alt="no img" />
                    </div>
                    <div className={style.text_box}>
                        <p className={style.desc_1}>Illustration</p>
                        <h1 className={style.title}>Japan House opens in mountainside to foster peak creativity.</h1>
                        <p className={style.desc_2}>Enim omittam qui id, ex quo atqui dictas complectitur. Nec ad timeam accusata, hinc justo falli id eum, ferri novum molestie eos cu.</p>
                        <p className={style.desc_3}>By Reta Torphy</p>


                    </div>

                </div>

            </div>
        </div >
    );
}

export default Section_1
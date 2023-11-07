import style from './style.module.css'
import Logo from '../Logo/Logo';

function Footer() {
    return (<footer className={style.footer}>
        <div className="wrapper">
            <div className={style.logo_box}>
                <span className={style.logo}>noiceland</span>
                <p className={style.copyright}>© 2018 Noiceland™, all rights reserved</p>
            </div>
            <div className={style.categories_box}>
                <div className={style.categories_container}>
                    <h3 className={style.title}>Categories</h3>
                    <div className={style.categories}>
                        <div className={style.categories_item}>
                            <a className={style.link} href="#">Animation</a>
                            <a className={style.link} href="#">Interactive Design</a>
                        </div>
                        <div className={style.categories_item}>
                            <a className={style.link} href="#">Architecture</a>
                            <a className={style.link} href="#">Miscellaneous</a>
                        </div>
                        <div className={style.categories_item}>
                            <a className={style.link} href="#">Graphic Design</a>
                            <a className={style.link} href="#">Photography</a>
                        </div>
                        <div className={style.categories_item}>
                            <a className={style.link} href="#">Illustration</a>
                            <a className={style.link} href="#">Product Design</a>
                        </div>
                    </div>
                </div>

                <div className={style.subscribe_container}>
                    <h3 className={style.title}>Subscribe to newsletter</h3>
                    <form className={style.form} action="#" method='POST'>
                        <input className={style.input} id="formEmail" type="text" name="email" placeholder="Email address" />
                        <button className={style.button} type="submit">Send</button>
                    </form>
                </div>

            </div>
            <div className={style.social_box}>
                <div className={style.information}>
                    <h3 className={style.title}>Information</h3>
                    <a className={style.link} href="#">about</a>
                    <a className={style.link} href="#">contact</a>
                    <a className={style.link} href="#">terms</a>
                </div>
                <div className={style.follow_us}>
                    <h3 className={style.title}>follow us</h3>
                    <a className={style.link} href="#">instagram</a>
                    <a className={style.link} href="#">facebook</a>
                    <a className={style.link} href="#">twitter</a>
                </div>
                <div className={style.template}>
                    <h3 className={style.title}>Template</h3>
                    <a className={style.link} href="#">Image License Info</a>
                    <a className={style.link} href="#">Powered by Webflow</a>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;
import style from './footer.module.scss';

function Footer() {

    return (
        <div className={style.footer}>
            <div className={style.nav}>
                {['Terms & Conditions', 'Cookies', 'Contacts', 'Careers', 'Brand Guide'].map((el, index) => <p key={index}>{el}</p>)}
            </div>

            <div className={style.link}>
                <p>Our social media:</p>
                <div className={style.images}>
                    <div className={style.img1}></div>
                    <div className={style.img2}></div>
                    <div className={style.img3}></div>
                    <div className={style.img4}></div>
                    <div className={style.img5}></div>
                    <div className={style.img6}></div>
                    <div className={style.img7}></div>
                    <div className={style.img8}></div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
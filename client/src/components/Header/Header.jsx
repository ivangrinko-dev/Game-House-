import style from './header.module.scss';

function Header() {

    return (
        <div className={style.header}>
            <div className={style.nav}>
                {['About us', 'Brands', 'Commissions', 'News', 'Contact us', 'Careers'].map((el, index) => <p key={index}>{el}</p>)}
            </div>

            <div className={style.btns}>
                <div><button><span></span>EN</button></div>
                <div><button>LOG INN</button></div>
                <div><button className={style.btnActionRegister}>SIGN UP</button></div>
            </div>
        </div>
    )
}

export default Header;
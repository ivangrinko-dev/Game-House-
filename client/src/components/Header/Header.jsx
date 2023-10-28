import style from './header.module.scss';

function Header() {

    return (
        <div className={style.header}>
        <div className={style.nav}>
            {['About us', 'Brands', 'Commissions', 'News', 'Contact us', 'Careers'].map((el, index) => <p key={index}>{el}</p>)}
        </div>
        </div>
        )
}

export default Header;
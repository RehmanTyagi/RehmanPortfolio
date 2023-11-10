import style from './Logo.module.css'
const Logo = () => {
    return (
        <a href="#header" className={style.logo}>
            <span className={style.letter}>S</span>
            <span className={style.logoName}>Srishti Singh</span>
        </a>
    )
}

export default Logo

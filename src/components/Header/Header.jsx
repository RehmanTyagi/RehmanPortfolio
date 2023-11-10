import style from './Header.module.css'
import CenterContent from "../UI/CenterContent/CenterContent"
import Logo from "../UI/Logo/Logo"
import Navbar from "../UI/Navbar/Navbar"
import Button from "../UI/Button/Button"
const Header = () => {
    return (
        <CenterContent className={style.header}>
            <Logo />
            <Navbar />
            <Button className={style.contactBtn} text="Contact" />
        </CenterContent>
    )
}

export default Header

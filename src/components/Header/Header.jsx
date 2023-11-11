import style from './Header.module.css'
import CenterContent from "../UI/CenterContent/CenterContent"
import Logo from "../UI/Logo/Logo"
import Navbar from "../UI/Navbar/Navbar"
import Button from "../UI/Button/Button"
const Header = () => {
    return (
        <div className={style.container}>
            <CenterContent className={style.header}>
                <Logo />
                <Navbar />
                <Button className={style.contactBtn}>Contact Me</Button>
            </CenterContent>
        </div>
    )
}

export default Header

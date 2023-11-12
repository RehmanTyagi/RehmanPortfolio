import style from './Header.module.css'
import CenterContent from "../UI/CenterContent/CenterContent"
import Logo from "../UI/Logo/Logo"
import Navbar from "../UI/Navbar/Navbar"
import Button from "../UI/Button/Button"
import { BiMenuAltRight } from 'react-icons/bi'
import { useState } from 'react'
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    console.log(isMenuOpen)
    return (
        <div className={style.container}>
            <CenterContent className={style.header}>
                <Logo />
                <Navbar className={`${style.navbar} ${isMenuOpen ? style.NavbarActive : ''}`} />
                <div>
                    <Button className={style.contactBtn}>Contact Me</Button>
                    <BiMenuAltRight onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${style.menuIcon} ${isMenuOpen ? style.menuActive : ''}`} size={30} />
                </div>
            </CenterContent>
        </div>
    )
}

export default Header

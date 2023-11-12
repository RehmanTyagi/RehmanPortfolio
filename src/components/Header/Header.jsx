import style from './Header.module.css'
import CenterContent from "../UI/CenterContent/CenterContent"
import Logo from "../UI/Logo/Logo"
import Navbar from "../UI/Navbar/Navbar"
import Button from "../UI/Button/Button"
import { BiMenuAltRight } from 'react-icons/bi'
import { useState, useRef, useEffect } from 'react'
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navbarRef = useRef(null)
    const [y, setY] = useState(20);

    const handleNavigation = (e) => {
        const window = e.currentTarget;
        if (y > window.scrollY) {
            setY(0)
            navbarRef.current.classList.remove(style.scrollActive)
        } else if (y < window.scrollY) {
            console.log("scrolling down");
            navbarRef.current.classList.add(style.scrollActive)
        }
        setY(window.scrollY);
    };

    useEffect(() => {
        setY(window.scrollY);

        window.addEventListener("scroll", (e) => handleNavigation(e));
    }, []);
    return (
        <div ref={navbarRef} className={style.container}>
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

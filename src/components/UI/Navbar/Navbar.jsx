import style from './Navbar.module.css'
const Navbar = () => {
    return (
        <div className={style.navbar}>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </div>
    )
}

export default Navbar

import style from './Hero.module.css'
import Card from "../UI/Card/Card"
import Button from "../UI/Button/Button"
import CenterContent from "../UI/CenterContent/CenterContent"
import { BiLogoYoutube } from 'react-icons/bi'
import { CiInstagram, CiFacebook, CiLinkedin } from 'react-icons/ci'
import { useTypewriter } from 'react-simple-typewriter'

import Banner from '../../assets/Banner.png'
import Shape1 from '../../assets/shape-1.svg'
import Shape2 from '../../assets/shape-2.svg'
const Hero = () => {
    const [text] = useTypewriter({
        words: ['Actress', 'Model', 'TradingExpert'], loop: true
    })
    return (
        <div className={style.container}>
            <CenterContent>
                <div className={style.hero}>
                    <div className={style.leftContent}>
                        <img src={Shape2} alt="shape" />
                        <p>Hello</p>
                        <h1>{"I'M Srishti Singh"}</h1>
                        <p>She is <span className={style.keyword}>{text}</span></p>
                        <p>Fashion That Exists In Everything. Style Is A Way To Say Who You Are Without Having To Speak.</p>
                        <div className={style.cta}>
                            <Button className={style.ctaBtn}>See My Work <BiLogoYoutube className={style.icon} /></Button>
                            <span className={style.ctaIcon}>
                                <CiInstagram />
                            </span>
                            <span className={style.ctaIcon}>
                                <CiFacebook />
                            </span>
                            <span className={style.ctaIcon}>
                                <CiLinkedin />
                            </span>
                            <span className={style.ctaIcon}>
                                <BiLogoYoutube />
                            </span>
                        </div>
                        <img src={Shape2} alt="shape" />
                    </div>
                    <div className={style.rightContent}>
                        <div className={style.banner}>
                            <Card className={style.card}>
                                <h1>33K Followers</h1>
                                <p>Instagram</p>
                            </Card>
                            <Card className={style.card}>
                                <h1>currently Open For</h1>
                                <p>Sponsorships</p>
                            </Card>
                            <img src={Banner} alt="banner" />
                        </div>
                        <img className={style.shape} src={Shape1} alt="shape" />
                    </div>
                </div>
            </CenterContent>
        </div>
    )
}

export default Hero

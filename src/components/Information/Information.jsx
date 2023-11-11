import style from './Information.module.css'
import CenterContent from '../UI/CenterContent/CenterContent'
import Button from '../UI/Button/Button'

import Profile from '../../assets/profile.png'
const Information = () => {
    return (
        <div className={style.section}>
            <CenterContent>
                <div className={style.information}>
                    <div className={style.profileContainer}>
                        <img className={style.profile} src={Profile} alt="profile" />
                    </div>
                    <div className={style.rightContent}>
                        <p>About Me</p>
                        <h1>Srishti Singh From New Delhi, India</h1>
                        <p>As a fashion model, I embody the epitome of elegance, style, and grace. With a passion for the art of expression through clothing and a dedication to showcasing the latest trends, I navigate the world of fashion with confidence and poise. Striding down runways and gracing the pages of fashion magazines, I bring life to designer creations, turning garments into statements. </p>
                        <p>{"Srishti's Info"}</p>
                        <div className={style.contactInfo}>
                            <div>Name</div>
                            <p>Srishti Singh</p>
                            <div>email</div>
                            <a href="mailto:realsrishti2023@gmail.com">Not Available</a>
                            <div>Contact No</div>
                            <a href="tel:100">Not Available</a>
                            <div>Age</div>
                            <p>Not Available</p>
                            <div>Education</div>
                            <p>Graduates</p>
                            <div>Profession</div>
                            <p>Modeling,Acting,Stock Market Trading</p>
                        </div>
                        <Button>Download My CV</Button>
                    </div>
                </div>
            </CenterContent>
        </div >
    )
}

export default Information

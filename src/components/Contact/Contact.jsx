import style from './Contact.module.css'
import CenterContent from '../UI/CenterContent/CenterContent'
import Button from '../UI/Button/Button'

// assets
import ArrowShapeLeft from '../../assets/tile-shape-left.png'
import ArrowShapeRight from '../../assets/tile-shape-right.png'
import { BiPhoneCall, BiMailSend, BiCurrentLocation, BiUser } from 'react-icons/bi'
import { FiSend } from 'react-icons/fi'
import Input from "../UI/Input/Input"

const Contact = () => {

    const handleForm = (e) => {
        e.preventDefault()
        alert('message could not send, Rehmann will add it soon.')
    }
    return (
        <div className={style.contact}>
            <CenterContent>
                <div className={style.head}>
                    <img src={ArrowShapeLeft} alt="shape" />
                    <h1>Get in touch</h1>
                    <img src={ArrowShapeRight} alt="shape" />
                </div>
                <div className={style.body}>
                    <div className={style.contactInfo}>
                        <label>Phone</label>
                        <p><BiPhoneCall className={style.icon} /> 8882109810</p>
                        <label>Email</label>
                        <p><BiMailSend className={style.icon} /> srishtisingh8810@gmail.com</p>
                        <label>Location</label>
                        <p><BiCurrentLocation className={style.icon} /> Mandoli, Delhi 93, India</p>
                    </div>
                    <form onSubmit={handleForm} className={style.contactForm}>
                        <Input required={true} placeholder='User Name' type='text' icon={<BiUser />} />
                        <Input required={true} placeholder='User Email' type='email' icon={<BiMailSend />} />
                        <textarea required rows="10" cols="60" placeholder="Message" className={style.messageBox}></textarea>
                        <Button className={style.sendBtn}><FiSend /> Send Message</Button>
                    </form>
                </div>
            </CenterContent>
        </div>
    )
}

export default Contact

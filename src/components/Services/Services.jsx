import style from './Services.module.css'
// assets
import ArrowShapeLeft from '../../assets/tile-shape-left.png'
import ArrowShapeRight from '../../assets/tile-shape-right.png'
import ModelShoot from '../../assets/modelshoot.svg'
import ProductShoot from '../../assets/productshoot.svg'
import CoverShoot from '../../assets/covershoot.svg'
import PhotoShoot from '../../assets/photoshoot.svg'
import RampShoot from '../../assets/rampshoot.svg'

import CenterContent from "../UI/CenterContent/CenterContent"
import ServiceCard from "./ServiceCard/ServiceCard"

const Services = () => {
    return (
        <div className={style.services}>
            <CenterContent>
                <div className={style.head}>
                    <img src={ArrowShapeLeft} alt="shape" />
                    <h1>{"Srishti's Services"}</h1>
                    <img src={ArrowShapeRight} alt="shape" />
                </div>
                <p>Are you searching for a versatile and captivating talent to bring your vision to life? Look no further! I am Srishti, a seasoned model actor with a passion for storytelling and a commitment to delivering exceptional performances.</p>
                <div className={style.servicesCards}>
                    <ServiceCard className={style.serviceCard} src={ModelShoot} title="Modeling" />
                    <ServiceCard className={style.serviceCard} src={ProductShoot} title="Product Ads" />
                    <ServiceCard className={style.serviceCard} src={CoverShoot} title="Cover Shoots" />
                    <ServiceCard className={style.serviceCard} src={RampShoot} title="Ramp Shows" />
                    <ServiceCard className={style.serviceCard} src={PhotoShoot} title="PhotoShoots" />
                </div>
            </CenterContent>
        </div>
    )
}

export default Services

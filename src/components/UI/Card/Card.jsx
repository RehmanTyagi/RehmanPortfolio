import style from './Card.module.css'
const Card = ({ children, className }) => {
    return (
        <div className={`${style.card} ${className}`}>
            {children}
        </div>
    )
}

export default Card

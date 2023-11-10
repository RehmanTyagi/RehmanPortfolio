import style from './Button.module.css'
const Button = ({ text, type, className }) => {
    return (
        <button type={type} className={`${style.btn} ${className}`}>{text}</button>
    )
}

export default Button

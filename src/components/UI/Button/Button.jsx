import style from './Button.module.css'
const Button = ({ children, type, className }) => {
    return (
        <button type={type} className={`${style.btn} ${className}`}>{children}</button>
    )
}

export default Button

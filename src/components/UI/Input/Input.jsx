import style from './Input.module.css'
const Input = ({ placeholder, type, className, icon, required }) => {
    return (
        <div className={`${style.input} ${className}`}>
            <span className={style.icon}>{icon}</span>
            <input placeholder={placeholder} type={type} required={required} />
        </div>
    )
}

export default Input

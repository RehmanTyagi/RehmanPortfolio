import Card from "../../UI/Card/Card"

const ServiceCard = ({ src, title, children, className }) => {
    return (
        <Card className={className}>
            <img src={src} alt="shape" />
            <h3>{title}</h3>
            <p>{children}</p>
        </Card>
    )
}

export default ServiceCard

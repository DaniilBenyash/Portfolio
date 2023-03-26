import './CardEducation.scss'

type CardEducationProps = {
    icon: string,
    name: string,
    date: string,
    description: string,
}

const CardEducation = (props: CardEducationProps) => {
    return (
        <div className="card_education">
            <img src={props.icon} alt="icon" />
            <div>
                <h2>{props.name}</h2>
                <h4>{props.date}</h4>
                <h3>{props.description}</h3>
            </div>
        </div>   
    )
}

export default CardEducation
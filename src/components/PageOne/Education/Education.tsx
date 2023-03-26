import './Education.scss'
import Background from "../Background/Background"
import CardEducation from "./components/CardEducation"
import { info } from '../../../assets/info'

const Education = () => {
    return (
        <Background>
            <div className="education">
                <div className="education__line"></div>
                {info.education.map(el => {
                    return (
                        <CardEducation 
                            icon={el.icon}
                            name={el.name}
                            date={el.date}
                            description={el.description}
                            key={el.name}
                        />    
                    )
                })}
            </div> 
        </Background>     
    )
}

export default Education
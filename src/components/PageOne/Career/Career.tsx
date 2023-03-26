import './Career.scss'
import Background from "../Background/Background"
import { info } from '../../../assets/info'

const Career = () => {
    return (
        <Background>
            <div className="career">
                <div className="career__line"></div>
                <div className="career__container">
                    {info.career.map((el) => {
                        return (
                            <div className="career__card">
                                <h2>{el.name}</h2>
                                <h4>{el.time}</h4>
                                {el.description.map(el => {
                                    return (
                                        <ul>
                                            <li>{el.name}</li>
                                            <ul>
                                                {el.description?.map(el2 => {
                                                    return (
                                                        <li>{el2}</li>    
                                                    )
                                                })}
                                            </ul>
                                        </ul>    
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </Background>  
    )
}

export default Career
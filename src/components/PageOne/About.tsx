import '../../styles/PageOne/about.scss'
import Navigator from "./Navigator";


const About = () => {
    return (
        <div className="about">
                <div className="about__content">
                    <Navigator/>
                    <div>
                        <h2 className='about__title'>Portfolio</h2>
                    </div> 
                </div>
            </div>   
    )
}

export default About
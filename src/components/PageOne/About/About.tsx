import './About.scss'
import Background from '../Background/Background'
import { info } from '../../../assets/info'

const About = () => {

    const clickEmail = () => {
        navigator.clipboard.writeText('daniilbeniash@gmail.com')
        alert('Email copied')
    }

    return (
        <Background>
            <div className='about__content'>
                <div className='about__section'>
                    <div className="about__photo"></div>
                    <div className='about__info'>
                        <div style={{height: '100%'}}>
                            <div className="about__line"></div>
                            <h1>{info.name}</h1>
                            <h2>{info.profession}</h2>
                            <div className="about__description">
                                <p>{info.about}</p>
                                <p>My skills: 
                                    <p className='about__skills'>{info.skills.join(' | ')}</p>
                                </p>
                                <p>My languages: 
                                    <p className='about__skills'>{info.language.join(' | ')}</p>
                                </p>
                            </div>
                        </div>             
                        <div className='about__socials'>
                            <button className='about__email' onClick={clickEmail}>daniilbeniash@gmail.com</button>
                            <a href={info.socials.telegram}><img src="./PageOne/About/telegram.png" alt="telegram" /></a>
                            <a href={info.socials.linkedin}><img src="./PageOne/About/linked.png" alt="linkedin" /></a>
                            <a href={info.socials.git}><img src="./PageOne/About/git.png" alt="git" /></a>
                            <a href={info.socials.codewars}><img src="./PageOne/About/codewars.png" alt="codewars"/></a>
                            <a href="./Daniil_Beniash_CV.pdf" download className='about__download'><img src="./PageOne/About/CV.png" alt="codewars"/></a> 
                        </div>
                    </div>
                </div>
            </div> 
        </Background>
    )
}

export default About
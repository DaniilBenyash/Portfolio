import './Projects.scss'
import Background from "../Background/Background"
import { info } from "../../../assets/info"
import CardProjects from "./components/CardProjects"

const Projects = () => {
    return (
        <Background>
            <section className="projects">
                <div className="projects__line"></div>
                    {info.projects.map(el => {
                        return (
                            <CardProjects
                                name={el.name}
                                description={el.description}
                                stack={el.stack}
                                img={el.img}
                                url={el.url}
                                git={el.git}
                            />
                        )
                    })}
            </section>
        </Background>
    )
}

export default Projects
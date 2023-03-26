import './CardProjects.scss'

type CardProjectsProps = {
    name: string,
    description: string,
    stack: string[],
    img: string,
    url: string,
    git: string,
}

const CardProjects = ({name, description, stack, img, url, git}: CardProjectsProps) => {
    return (
        <a href={url} target="_blank" className="card_projects">
            <img src={img} alt="screen site" />
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
                <div>Stack: <span className="card_projects__stack">{stack.join(' | ')}</span></div>
                <div className='card_projects__links'>
                    <a href={url} target="_blank">URL</a>
                    <a href={git} target="_blank">GIT</a>
                </div>
            </div>
        </a>    
    )
}

export default CardProjects
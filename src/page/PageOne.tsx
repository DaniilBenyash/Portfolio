import '../styles/PageOne/page_one.scss'
import '../components/PageOne/Navigator'
import About from '../components/PageOne/About'

const PageOne = () => {
    return (
        <main className="page_one">
            <About/>
            <div className="page_one__background"></div>
        </main>    
    )
}

export default PageOne
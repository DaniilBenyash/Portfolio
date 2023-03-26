import { useContext, useEffect } from 'react'
import './Navigator.scss'
import { Context } from '../../../page/PageOne/PageOne'

const Navigator = () => {
    const con = useContext(Context)
    useEffect(() => {
        console.log(con.value);
        
        
    })
    return (
        <nav className='navigator'>
            <div className='navigator__container'>
                <button className={`navigator__link ${con.value === 'about' && 'navigator__link-active'}`} onClick={() => con.func('about')}>about</button>
                <button className={`navigator__link ${con.value === 'career' && 'navigator__link-active'}`} onClick={() => con.func('career')}>career</button>
                <button className={`navigator__link ${con.value === 'projects' && 'navigator__link-active'}`} onClick={() => con.func('projects')}>projects</button>
                <button className={`navigator__link ${con.value === 'education' && 'navigator__link-active'}`} onClick={() => con.func('education')}>education</button>
            </div>     
        </nav>    
    )
}

export default Navigator
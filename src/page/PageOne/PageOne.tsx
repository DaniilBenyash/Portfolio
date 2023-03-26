import React, { useEffect, createContext, useState, useRef } from 'react'
import './PageOne.scss'
import About from '../../components/PageOne/About/About'
import Education from '../../components/PageOne/Education/Education'
import Career from '../../components/PageOne/Career/Career'
import Projects from '../../components/PageOne/Projects/Projects'

export const Context = createContext<any>(null)

const PageOne = () => {
    const selectedRef = useRef<any>(null)

    const [name, setName] = useState('about')  

    useEffect(() => {
        selectedRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }, [name])
    
    return (
        <Context.Provider value={{value: name, func: setName}}>
            <main className="page_one">
                <div className='page_one__content'>
                    <div className='page_one__container' 
                        ref={
                        name === 'about' ?
                        selectedRef
                        :
                        null}>
                        <About/>
                    </div>

                    <div className='page_one__container' 
                        ref={
                        name === 'career' ?
                        selectedRef
                        :
                        null}>
                        <Career/>
                    </div>

                    <div className='page_one__container' 
                        ref={
                        name === 'projects' ?
                        selectedRef
                        :
                        null}>
                        <Projects/>
                    </div>

                    <div className='page_one__container' 
                        ref={
                        name === 'education' ?
                        selectedRef
                        :
                        null}>
                        <Education/>
                    </div>

                </div>
                <div className="page_one__background"></div>
            </main>    
        </Context.Provider>
            
    )
}

export default PageOne
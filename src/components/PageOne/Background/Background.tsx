import React from 'react';
import './Background.scss'
import Navigator from "../Navigator/Navigator"

interface IBackgroundProps {
    children: React.ReactNode
}

const Background = (props: IBackgroundProps) => {
    return (
        <div className="background">
            <div className="background__conteiner">
                <Navigator/>
                <div className='background__content'>
                    <h2 className='background__title'>Portfolio</h2>
                    <div className="background__line"></div>
                    {props.children}
                </div>
            </div>
        </div>    
    )
}

export default Background
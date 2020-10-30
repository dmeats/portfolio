import React,{useContext} from 'react';
import './About.css'
import {APPLContext} from './../App'

const About = () => {
    const aPPLContext = useContext(APPLContext)
    let underlinee = 'about_underline'
    aPPLContext.ChangeUnderline(underlinee)

    return(
        <div className='container'>
                <div className='Name'>
                <p>DAVID MEATS</p>
                </div>
                <div className='Title'>
                <p>FULLSTACK DEVELOPER</p>
                </div>
                <div className='About'>
                <p>Space enthusiast who likes to cook, bake and garden
                </p>
                </div>
        </div>
    )
}
export default About;
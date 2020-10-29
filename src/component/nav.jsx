import React,{useContext} from 'react';
import {Link} from 'react-router-dom'
import {APPLContext} from './../App'

import './nav.css'
import Gear from '../Assets/images/large_Gear.png'

const Nav = () => {
    
    const aPPLContext = useContext(APPLContext)
   
        
    return(
        <div className='Nav'>
            <div className={aPPLContext.underlinee}></div>
            <div>
            <img src={Gear } className = 'Gear1'/>
            </div>
            <div className='About-link'>
            <Link exact to={'/'} style={{ textDecoration: 'none' }} activeStyle={{color: "red"}} className='Navv'>About</Link>
            </div>
            
            <div>
            <img src={Gear } className = 'Gear2'/>
            </div>
            <div className='Projects-link'>
            <Link exact to={'/Projects'} style={{ textDecoration: 'none' }} className='Navv'>Projects</Link>
            </div>
        
            <div className='Skills-link'>
            <Link exact to={'/Skills'} style={{ textDecoration: 'none' }} className='Navv'>Skills</Link>
            </div>

            <div>
            <img src={Gear } className = 'Gear3'/>
            </div>
        </div>
        )
}
export default Nav;
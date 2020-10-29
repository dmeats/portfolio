import React,{useContext} from 'react';
import {APPLContext} from './../App'
import './project.css'
import ProjectItem from './ProjectItem'
import digitaldash from '../Assets/images/digital_dash.png' 
import groceryapp from '../Assets/images/groceryapp.png'
import drum_machine from '../Assets/images/drum_machine.png'
import IOT_manuf from '../Assets/images/IOT_manuf.png'
import Air_quality from '../Assets/images/Air_quality.png'
import power_app from '../Assets/images/power_app.png'
import VegApp from '../Assets/images/VegApp.png'
import zone_con from '../Assets/images/zone_con.png'

const Projects = () => {

    //sets all project attributes to be used by ProjectItem

    //'underlinee' sets a style for projects
    const aPPLContext = useContext(APPLContext)
    let underlinee = 'projects_underline'
    aPPLContext.ChangeUnderline(underlinee)

    return(
        <div>
        
        <div className = 'Project-container'>
                <div className='project'>
                <ProjectItem  picture={digitaldash} projectname='Digital Dash Board' tech='React, CSS, SVG, JSON, JavaScript' imagestyle='desktopmodalimg' TopicHeading='Technolgies used:' modalimage={digitaldash} boxsize='modal-box'/>
                <ProjectItem  picture={groceryapp} projectname='Grocery App' tech='React, CSS, Bootsrap, JSON, JavaScript' imagestyle='mobilemodalimg' TopicHeading='Technolgies used:' modalimage={groceryapp} boxsize='mobile-modal-box'/>
                <ProjectItem  picture={drum_machine} projectname='Drum Machine' tech='React, CSS, HTML, JavaScript, audio' imagestyle='mobilemodalimg' TopicHeading='Technolgies used:' modalimage={drum_machine} boxsize='mobile-modal-box'/>
                <ProjectItem  picture={IOT_manuf} projectname='IOT Manufacturing Line App' tech='Vue, MySQL, Node, CSS, JSON, JavaScript,Express,API' imagestyle='desktopmodalimg' TopicHeading='Technolgies used:' modalimage={IOT_manuf} boxsize='modal-box'/>
                <ProjectItem  picture={Air_quality} projectname='Air Quality Graphing App' tech='React, CSS, SVG, JSON, JavaScript' imagestyle='mobilemodalimg' TopicHeading='Technolgies used:' modalimage={Air_quality} boxsize='mobile-modal-box'/>
                <ProjectItem  picture={power_app} projectname='Power Energy App' tech='React, MySQL, CSS, SVG, JSON, JavaScript,API' imagestyle='twoimgmobilemodalimg' TopicHeading='Technolgies used:' modalimage={power_app} boxsize='modal-box' />
                <ProjectItem  picture={VegApp} projectname='Vegetable Planner App' tech='CSS, JavaScript' imagestyle='desktopmodalimg' TopicHeading='Technolgies used:' modalimage={VegApp} boxsize='modal-box'/>
                <ProjectItem  picture={zone_con} projectname='Automation control App' tech='Vue, Node, Socket.io, CSS, JSON, JavaScript' imagestyle='mobilemodalimg' TopicHeading='Technolgies used:' modalimage={zone_con} boxsize='mobile-modal-box'/>
               
                </div>
        </div>
        </div>
    )
}
export default Projects;

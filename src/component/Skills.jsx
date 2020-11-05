import React,{useContext} from 'react';
import {APPLContext} from './../App'
import ProjectItem from './ProjectItem'
import './project.css'
import databaseimg from '../Assets/images/database.png' 
import paintimg from '../Assets/images/paintboard2.png'
import codeimg from '../Assets/images/helloworld.png'
import businessimg from '../Assets/images/buss.png'
import processimage from '../Assets/images/ProcessMap.png'
import codescreen from '../Assets/images/codescreen.png'
import paintdetail from '../Assets/images/paintdetailimg.png'
import databasemodel from '../Assets/images/dbmodel.png'

const Skills = () => {


    //sets all Skills attributes to be used by ProjectItem

    //'underlinee' sets a style for skills

    const aPPLContext = useContext(APPLContext)
    let underlinee = 'skills_underline'
    let aboutinfo = 'about-hide'
    aPPLContext.ChangeUnderline(underlinee)

    aPPLContext.ChangeAboutinfo(aboutinfo)

    return(
        <div>
        
            <div className = 'Skills-container'>
                    <div className='project'>
                    <ProjectItem  picture={databaseimg} projectname='Database' tech='SQL, MySQL, ORACLE, SQLSERVER, RESTFULL, REST, ' imagestyle='mobilemodalimg' TopicHeading='Database Technologies:' modalimage={databasemodel} boxsize='mobile-modal-box'/>
                    <ProjectItem  picture={paintimg} projectname='Graphic Design' tech='Blender, Gimp, PowerPoint' imagestyle='mobilemodalimg' TopicHeading='Graphic software:' modalimage={paintdetail} boxsize='mobile-modal-box'/>
                    <ProjectItem  picture={codeimg} projectname='Programming' tech='React, Vue, API, JSON, Nodejs, Javascript, VBA, Express, HTML, CSS, CSS-Grid, SQL, SVG' imagestyle='mobilemodalimg' TopicHeading='Programming Languages:' modalimage={codescreen} boxsize='mobile-modal-box'/>
                    <ProjectItem  picture={businessimg} projectname='Business' tech='Process Modeling, Stakeholder Engagement, Business Requirement Docs, Agile, Waterfall, Excel, Powerpoint, Word' imagestyle='mobilemodalimg' TopicHeading='Business Concepts used:' modalimage={processimage} boxsize='mobile-modal-box'/>
                
                    </div>
            </div>
        </div>
    )
}
export default Skills;

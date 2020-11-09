import React from 'react';
import './project.css'
import './ProjectItem.css'

import Modal from "./Modal";

const ProjectItem = (props) => {

//builds each project box with props info and 
//builds the layout for the modal box



   const{ picture, projectname,tech,imagestyle,TopicHeading,modalimage,boxsize} = props

   const modalRef = React.useRef();

  const openModal = () => {
    modalRef.current.openModal()
  };

  const closeModal = () => {
    modalRef.current.closeModal()
  };

    return(
        <div>
            <button className='openModalbutton' onClick={openModal}>
                    <div class="boxstyle" id="click">
                        <img src={picture} />
                        <p className="project-name">{projectname}</p>
                    </div>
            </button>




        <Modal ref={modalRef} modalboxsize={boxsize}>
        <div class="grid-container">
            <div className='item1'>
                <h3>{projectname}</h3>
            </div>
            <div className='item2'>
                <div className="closebutton" onClick={() => modalRef.current.closeModal()}>x</div>
            </div> 
            <div className='item3'>                  
                <img src={modalimage} className={imagestyle}/>
            </div>
            <div className='item4'>                
                            <p ><h2>{TopicHeading}</h2>{tech}</p>
            </div>         
       </div>           
        </Modal>
                   
                   
        </div>
    )
}
export default ProjectItem;

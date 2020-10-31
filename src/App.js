import React, {useState,useContext} from 'react';
import {Switch,Route} from 'react-router-dom'
import About from './component/About'
import Projects from './component/Projects'
import Skills from './component/Skills'
import Nav from './component/nav'
import CanvasStarfield from './component/CanvasStarfield'

//import Backgroundimage from './Assets/images/curvedbackground.png'
import './App.css';

export const APPLContext = React.createContext({
  Message: '',
  underlinee:'',
  aboutinfo:'',
  ChangeMessage: () => {},
  ChangeUnderline: ()  => {},
  ChangeAboutinfo: ()  => {},
  
});


function App() {

  const [underlinee, setunderlinee] = useState('about_underline')
  const [aboutinfo, setaboutinfo] = useState('container')
  const aPPLContext = useContext(APPLContext)


  return (
    <APPLContext.Provider value = {{
      underlinee,
      aboutinfo,
      setunderlinee,
      setaboutinfo,
      
      ChangeUnderline: underlinee => setunderlinee(underlinee),
      ChangeAboutinfo: aboutinfo => setaboutinfo(aboutinfo),
  
      }}>
   
      <div className="App">
          
          <Nav />
            <div className={aboutinfo}>
                <div className='Name'>
                <p>DAVID MEATS</p>
                </div>
                <div className='Title'>
                <p>FULLSTACK DEVELOPER</p>
                </div>
                <div className='About'>
                <p>AI enthusiast who likes to cook, bake and garden
                </p>
                </div>
        </div>
          <Switch>
            <Route exact path={'/'} component={About} />
            <Route exact path={'/Projects'} component={Projects} />
            <Route exact path={'/Skills'} component={Skills} />
            
          </Switch>
          <CanvasStarfield />
      </div>
      </APPLContext.Provider>
  );
}

export default App;

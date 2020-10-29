import React, {useState} from 'react';
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
  ChangeMessage: () => {},
  
});


function App() {

  const [underlinee, setunderlinee] = useState('about_underline')

  return (
    <APPLContext.Provider value = {{
      underlinee,
      setunderlinee,
      
      ChangeUnderline: underlinee => setunderlinee(underlinee),
     
  
      }}>
   
      <div className="App">
          
          <Nav />
        
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

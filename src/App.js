import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';

import NavBar from './componentes/commons/NavBar';
import Home from './componentes/Home';
import Marvel from './componentes/Marvel';
import History from './componentes/commons/History';


function App() {
  return (
    <>
    <NavBar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/marvel" element={<Marvel/>}></Route> 
        <Route path="/history" element={<History/>}></Route> 
      </Routes>
    </Router>
    {/* <div>
      
    </div>
    <div className="App">

    <Home/>
  
    </div> */}
    </>
  );
}

export default App;

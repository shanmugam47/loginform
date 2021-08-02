import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
//import edit from './components/edit';
import View from './components/view';
//import create from './components/create';

import { BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Home from './components/pages/home';


function App() {
  return (
   
    <Router>
    <div>
  <Navbar/>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/view" component={View}/>
   
    </Switch>
   

  </div>
  </Router>
  )
}

export default App;

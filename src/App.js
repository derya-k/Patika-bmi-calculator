
import './App.css';
import React, { useState, useEffect } from 'react';
import Nav from  './components/Nav.js'
import './components/style/Nav.css'
import Calculate from  './components/Calculate.js';
import Info from  './components/Info.js';
import Result from './components/Result.js';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {

  //Define variables
  const [state,setState]=useState({
    weight:"",
    height:"",
    age:""
  });

  //Body Mass Index
  const [bmi,setBmi]=useState("")

  //Save data from Form 
  const bmiHandle=(e)=>{
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]:value
    });
  }
  
  //Calculate bmi and sava result
  const calculate=()=>{
    const result=state.weight/((state.height*state.height)/10000)
    setBmi(Math.round(result))
    
  }
  useEffect(()=>{
    calculate()
  },[state])
  
  

  //Sava all variables to local storage
  localStorage.setItem("weight",state.weight);
  localStorage.setItem("height",state.height);
  localStorage.setItem("age",state.age);
  localStorage.setItem("bmi",bmi);

  return (
    <Router>
      <div className="App">
        <Nav bmi={ bmi, state} />
        <Switch>
          <Route path="/" exact >
          <Calculate state={state} bmiHandle={bmiHandle} calculate={calculate}/>
          </Route>
          <Route path="/info" exact component={Info}>
          </Route >
            <Route path="/result" exact >
            <Result bmi={bmi} state={state}/>
          </Route>
          
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;

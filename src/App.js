
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Slider from './components/slider/Slider'
import Section from './components/Section/section'
import Main from './pages/Main/Main';
import React,{useState} from 'react';
import Admin from './pages/admin/admin';

function App() {
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket'))|| [])
  return (

    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
          <Header />
          <Navbar basket={basket}/>
            <Main setBasket={setBasket}/>
          </Route>
          <Route path="/contacts"> 
          <Header />
        <Navbar basket={basket}/>
         
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </div>
    </Router>



  );
}

export default App;


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

function App() {
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket'))|| [])
  return (

    <Router>
      <div className="App">
        <Header />
        <Navbar basket={basket}/>
        {/* <Slider />  */}
        {/* <Section /> */}

        <Switch>
          <Route exact path="/">
            <Main setBasket={setBasket}/>
          </Route>
          <Route path="/contacts">
            
          </Route>
        </Switch>
      </div>
    </Router>



  );
}

export default App;

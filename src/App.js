
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
import React, { useEffect, useState } from 'react';
import Admin from './pages/admin/admin';
import PublicRoute from './route/PublicRoute';
import PrivateRoute from './route/PrivateRoute'
import Dashboard from './pages/dashboard/Dashboard'


function App() {
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket')) || [])
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("auth")) || null);
  const [pizza, setPizza] = useState([]);
  

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(isAuth))
  }, [isAuth])
  return (

    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Navbar basket={basket} />
            <Main setBasket={setBasket} />
          </Route>

          <Route path="/contacts">
            <Header />
            <Navbar basket={basket} />

          </Route>

          <PublicRoute path="/admin" auth={isAuth} component={() => <Admin setIsAuth={setIsAuth} />} />
          {/* <Route path="/admin">
            <Admin setIsAuth={setIsAuth} />
          </Route> */}
             <PrivateRoute path="/dashboard" auth={isAuth} component={()=><Dashboard setIsAuth={setIsAuth} setPizza={setPizza} pizza={pizza} />}/>
          {/* <Route path="/dashboard">
            dashboard
          </Route> */}
        </Switch>
      </div>
    </Router>



  );
}

export default App;

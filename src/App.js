
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
import {useSelector} from 'react-redux'


function App() {
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket')) || [])
  // const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("auth")) || null);
  // const [pizza, setPizza] = useState([]);
  const authData = useSelector((state) => state.auth.data)


  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(authData))
  }, [authData])
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

          <PublicRoute path="/admin" 
          component={Admin}
          />
          
             <PrivateRoute path="/dashboard" 
             component={Dashboard}
             />
         
        </Switch>
      </div>
    </Router>



  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from "./Common/Home.js";
import Menu from "./Common/Menu.js";
import About from "./Common/About.js";
import Reservation from "./Common/Reservation.js";
import Contact from './Common/Contact.js'
import Login from "./Common/Login.js";
import Registration from './Common/Registration.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/about" component={About} />
          <Route exact path="/reservation" component={Reservation} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registration" component={Registration} />
        </Switch>
        <Header />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

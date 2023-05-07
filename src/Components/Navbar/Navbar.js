import React from 'react'
import { BiRestaurant } from 'react-icons/bi'
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [active, setActive] = React.useState('navBarActive');

  const toggleHamburger = () => {
    // toggle the active boolean in the state
    setActive(active === 'navBarActive'? 'navBarActive' : 'navBarInactive');
  };
  
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <div className="logo flex">
            <h1>
              {" "}
              <BiRestaurant className="icon" /> DineEasy
            </h1>
          </div>
        </div>

        <div className={active}>
          <div className="navBar">
            <ul className="navLists flex">

              <li className="navItem">
                <NavLink to="/" className="navLink">
                  Home
                </NavLink>
              </li>

              <li className="navItem">
                <NavLink to="/menu" className="navLink">
                  Menu
                </NavLink>
              </li>

              <li className="navItem">
                <NavLink to="/about" className="navLink">
                  About
                </NavLink>
              </li>

              <li className="navItem">
                <NavLink to="/reservation" className="navLink">
                  Reservation
                </NavLink>
              </li>

              <li className="navItem">
                <NavLink to="/contact" className="navLink">
                  Contact
                </NavLink>
              </li>

              <li className="navItem">
                <NavLink to="/contact" className="navLink">
                  Registration
                </NavLink>
              </li>

              <li className="navItem">
                <NavLink to="/contact" className="navLink">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </section>
  )
}

export default Navbar

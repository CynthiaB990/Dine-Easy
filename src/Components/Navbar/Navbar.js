import React from 'react'
import { BiRestaurant } from 'react-icons/bi'

function Navbar() {
  return (
    <nav className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <div className="logo flex">
            <h1>
              {" "}
              <BiRestaurant className="icon" /> DineEasy
            </h1>
          </div>
        </div>
      </header>
    </nav>
  )
}

export default Navbar

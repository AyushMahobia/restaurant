import React, { useState } from 'react'
import '../Styles/navbar.css'
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleClick = () =>{
    setToggleMenu(!toggleMenu)
  }
  return (
    <>
      <nav className={`${!toggleMenu?"hidden":""}`}>
        <div className="nav-logo">
          <h3>Steak House</h3>
        </div>

        <div className={`navigation ${toggleMenu ? "": "active"}`} >
        <span className="material-symbols-outlined menu menu-close" onClick={handleClick}>
            arrow_back
          </span>
          <ul onClick={handleClick}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="nav-btns">
          <Link to="/" className='nav-btn-book'>BOOK A TABLE</Link>
          <span className="material-symbols-outlined menu menu-open" onClick={handleClick}>
            menu
          </span>
         
        </div>
      </nav>
      <Outlet/>
    </>
  )
}

export default Navbar

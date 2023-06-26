import React, { useState } from 'react'
import '../Styles/navbar.css'
import { Outlet, Link, useLocation } from "react-router-dom";

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const handleClick = () => {
    setToggleMenu(!toggleMenu)
  }

  let location = useLocation();

  return (
    <>
      <nav className={`${!toggleMenu ? "hidden" : ""}`}>
        <div className="nav-logo">
          {/* <Link to="/"><h3>Steak House</h3></Link> */}
          <Link to="/"><img src="/logo.png" alt="/" className='logo'/></Link>
        </div>

        <div className={`navigation ${toggleMenu ? "" : "active"}`} >
          <span className="material-symbols-outlined menu menu-close" onClick={handleClick}>
            arrow_back
          </span>
          <ul>
            <li><Link to="/" className={`${location.pathname === '/' ? "color" : ""}`} onClick={handleClick}>Home</Link></li>
            <li><Link to="/about" className={`${location.pathname === '/about' ? "color" : ""}`} onClick={handleClick}>About</Link></li>
            <li><Link to="/menu" className={`${location.pathname === '/menu' ? "color" : ""}`} onClick={handleClick}>Menu</Link></li>
            <li><Link to="/contact" className={`${location.pathname === '/contact' ? "color" : ""}`} onClick={handleClick}>Contact</Link></li>
          </ul>
        </div>

        <div className="nav-btns">
          <Link to="/" className='nav-btn-book'>BOOK A TABLE</Link>
          <span className="material-symbols-outlined menu menu-open" onClick={handleClick}>
            menu
          </span>

        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar

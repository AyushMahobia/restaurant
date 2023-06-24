import React, { useState } from 'react'
import '../Styles/navbar.css'
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
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>

        <div className="nav-btns">
          <a href="/" className='nav-btn-book'>Book a Table</a>
          <span className="material-symbols-outlined menu menu-open" onClick={handleClick}>
            menu
          </span>
         
        </div>
      </nav>
    </>
  )
}

export default Navbar

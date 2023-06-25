import React from 'react'
import '../Styles/menu.css'
import { menuSection, menuCard, menus, beverages } from '../contants/menuConstant'
const Menu = () => {
  return (
    <>
      <section id='menu' className='other-hero-section'>
        <h2>Our Menu.</h2>
        <h4>Smoked Stories</h4>
      </section>
      <section className='menu-section'>
        <div className="container">
          <h2>{menuSection.title}</h2>
          <p className='menu-subtitle'>{menuSection.subtitle}</p>
          <p className='menu-description'>{menuSection.description}</p>
        </div>
      </section>

      <section className='card-section'>
        <div className="container cards">
          {menuCard.map((card, ind) => {
            return (
              <div className="card" key={ind}>
                <h5>{card.title}</h5>
                <span>{card.prize}</span>
              </div>
            )
          })}
        </div>
      </section>

      <section className="dish-section">
        <div className="container dishes">
          {menus.map((menu, ind) => {
            return (
              <div className="dish" key={ind}>
                <div className="dish-info">
                  <h5>{menu.title}</h5>
                  <p className='prize'>{menu.prize}</p>
                  <p className='dish-des'>{menu.description}</p>
                </div>
                <div className="dish-img">
                  <img src={`images/menu-img/${menu.img}.png`} alt="" />
                </div>

              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Menu

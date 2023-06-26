import React from 'react'
import '../Styles/menu.css'
import { menuSection } from '../contants/menuConstant'
import Cards from './Cards'
import Dish from './Dish'
import BestSeller from './BestSeller'
import Footer from './Footer'
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

      <BestSeller/>
      <Dish/>

      <section className="other-stuff">
        <div className="container other-stuff-list">
          <Cards/>
        </div>
      </section>

      <Footer/>
    </>
  )
}

export default Menu

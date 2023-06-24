import React from 'react'
import Navbar from './Navbar'
import '../Styles/hero.css'
import { homeTitle, homeAbout, foodTitle, foods } from '../contants/homeConstant'

const Home = () => {
  return (
    <>
      <Navbar />
      <header>
        <section className="hero-section"></section>
        <h1 className='hero-heading'>{homeTitle}</h1>
        <a href="/" className='hero-btn'>Make Reservation</a>
      </header>

      <section className='home-about-section'>
        <div className="container home-about-contant">
          <div className="home-about-img">
            <img src={`images/home-img/${homeAbout.img}.jpg`} alt="" />
          </div>
          <div className="contant">
            <h3>{homeAbout.title}</h3>
            <p>{homeAbout.description}</p>
            <a href="/" className='hero-btn'>Book a Table</a>
          </div>
        </div>
      </section>

      <section className="home-food-section">
        <div className="container">
          <div className='home-food-items'>
          <h3>{foodTitle}</h3>
            {foods.map((food, ind) => {
              return (
                <div className="item" key={ind}>
                  <img src={`images/home-img/${food.img}.jpg`} alt="/" />
                  <h4>{food.title}</h4>
                </div>
              )
            })}
          </div>

        </div>
      </section>
    </>
  )
}

export default Home

import React from 'react'
import { about, history } from '../contants/aboutConstant'
import '../Styles/about.css'
import aboutImg from '../assets/about-img/about-img.jpg'
import Customer from './Customer'
import Footer from './Footer'
const About = () => {
    return (
        <>
            <section id='about' className='other-hero-section'>
                <h2>{about.title}</h2>
                <h4>{about.description}</h4>
            </section>

            <section className='about-img'>
                <div className="container">
                    <img src={aboutImg} alt="/" />
                </div>
            </section>

            <section className="about-history">
                <div className="container history-content">
                    <h2>{history.title}</h2>
                    <div className="history-detail">
                        <h3>{history.subTitle}</h3>
                        <p>{history.des1}</p>
                        <p>{history.des2}</p>
                        <p>{history.des3}</p>
                    </div>
                </div>
            </section>

            <section className='static-section about-static-section'/>
            <Customer/>
            <Footer/>
        </>
    )
}

export default About

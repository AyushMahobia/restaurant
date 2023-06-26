import React from 'react'
import '../Styles/contact.css'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
import Footer from './Footer'
const Contact = () => {
  return (
    <>
      <section id='contact' className='other-hero-section'>
        <h2>Contact Us.</h2>
        <h4>Reserve A Table</h4>
      </section>

      <section className="contact-section">
        <div className="container contact-layout">
          <div className="contact-left-side">
            <ContactInfo/>
          </div>

          <div className="contact-right-side">
            <ContactForm/>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  )
}

export default Contact

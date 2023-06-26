import React from 'react'

const ContactInfo = () => {
    return (
        <>
            <div className="contact-info">
                <h3>Contact info</h3>
                <p><span className="material-symbols-outlined">
                    phone_in_talk
                </span> 929-242-6868</p>
                <p><span className="material-symbols-outlined">
                    mail
                </span> contact@info.com</p>
                <p><span className="material-symbols-outlined">
                    distance
                </span> 66 Ceres St San Francisco, California(CA), 94124</p>
            </div>
            <div className="opening-hour">
                <h3>Opening hours</h3>
                <p>Monday - Friday — 8:00 - 22:00</p>
                <p>Saturday - Sunday — 10:00 - 23:00</p>
            </div>
        </>
    )
}

export default ContactInfo

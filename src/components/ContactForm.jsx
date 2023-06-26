import React, { useState } from 'react'

const ContactForm = () => {
    const [info, setInfo] = useState(
        {
            name: "",
            email: "",
            message: ""
        }
    )
    const handleSumbit = () => {
        setInfo({});
        alert("Succefully sent an email👍")
    }
    return (
        <>
            <form onSubmit={handleSumbit}>
                <div className="name-input">
                    <label htmlFor="name">Name</label>
                    <div className="input-name-filed">
                        <div className="first-name">
                            <input type="text" name="name" id="name" required /><p>First</p>
                        </div>
                        <div className="last-name">
                            <input type="text" name="name" id="name" /><p>Last</p>
                        </div>

                    </div>

                </div>

                <div className="email-input">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>

                <div className="message-input">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="8" required></textarea>
                </div>

                <button type='submit' className='submit-btn'>Submit</button>
            </form>
        </>
    )
}

export default ContactForm

import React, { useState } from 'react'

const ContactForm = () => {
    const [info, setInfo] = useState({ firstName: "", lastName: "", email: "", message: "" })

    const onChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        setInfo({ firstName: "", lastName: "", email: "", message: "" })
        alert("Succefully sent an email👍")
    }

    return (
        <>
            <form onSubmit={handleSumbit}>
                <div className="name-input">
                    <label htmlFor="name">Name</label>
                    <div className="input-name-filed">
                        <div className="first-name">
                            <input type="text" name="firstName" id="name" onChange={onChange} value={info.firstName} required /><p>First</p>
                        </div>
                        <div className="last-name">
                            <input type="text" name="lastName" onChange={onChange} value={info.lastName} id="name" required /><p>Last</p>
                        </div>
                    </div>
                </div>

                <div className="email-input">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={onChange} value={info.email} required />
                </div>

                <div className="message-input">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="8" onChange={onChange} value={info.message} required></textarea>
                </div>

                <button type='submit' className='submit-btn'>Submit</button>
            </form>
        </>
    )
}

export default ContactForm

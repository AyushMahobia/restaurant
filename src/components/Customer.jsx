import React from 'react'
import '../Styles/customer.css'
import { customerTitle, customers } from '../contants/homeConstant'

const Customer = () => {
    return (
        <>
            <section className='home-customer-section'>
                <div className="container">
                    <div className='home-customer'>
                        <h3>{customerTitle}</h3>
                        {customers.map((customer, ind) => {
                            return (
                                <div className="customer-details" key={ind}>
                                    <div className="customer-name">
                                        <img src={`images/home-img/${customer.img}.jpg`} alt="/" />
                                        <h5>{customer.title}</h5>

                                    </div>
                                    <p>{customer.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Customer

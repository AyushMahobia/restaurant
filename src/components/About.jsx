import React from 'react'
import { about } from '../contants/aboutConstant'

const About = () => {
    return (
        <>
            <section id='about'>
                <h1>{about.title}</h1>
                <h4>{about.description}</h4>
            </section>
        </>
    )
}

export default About

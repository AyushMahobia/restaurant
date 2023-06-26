import React from 'react'
import {beverages, desserts, dessertsTitle, beverageTitle } from '../contants/menuConstant'
import Card from './Card'

const Cards = () => {
    return (
        <>
            <div className="beverages">
                <h3>{beverageTitle}</h3>
                <Card stuff={beverages}/>
            </div>
            <div className="desserts">
                <h3>{dessertsTitle}</h3>
                <Card stuff={desserts}/>
            </div>
        </>
    )
}

export default Cards

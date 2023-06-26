import React from 'react'
import { menuCard } from '../contants/menuConstant'
const BestSeller = () => {
  return (
    <>
      <section className='card-section'>
        <div className="container cards">
          {menuCard.map((card, ind) => {
            return (
              <div className="card" key={ind}>
                <h5>{card.title}</h5>
                <span>{card.prize}</span>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default BestSeller

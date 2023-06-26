import React from 'react'
import { menus } from '../contants/menuConstant'
const Dish = () => {
    return (
        <>
            <section className="dish-section">
                <div className="container dishes">
                    {menus.map((menu, ind) => {
                        return (
                            <div className="dish" key={ind}>
                                <div className="dish-info">
                                    <h5>{menu.title}</h5>
                                    <p className='prize'>{menu.prize}</p>
                                    <p className='dish-des'>{menu.description}</p>
                                </div>
                                <div className="dish-img">
                                    <img src={`images/menu-img/${menu.img}.png`} alt="" />
                                </div>

                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Dish

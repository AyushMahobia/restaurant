import React from 'react'

const Card = ({stuff}) => {
    return (
        <>
            {stuff.map((item, ind) => {
                return (
                    <div className="other-item" key={ind}>
                        <div className="other-detail">
                            <p>{item.title}</p>
                            <p>{item.tags}</p>
                        </div>
                        <p className='other-prize'>{item.prize}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Card

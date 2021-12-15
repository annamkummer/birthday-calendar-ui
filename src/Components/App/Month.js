import React from 'react'
import './Month.css'

const Month = ( { name } ) => {

    return (
        <div className='month-card'>
            <h2 className='month-name'>{name}</h2>

        </div>
    )
}

export default Month
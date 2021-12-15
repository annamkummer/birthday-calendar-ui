import React from 'react'
import './BdayGrid.css'
import Month from './Month'

const BdayGrid = ( { birthdays, months } ) => {
    console.log(months[0].name)
    const monthCards = months.map(month => {
        return <Month 
                    name={month.name}
                />
    })

    return (
        <div className='bday-container'>
            {monthCards}
        </div>
    )
}

export default BdayGrid
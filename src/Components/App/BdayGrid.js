import React from 'react'
import './BdayGrid.css'
import Month from './Month'

const BdayGrid = ( { birthdays, months } ) => {
    const monthCards = months.map(month => {
        const monthBdays = birthdays.filter(birthday => {
            return birthday.month === month.id
        })

        return <Month 
                    key={month.id}
                    name={month.name}
                    birthdays={monthBdays}
                />
    })

    return (
        <div className='bday-container'>
            {monthCards}
        </div>
    )
}

export default BdayGrid
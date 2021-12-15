import React from 'react'
import './Month.css'

const Month = ( { name, birthdays } ) => {
    const birthdayKids = birthdays.map(birthday => {
        return <h3 className='birthday-kid' key={birthday.id}>{`${birthday.name}: ${birthday.month}/${birthday.day}`}</h3>
    })

    return (
        <div className='month-card'>
            <h2 className='month-name'>{name}</h2>
            {birthdayKids}
        </div>
    )
}

export default Month
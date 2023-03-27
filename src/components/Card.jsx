import React from 'react'
import './card.css'

function Card({ 
    location,
    temp,
    minTemp,
    maxTemp,
    humidity,
    windSpeed
}) 
{
    return (
        <div className='card'>
            <h1 className='place'>{location}</h1>
            <hr className='hr'/>
            <p>temperature : {temp}°c</p>
            <p>Minimum temperature : {minTemp}°c</p>
            <p>Maximum temperature : {maxTemp}°c</p>
            <p>humidity : {humidity}°c</p>
            <p>wind speed : {windSpeed} km/h</p>
        </div>
    )
}

export default Card
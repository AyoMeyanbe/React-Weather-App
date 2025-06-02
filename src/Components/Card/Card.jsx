import React, { useState } from 'react'
import './Card.css'
import Search from '../Search/Search'

const Card = () => {

  return (
    <div className='card'>
      <Search city = {city}/>
    </div>
  )
  
}

export default Card

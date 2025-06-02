import React, { useRef, useState } from 'react'
import './Search.css'
import SearchImg from "../../Images/search.png";

const Search = ({city}) => {
    
  return (
    <div className='search'>
      <input type="text" placeholder="Enter City Name" spellcheck="false"/>
            <button ><img src={SearchImg} onClick={searchCity}/></button>
    </div>
  )
}

export default Search

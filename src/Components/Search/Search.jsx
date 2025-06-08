import React, { useRef, useState } from 'react'
import './Search.css'
import SearchImg from "../../Images/search.png";
import rainImg from "../../Images/rain.png";
import humidityImg from "../../Images/humidity.png";
import windImg from "../../Images/wind.png";

const Search = () => {

    const [city, setCity] = useState('');
    const result = 'this should be a state';
    const handleOnChange = (e) =>{
        setCity(e.target.value);
    }
    const handleSubmit =(e) =>{
      e.preventDefault();

      //fetch from weather api here
      console.log(city);
    }

  return (
    <form onSubmit={handleSubmit}>
      <div className='search'>
        <input
            type="text"
            placeholder="Enter City Name"
            value={city}
            spellCheck="false"
            onChange={handleOnChange}
        />
        <button type="submit" ><img src={SearchImg} alt="Search" /></button>
      </div>
        {result ? (
            <div className="weather">
                <img src={rainImg} className="weather-icon"  alt='weather'/>
                <h1 className="temp">22°C</h1>
                <h2 className="city">New York</h2>
                <div className="details">
                    <div className="col">
                        <img src={humidityImg} alt='img' />
                        <div>
                            <p className="humidity">50%</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className="col">
                        <img src={windImg} alt='wind' />
                        <div>
                            <p className="wind">15 km/hr</p>
                            <p>Wind Speed</p>
                        </div>
                    </div>
                </div>
            </div>
        ):(
            <div>No result found</div>
        ) }


    </form>
    
  )
}

export default Search

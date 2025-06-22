import React, { useRef, useState } from "react";
import "./Search.css";
import SearchImg from "../../Images/search.png";
import humidityImg from "../../Images/humidity.png";
import windImg from "../../Images/wind.png";
import Rain from "../../Images/rain.png";
import Clouds from "../../Images/clouds.png";
import Clear from "../../Images/clear.png";
import Drizzle from "../../Images/drizzle.png";
import Mist from "../../Images/mist.png";

const Search = () => {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(true);
  const [weatherData, setWeatherData] = useState({});
  const weatherIcon = useRef();
  const handleOnChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(city);
    //fetch from weather api here
    checkWeather(city);
  };

  const apiKey = "7829d589574e6a7f335213e18cd7effa";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404) {
        setResult(false);
    } else{
        var data = await response.json();
        const cityInfo = {
            name : data.name,
            temp: Math.round(data.main.temp) + "°C",
            humidity: data.main.humidity + "%",
            wind: data.wind.speed + " km/hr",
            weatherImg: data.weather[0].main
        }
         if (cityInfo.weatherImg == "Clouds") {
                weatherIcon.src = {Clouds};
            } else if(cityInfo.weatherImg == "Clear") {
              Clear = "";
            } else if(cityInfo.weatherImg == "Rain") {
                weatherIcon.src = {Rain};
            } else if(cityInfo.weatherImg == "Drizzle") {
                weatherIcon.src = {Drizzle};
            } else if(cityInfo.weatherImg == "Mist") {
                weatherIcon.src = {Mist};
            }
        setWeatherData(cityInfo);
        console.log(data);
        setResult(true);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="search">
        <input
          type="text"
          placeholder="Enter City Name"
          value={city}
          spellCheck="false"
          onChange={handleOnChange}
        />
        <button type="submit">
          <img src={SearchImg} alt="Search" />
        </button>
      </div>
      {result ? (
        <div className="weather">
          <img ref={weatherIcon} className="weather-icon" alt="weather" />
          <h1 className="temp">{weatherData.temp}</h1>
          <h2 className="city">{weatherData.name}</h2>
          <div className="details">
            <div className="col">
              <img src={humidityImg} alt="img" />
              <div>
                <p className="humidity">{weatherData.humidity}</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="col">
              <img src={windImg} alt="wind" />
              <div>
                <p className="wind">{weatherData.wind}</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="error">No Results Found</div>
      )}
    </form>
  );
};

export default Search;

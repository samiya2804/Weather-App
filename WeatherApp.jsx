import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo]=useState(
        {
            city : "Lucknow",
            feelsLike: 27.59,
            humidity: 39,
            temp:27.99,
            tempMax :  27.99,
            tempMin:27.99,
            weather: "haze",
        }
    );
    let updateInfo = (newInfo)=>{
    setWeatherInfo(newInfo);
    }
    
    return (
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}
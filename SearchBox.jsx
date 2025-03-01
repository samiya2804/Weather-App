import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let [city , setCity] = useState("");
    let [error , setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY =  "9c12c0e6601406286bffaffdc8d50271";
    let getWeatherInfo = async ()=>{
        // eslint-disable-next-line no-useless-catch
        try{
       let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonRes = await res.json();
       console.log(jsonRes);

       let result = {
        city : city,
        temp : jsonRes.main.temp,
        tempMin: jsonRes.main.temp_min,
        tempMax: jsonRes.main.temp_max,
        humidity: jsonRes.main.humidity,
        feelsLike : jsonRes.main.feels_like,
        weather : jsonRes.weather[0].description,
       };
       console.log(result);
       return result;
    }catch(error){
        throw error;
    }
    };
    let handleChange = (event)=>{
    setCity(event.target.value);
    };
    let handleSubmit = async(event)=>{
        try{

        event.preventDefault();
        console.log(city);
        setCity("");
       let newInfo = await getWeatherInfo();
       updateInfo(newInfo);
        // eslint-disable-next-line no-unused-vars
        }catch(err){
            setError(true)
        }
    };
    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" 
            variant="outlined"
             required value={city} 
             onChange={handleChange}/>
            <br></br><br></br>
            <Button variant="contained" 
            type='submit'>
              Search
            </Button>
            {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    )
}
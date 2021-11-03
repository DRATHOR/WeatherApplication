import React, {Fragment,useEffect,useState} from 'react'
import './weather.css'
import Image from './image/Image'

function Weather() {
  
    const [data,setData]=useState([]);
    const [coord,setCoord]=useState([]);
    const [weather,setWeather]=useState([]);
    const [temperature,setTemperature]=useState([]);
    const [clouds,setClouds]=useState([]);
    const [wind,setWind]=useState([]);
    const [sys,setSys]=useState([]);
    const [city,setCity]=useState('bangalore');
    const [vailidation,setVailidation]=useState(false);


    const MY_URL='http://api.openweathermap.org/data/2.5/weather';
    const MY_API_KEY='888944d555266bc0862abc2ca2187c4f';
            
    // const Result;
        useEffect(()=>{
            fetch(`${MY_URL}?q=${city}&APPID=${MY_API_KEY}&units=metric`
            ).then(response=>response.json())
            .then(data=>{
                        if(data.cod==='404'||data.cod==='400'){
                            setVailidation(true)
                            throw new Error("not found")
                        }else{
                            setVailidation(false)
                            setCoord(data.coord)
                            setData(data.name)
                            setWeather(Object.values(data.weather))
                            setTemperature(data.main)
                            setClouds(data.clouds)
                            setWind(data.wind)
                            setSys(data.sys)
                        }
                        
                       
                // coord.push(data)
                //setData(Object.values(data))
            })//(Object.values(data)))
            .catch((error) => {
                console.log(error)
              });
        },[city]);
        const inputCitySearch=(props)=>{
            setCity(props);
        }
        //console.log(data.map(item=>item));
        // console.log('hi',weather.map(item=>console.log("item:",item.main)))
    return (
        <Fragment>
            
{/* header of the application */}
            <div className='header'>
            {/* <div className='logo'></div>
            <div className='search'>
            <input type='text' value={city} onChange={(e)=>{setCity(e.target.value)}}/>
            <button>Search</button> 
            </div>             */}
        </div>
{/* Results of input search */}
            <div>
            {weather.map(item=><Image imagebg={item.main}/>)}
            
            </div>
            {!vailidation ? <div className="weather">
                <h3>Location: {data}</h3>
                <h2></h2> 
                <h3>Longitude: {coord.lon}</h3>
                <h3>Latitude: {coord.lat}</h3>
                {weather.map(item=><h3>{item.main}</h3>)}
                <h3>temp: {temperature.temp}C</h3><h3>feels_like: {temperature.feels_like}C</h3><h3>temp_minimum: {temperature.temp_min}C</h3>
                <h3>clouds: {clouds.all}%</h3>
                <h3>winds: {wind.speed}km/h</h3>
                <h3>countary: {sys.country}</h3>
              

            </div>:<h1>data not found</h1>}
        </Fragment>
        
    )
}

export default Weather;

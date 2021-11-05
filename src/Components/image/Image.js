import React, { Fragment,useState,useEffect } from 'react'
import { imageStore } from './imageStore'
import './Image.css'
import {GoSearch} from 'react-icons/go'
// import TempBar from '../tempBar/tempBar';
// import Clouds from '../Clouds/clouds';
import EveryDaysWeather from '../everyDaysWeather';
//import { Clouds } from '../Clouds/clouds';

function Image() {
  //  const imgbg=imagebg.toUpperCase();
    const [imgbg,setImgbg]=useState("");
    const [selectImage,setSelectImage]=useState(imageStore.mist);
     const MY_URL='http://api.openweathermap.org/data/2.5/weather';
    //const MY_URL='http://api.openweathermap.org/data/2.5/forecast?id=524901';
    const MY_API_KEY='888944d555266bc0862abc2ca2187c4f';

  
        // const [data,setData]=useState([]);
        // const [coord,setCoord]=useState([]);
        // const [weather,setWeather]=useState([]);
        //const [temperature,setTemperature]=useState([]);
        // const [clouds,setClouds]=useState([]);
        // const [wind,setWind]=useState([]);
        // const [sys,setSys]=useState([]);
        const [city,setCity]=useState('bangalore');
        // const [vailidation,setVailidation]=useState(false);
    
    
       
        // const Result;
            useEffect(()=>{
                fetch(`${MY_URL}?q=${city}&APPID=${MY_API_KEY}&units=metric`
                ).then(response=>response.json())
                .then(data=>{
                            if(data.cod==='404'||data.cod==='400'){
                                //setVailidation(true)
                                throw new Error("not found")
                            }
                            else{
                                // setVailidation(false)
                                // setCoord(data.coord)
                                // setData(data.name)
                                // setWeather(Object.values(data.weather))
                                //setTemperature(data.main)
                                // setClouds(data.clouds)
                                // setWind(data.wind)
                                // setSys(data.sys)
                                //console.log('weatherdata',data.weather[0].main)
                                setImgbg(data.weather[0].main)
                                //console.log()
                            }
                })
                .catch((error) => {
                    console.log(error)
                  });
            },[city]);
   
  
     const fetchImage=(e)=>{

     //setImgbg(weather.map(item=>item.main))
        //setImgbg(imgbg.toString().toUpperCase())
        //const Imgbg=imgbg.toUpperCase();
       // setImgbg(imgbg.toUpperCase)
       if(imgbg.toUpperCase()==="CLOUDS"){
        setSelectImage(imageStore.Clouds);
       }else if(imgbg.toUpperCase()==="MIST"){
        setSelectImage(imageStore.mist);
       }else if(imgbg.toUpperCase()==="HAZE"){
        setSelectImage(imageStore.haze);
       }else if(imgbg.toUpperCase()==="CLEAR"){
        setSelectImage(imageStore.clear);
       }
       else{
        setSelectImage(imageStore.clear);  
       }
    //    console.log(temperature.temp)
    //    console.log("devendra:",imgbg.toUpperCase())
         
   }
    return (
        <Fragment>

                <div className='image_box' style={{backgroundImage:`url(${selectImage})`}}>

                 <div className="image_box_search">
                    
                     <input className="image_box_input" defaultValue={city} type="text" autoFocus 
                     onChange={(e)=>{setCity(e.target.value)}}/>
                     <GoSearch onClick={fetchImage}/>
                     
                 </div>
                 <div className="image_box_searched_city">
                    <h3 style={{color:'#193366'}}>{city.toUpperCase()}</h3>
                </div>
     
             </div>   
             {/* <div className="temperature">
             {/* <TempBar
                 feelLike={temperature.feels_like}
                 tempMinimum={temperature.temp_min}
                  temp={temperature.temp}
                  /> */}
                  {/* {Clouds.map(item=>{console.log(item.CloudSunFill)})} */}
                {/* <Clouds/> */}
                 {/* </div>    */} 


                 <EveryDaysWeather city={city}/>
                 

        </Fragment>
        
    )
}

export default Image

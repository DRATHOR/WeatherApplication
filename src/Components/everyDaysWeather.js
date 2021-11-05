import React,{useState,useEffect} from 'react'
import DaysReport from './DaysReport';
import './daysReport.css'

function EveryDaysWeather({city}) {
    // http://api.openweathermap.org/data/2.5/forecast?id=524901&q=sagar&appid=888944d555266bc0862abc2ca2187c4f

    const MY_URL='http://api.openweathermap.org/data/2.5/forecast?id=524901';
    const MY_API_KEY='888944d555266bc0862abc2ca2187c4f';
   // const [cityTrueFalse,setCityTrueFalse]=useState(); 
    const [days,setDays]=useState([]); 
  
        useEffect(()=>{
            fetch(`${MY_URL}&q=${city}&appid=${MY_API_KEY}&units=metric`)
           // fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&q=sagar&appid=888944d555266bc0862abc2ca2187c4f')
        .then(response=>response.json())
        .then(data=>{
           // console.log(data.list)
            if(data.list){
                setDays(data.list);
                //setCityTrueFalse(false)
            }
            
           
          
        }
        ).catch(error=>{
            console.log(error);
        })
            
        },[city]);

const getAmPm=(item)=>{ const d=new Date(item.dt*1000).getHours();
        if(d<24 && d>=12){
             return 'pm';
            }else{
            return 'am';
            }
    }
   
    return (
       
        <div className="weatherDetails">
         
           {days?.slice(0,35).map(item=>{
               return <DaysReport
               Day={(new Date(item.dt*1000).getDay())}
               Time={(new Date(item.dt*1000).getHours()+':'+new Date(item.dt*1000).getMinutes())+getAmPm(item)}
               Humidity={(item.clouds.all)}
               currentTemp={(item.main.temp)}
               currentTempFeel={(item.main.feels_like)}
               currentWeather={(item.weather[0].main)} />
              
          })}
        </div>
        
    )
}

export default EveryDaysWeather;

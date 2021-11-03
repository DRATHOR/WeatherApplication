import React from 'react'
import Clouds from './Clouds/clouds'
import './daysReport.css'


function DaysReport(props) {
    const weakdays=[
        "Sun",
         "Mon",
         "Tue",
        "Wed",
        "Thu",
        "Fri", 
        "Sat"
    ]
   
    return (
        // <div style={{background:'red',width:'100px',height:'150px',padding:'20px'}}>
           <div className="weatherReport"> 
            <div><strong>{weakdays[props.Day]}</strong></div>
            <div>{props.Time}</div>
            <div><Clouds currentWeather={props.currentWeather}/></div>
            <div>{props.currentWeather}</div>
            <div>{props.Humidity}%</div>
            <div>{props.currentTemp}C</div>
            <div>{props.currentTempFeel}C</div>
           
            {/* <div><Clouds currentWeather={props.currentWeather}/></div> */}
          
            
        </div>
    )
}

export default DaysReport

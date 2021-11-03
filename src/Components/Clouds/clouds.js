import { BsCloudSunFill,
    BsCloudSnowFill,
    BsCloudSleetFill,
    BsFillCloudSunFill,
    BsFillCloudsFill,
    BsFillSunFill} from 'react-icons/bs' 
import {FaCloudShowersHeavy,
    FaCloudSunRain,
    FaCloudSun}from 'react-icons/fa';

import React from 'react'

function Clouds({currentWeather}) {
   // console.log(currentWeather==='Clouds')
   const allClouds=[
   { id:'Mist',logo:<BsCloudSunFill style={{color:'#b3cccc'}}/>},
   { id:'Haze',logo:<BsCloudSnowFill style={{color:'#b3cccc'}}/>},
    {id:<BsCloudSleetFill/>},
   { id:<BsFillCloudSunFill/>},
   { id:'Clouds',logo:<BsFillCloudsFill style={{color:'#b3cccc'}}/>},
    {id:'Clear',logo:<BsFillSunFill style={{color:'#ffe066'}}/>},
    {id:'Rain',logo:<FaCloudShowersHeavy style={{color:'#b3cccc'}}/>},
    {id:<FaCloudSunRain/>},
    {id:<FaCloudSun/>}
    ]
    const selectClouds=()=>{
        for(let x in allClouds){
            if(allClouds[x].id===currentWeather)
            return (
                allClouds[x].logo
          )}
    }
   
    return (
        <div style={{fontSize:'50px',padding:'2px', display:'flex',justifyContent:'space-between'}}>
            
                <div>{selectClouds()}</div>

        </div>
    )
}

export default Clouds;


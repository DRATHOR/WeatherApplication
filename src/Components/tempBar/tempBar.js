import React, { Fragment } from 'react'
import './tempBar.css'

function TempBar({temp,feelLike,tempMinimum}) {
    return (
        <Fragment>
            <div className="temp">

            <div className="temp_details">
                <h5> Tempreture: {temp}</h5>
                <h5>Real Feel: {feelLike}</h5>
                <h5>Min-Tempreture: {tempMinimum}</h5>
            </div>
            <div className="bar">
            <div className="bar_mov" style={{height:`${temp*1.5}px`}}></div>
            {console.log(temp)}

        </div>

            </div>
            
        </Fragment>
        
    )
}

export default TempBar;

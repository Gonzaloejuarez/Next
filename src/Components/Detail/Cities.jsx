import React from "react";
import { Link } from "react-router-dom";
import './Cities.scss'
/* import Nav from "../Nav/Nav"; */

export const Ciudad = ({city,img}) => {
        return(
            <div className="ante-container">
                {city ?
                <div className='todo-container'> 
                    <div >
                    <h2 className='name'>{city.name}</h2>
                    <div className="container-datos">
                    <div className='datos'>
                        <div>Temperature: {city.temp} ºC</div>
                        <div>Climate: {city.weather}</div>
                        <div>Wind: {city.wind} km/h</div>
                        <div>Amount of clouds: {city.clouds}</div>
                        <div>Latitude: {city.latitud}º</div>
                        <div>Length: {city.longitud}º</div>
                        <img>{img}</img>
                    </div>
                    </div>
            </div>
                </div>:
                <div>
                    no </div> 
                }
            </div>
        )
}

export default Ciudad
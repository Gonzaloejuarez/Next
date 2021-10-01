import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav/Nav";

export const Ciudad = ({city}) => {
   if(city){
    return (
        <>
        <Nav />
        <div>
                <div className="container">
                    <div>
                    <h2>{city.name}</h2>
                    <div>

                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
                    </div>
            </div>
        </div>
        </>
    )
   }
   else{
        return (
            <div> no </div>
           );
        }
}

export default Ciudad
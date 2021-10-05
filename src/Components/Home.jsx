import React, {useState} from "react";
import Search from "./Nav/Search";
import Cards from "./Card/Cards";
import Nav from "./Nav/Nav";
import '../Scss/Home.scss'
export const Home =() => {
  const [cities, setCities] = useState([]);
  function onClose(id) {
  setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
  //Llamado a la API del clima
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=fa03081aa1e5c64b53d46ccbf21237e4&&units=metric`)
    .then(r => r.json())
    .then((recurso) => {
      if(recurso.main !== undefined){
        const ciudad = {
          min: Math.round(recurso.main.temp_min, -1),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon,
          mapaSun: recurso.coord.lon,
          mapaSet : recurso.coord.lat
        };
        setCities(oldCities => [...oldCities, ciudad]);
      } else {
        alert("Ciudad no encontrada");
      }
    });
}
function onFilter(ciudadId) {
  let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
  if(ciudad.length > 0) {
      return ciudad[0];
  } else {
      return null;
  }
}
  return(
  <div className="todo">
      <div>
        <Nav />
         <div className='search-send'>
          <Search onSearch={onSearch}/>
         </div>
         <div className='right'>
         <Cards cities={cities} onClose={onClose}/>
         </div>
         </div>
      </div>
)
}

export default Home;
import React from "react";
import * as AiIcons from 'react-icons/ai';
import { Link } from "react-router-dom";
import './Card.scss';
export const Card =({min, max, name, img, onClose, id}) => {

  
return(
    <div className='cardContainer' >
        <div className='close-x'>
            
            <AiIcons.AiOutlineCloseCircle onClick={onClose} />
           
        </div>
        {/* <Search onSearch={onSearch}/> */}
            <div className='img-clima'>
              <img  src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
        <div className='detail' >
        <Link className='Link' to={`/ciudad/${id}`}>
          <h5 className='name-title'>{name}</h5>
        </Link>
        </div>
          <div className='temperatura'>
            <div className='temps'>
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div className='temps'>
              <p>Max</p>
              <p>{max}°</p>
            </div>
          </div>
      </div>
)
}
export default Card
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './Nav.scss'
import { IconContext } from "react-icons/lib";
import Options from "./Options";
import imga from '../../img/clima.png'
import Search from "./Search";
export const Nav = () => {
const [user, setUser] = useState(false);

const handleFunction = () => setUser(!user)
    return(
  
        <IconContext.Provider value={{color : 'black'}}>
            <div className='navbar'>
            <Link to='#' className='menu-bars' >
                <FaIcons.FaBars onClick={handleFunction}/>
            </Link>
            <div className='NextClima'>
            <p>NextClima</p>
            <img className='imagen_clima' src={imga}/>
            </div>
            
            </div>
            <nav className={user ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={handleFunction}>
                    <li className="navbar-toggle">
                     <Link to="#" className="menu-bars">
                         <AiIcons.AiOutlineClose />
                     </Link> 
                    </li>  
                    {Options.map((el , index) => {
                        return(
                            <li key={index} className={el.cName}>
                                <Link to={el.path} className="probando">
                                    {el.icon}
                                    <span>{el.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                    <li className='nav-text'>
                        
                        <a className="descargar-name" download='' href="../../GonzaloJuarez.pdf"> <AiIcons.AiOutlineDownload  className="descargar"/> Download CV</a>
                    </li>
                </ul>
            </nav>
        </IconContext.Provider>
    )

}

export default Nav;
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './Nav.scss'
import { IconContext } from "react-icons/lib";
import Options from "./Options";
import Search from "./Search";
export const Nav = () => {
const [user, setUser] = useState(false);

const handleFunction = () => setUser(!user)
    return(
        <>
        <IconContext.Provider value={{color : '#fff'}}>
            <div className='navbar'>
            <Link to='#' className='menu-bars' >
                <FaIcons.FaBars onClick={handleFunction}/>
            </Link>
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
                                <Link to={el.path}>
                                    {el.icon}
                                    <span>{el.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    )

}

export default Nav;
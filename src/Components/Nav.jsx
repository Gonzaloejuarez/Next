import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './Nav.scss'
export const Nav = () => {
const [user, setUser] = useState(false);

const handleFunction = () => {
    if(!user){
        setUser(true)
    }else{
        setUser(false)
    }
}
    return(
        <div >
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
            <div className='container'>
            {/* <i class="uil uil-align-left"></i> */}
                <button onClick={handleFunction}>
                <i class="uil uil-align-left"></i>
                </button>
                {user?
                <div>
                
                </div>
                :
                <div className='nav'> 
                <article>
                    <Link to='/'>Inicio </Link>
                </article>
                <article>
                    <Link to='/AboutMe'>AboutMe </Link>
                </article>
                </div>
                
            }   
            </div>
        </div>
    )

}

export default Nav;
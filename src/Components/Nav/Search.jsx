import React,{useState} from "react"
import './Nav.scss';
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
export const Search = ({onSearch}) => {
    const [city, setCity] = useState('')
   const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city)
    setCity('')
   }
    return(
        <div>
        <form className='input-center' onSubmit={handleSubmit}>
        <input className='input-load' type="text" name="" id="" placeholder='Search city...'  value={city}  onChange={e =>setCity(e.target.value) }/>
        <div className='search'><FaIcons.FaSearch onClick={handleSubmit}/></div>
        </form>
        </div>
    )
}
export default Search
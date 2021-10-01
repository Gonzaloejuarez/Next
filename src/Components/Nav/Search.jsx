import React,{useState} from "react"

export const Search = ({onSearch}) => {
    const [city, setCity] = useState('')
    return(
        <div>
        <form onSubmit={(e) => {e.preventDefault();onSearch(city);setCity('')}}>
        <input type="text" name="" id="" placeholder='Search city...'  value={city}  onChange={e =>setCity(e.target.value) }/>
        <button>Send</button>
        </form>
        </div>
    )
}
export default Search
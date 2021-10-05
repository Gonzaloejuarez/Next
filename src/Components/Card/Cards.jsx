import Nav from "../Nav/Nav"
import Card from "./Card"
import './Cards.scss'
export const Cards = (props) => {
    return(
        <div className='cards-ever'>
         
        { props.cities.map(c => <Card
          key={c.id}
          id={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => props.onClose(c.id)}
        /> )}
    </div>
    )
}

export default Cards
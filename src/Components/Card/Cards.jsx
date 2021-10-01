import Card from "./Card"
import './Cards.scss'
export const Cards = ({cities,onClose}) => {

    return(
        <div className='cards-ever'>
        { cities.map(c => <Card
          key={c.id}
          id={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
        /> )}
    </div>
    )
}

export default Cards
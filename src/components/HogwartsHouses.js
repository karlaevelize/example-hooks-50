import React, {useState} from "react"
import HouseCard from "./HouseCard"

export default function HogwartsHouses(){

  const data = [
    {
      id: 1,
      house: "Gryffindor",
      imageUrl: "https://i.imgur.com/jnHkdOy.gif"
    },
    {
      id: 2,
      house: "Hufflepuff",
      imageUrl: "https://i.imgur.com/cV2E3T0.gif"
    },
    {
      id: 3,
      house: "Ravenclaw",
      imageUrl: "https://i.imgur.com/tpBdVgT.gif"
    },
    {
      id: 4,
      house: "Slytherin",
      imageUrl: "https://i.imgur.com/NGKcOK5.gif"
    }
  ]

  const [houses, setHouses] = useState(data)

  const toggle = () => {
    houses.length > 2 ? setHouses([]) : setHouses(data)
  }

  return (
    <div>
      <button onClick={toggle}>Clear</button>
      {houses.map(house => {
        return (
          <div key={house.id}>
            <HouseCard house={house.house} imageUrl={house.imageUrl}/>
            {/* <h2>{house.house}</h2>
            <img src={house.imageUrl}/> */}
          </div>
        )
      })}
    </div>
  )
}
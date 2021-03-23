import React, {useState, useEffect} from "react"
import axios from "axios"

//What are we going to do now?
// 1. Fetch data (useEffect, axios)
// 2. Put the data in our local state (useState)
// 3. Display the data (map)

//steps you MUST ALWAYS take
// 1. write a function to fetch the data
// 2. define a const response/res
// 3. use axios.get(), you can also use fetch
// 4. console.log the response you get NEVER SKIP
// 5. check where is the data you need, avoid adding extra stuff to the state
// 6. put the data in the local state

export default function FetchingData(){

  const [catFacts, setCatFacts] = useState()

  console.log("state", catFacts)

  useEffect(() => {
    async function fetchData(){
      const response = await axios.get('https://cat-fact.herokuapp.com/facts') 
      console.log("response.data", response.data)
      setCatFacts(response.data)
    }
    fetchData()
  }, [])

  console.log("hello") //added the console.log so you can see the flow

  return (
    <div>
      {!catFacts ? "Loading" : catFacts.map(fact => {
        return (
          <div key={fact._id}>
           <p> {fact.text}</p>
          </div>
        )
      })}
    </div>
  )
}
import React, {useState} from "react"

export default function LikeCounter(){
 
  const [likes, setLikes] = useState(0)
  const [text, setText] = useState(true)

  console.log(likes)
  console.log(text)

  return (
    <div>
      <button onClick={() => setLikes(likes + 1)}>+ 1</button>
      <button onClick={() => setLikes(likes - 1)}>- 1</button>
      <p>{likes}</p>
      <button onClick={() => setText(!text)}>{text ? "like" : "dislike"}</button>
    </div>
  )
}
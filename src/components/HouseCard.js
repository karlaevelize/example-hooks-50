export default function HouseCard(props){
  return (
    <div>
      <h2>{props.house}</h2>
      <img src={props.imageUrl}/>
    </div>
  )
}
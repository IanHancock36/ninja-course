import {useState} from 'react'
import './App.css';


function App() {

  const [events,setEvents] = useState([
    {title: "Ian loves Cake", id:1},
    {title: "Ian eats the Cake", id:2},
    {title: "Ian stomach is upset", id:3},
  ])
  const handleCLick = (id) => {
      console.log(id)
   setEvents(events.filter((event)=> {
      return id !== event.id
   }))
  }

  return (
    <div className="App">
    {events.map((event, index)=>(
      <div key={event.id}>
        <h2>{index} - {event.title}</h2>
        <button onClick={()=> handleCLick(event.id)}>delete event</button>
      </div>
    ))}
    
    </div>

  );
}

export default App;

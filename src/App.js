import { useState } from 'react'
import ReactDom from 'react-dom'
import './App.css';
import Title from './components/Title'
import Modal from './components/Modal'
import NewEventForm from './components/NewEventForm';
function App() {
  const [showModal, setShowModel] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
   
  ])
  // the new event you want to add to this state where this function
  // will allow the events made in the form will be returned here in a list.

  const addEvent = (event) => {
    setEvents((preEvents)=> {
        return[...preEvents,event]
    })
    setShowModel(false)
  }
  const handleCLick = (id) => {
    console.log(id)
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })

  }
const handleClose = () => {
  setShowModel(false)
}
  const Mysubtitle = "All the latest events in my crazy brain"
  return (
    <div className="App">

      <Title title="events in your area" subtitle={Mysubtitle} />
      {showEvents && (<div>
        <button onClick={() => setShowEvents(false)}>Hide Event</button>
      </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Event</button>
        </div>)}
      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleCLick(event.id)}>delete event</button>
        </div>
      ))}
    
      {showModal && 
      <Modal handleClose={handleClose}>
     <NewEventForm addEvent={addEvent} />
        </Modal>}
        <div>
          <button onClick={()=> setShowModel(true)}>Add New Event</button>
        </div>

    </div>

  );
}

export default App;

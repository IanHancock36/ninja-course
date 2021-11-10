import './NewEventForm.css'
import React from 'react'
import { useState } from 'react/cjs/react.development'

export default function NewEventForm({addEvent}) {
const [title,setTitle] = useState("")
const [date,setDate] = useState(" ")
const [location,setLocation] = useState("Anchorage")
const resetForm =() => {
    setTitle(" ")
    setDate (" ")
    setLocation("Anchorage")
}
const handleSubmit = (e) =>{
 e.preventDefault()
 const event = {
     title : title,
     date: date, 
     id: Math.floor(Math.random()* 10000),
     location: location,
 }
 addEvent(event)
 console.log(event)
 resetForm()

}
    return (
      <form className="new-event-form" onSubmit={handleSubmit}>
          <label >
              <span>Event Title : </span>
          <input type="text" 
          onChange={(e)=>setTitle(e.target.value)} 
          value={title}/>
          </label>
          <label>
              <span>Event Date</span>
              <input type ="date" 
              onChange={(e)=>setDate(e.target.value)}
              value={date}/>
            {/* changing value its putting the state inside the value  */}
          </label>
          <label>
              <span>Event Location: </span>
              <select onChange={(e)=> setLocation(e.target.value)}>
                  <option value="Anchorage">Anchorage</option>
                  <option value="Nikiski">Nikiski</option>
                  <option value="Kenai">Kenai</option>
              </select>
              </label>
          <button>Submit</button>
          
      </form>
    )
}

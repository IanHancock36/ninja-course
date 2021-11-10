import './NewEventForm.css'
import React from 'react'
import { useState } from 'react/cjs/react.development'

export default function NewEventForm() {
const [title,setTitle] = useState("")
const [date,setDate] = useState(" ")

const resetForm =() => {
    setTitle(" ")
    setDate (" ")
}
const handleSubmit = (e) =>{
 e.preventDefault()
 const event = {
     title : title,
     date: date, 
     id: 
 }
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
          <button>Submit</button>
          <p>title- {title}, date- {date}</p>
          <p onClick={resetForm}>Reset Form </p>
      </form>
    )
}

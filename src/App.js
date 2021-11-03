import {useState} from 'react'
import './App.css';


function App() {
  const [name, setName]= useState('mario')
  const [events,setEvents] = useState([
    {title: "Ian loves Cake", id:1},
    {title: "Ian eats the Cake", id:2},
    {title: "Ian stomach is upset", id:3},
  ])
  const handleCLick = () => {
    setName("steve")

    console.log(name)
  }

  return (
    <div className="App">
      <h1> my name is {name}</h1>
      <button onClick ={handleCLick}>Change Name</button>
   
    </div>
  );
}

export default App;

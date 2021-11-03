import {useState} from 'react'
import './App.css';


function App() {
  const [name, setName]= useState('mario')
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

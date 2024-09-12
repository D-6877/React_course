import React, { useRef, useState } from 'react';
import Card from './Components/Card';
import Card1 from "./Components/Card1";
import Card2 from './Components/Card2';


import './index.css';
import './App.css';

function App() {
  
  //create state
  //change state
  //manage state
  //pass this to the child

  const [name, setName] = useState("");


   
  return (
    <>
          <Card name={name} setName={setName}/>
          <p>this is parent component: {name} </p>
          <Card1  name={name}/>
          <Card2 name={name} />
    </> 
  )
}

export default App;

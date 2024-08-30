import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter, setcounter] = useState(10);

  const addvalue = ()=>{

    // console.log("add value:", Math.random());
    setcounter((prevCounter )=> prevCounter+1);
    setcounter(prevCounter => prevCounter+1)
    setcounter(prevCounter => prevCounter+1)
    setcounter(prevCounter => prevCounter+1)
    // counter = counter+1;
    console.log(counter);

    //another way to write the same code
    // counter=counter+1;    // here  usestate array  must be  let dataType 
    // setcounter(counter);
  }

  const removevalue = ()=>{
    // counter = counter-1;
    setcounter(counter-1);
    console.log(counter);

    //another way 
    // counter=counter-1;
    // setcounter(counter);
  }

  return (
    <>
      <h1>hello world | Debsankar</h1>
      <h2>simple counter project</h2>

      <h3>Counter Value: {counter}</h3>

      <button onClick={addvalue}> Add Value: {counter}</button>
      <br />
      <button onClick={removevalue} > Remove Value: {counter}</button>

      <p>The Current Calue Is: {counter}</p>
    </>
  )
}

export default App

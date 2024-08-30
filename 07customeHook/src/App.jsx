import React from "react";
import useCounter from "./useCounter";
import './App.css'


//A cutome hook a javascript function whose name starts with "use".
//we can use other hook in custome hooks as well.


//why to use custome hook?
//to remove the duplicate logic in components and we can extract that logic to custom hook.



function App() {

  const [count, increment, decrement] = useCounter();
  
  return (
    <>


    <div className=' text-2xl text-blue-600'>{count}</div>

    <button onClick={increment} className='bg-green-500 m-2'> Increment</button> 
    <button onClick={decrement} className='bg-green-500'>Decrement</button>     
    </>
  )
}

export default App

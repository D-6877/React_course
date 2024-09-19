
import React, { useState } from 'react'
import "./App.css"
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice';
 

function App() {
   
  const [amount, setAmount] = useState(0);


  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();


  function handleIncrementClick(){
      dispatch(increment());
  }

  function  handelDecrementClick(){
      dispatch(decrement());
  }
  
  function handelResetClick(){
  dispatch(reset());
      
  }

  function handelIncAmountClick(){
    dispatch(incrementByAmount(amount))
  }
  
  return (
    <>
         <div className='container'>

            <button onClick={ handleIncrementClick}>+</button>
            <p>count:{count} </p>
            <button onClick={ handelDecrementClick}>-</button>
            <br />
            <br />

            <button onClick={handelResetClick}>rest</button>

            <input 
            type="Number"
            value={amount}
            placeholder='Enter amount'
            onChange={(e)=>{
              setAmount(e.target.value)
            }}
             />

             <br />
             <br />
             <button onClick={handelIncAmountClick}>Inc By Amount</button>
         </div>
    </>
  )
}

export default App
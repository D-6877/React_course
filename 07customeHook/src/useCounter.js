import {useState} from "react";

export default function useCounter(){

    const [count, setCount] = useState(0)

  const increment = ()=>{
    setCount(count=>count+1);
  }

  const decrement =()=>{
    setCount(count=>count-1)
  }


  return [count, increment, decrement]   // useState hook return the value in the form of array thats why i am returning the count, and increment function , decrement function
  
}
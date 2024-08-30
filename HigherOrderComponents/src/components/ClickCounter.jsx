import { useState } from "react";


const ClickCounter = ()=>{

    const[counter, setCount] = useState(0);


   function click(){
    setCount(counter+1);
   }
    
    return (
        <div>
            <button onClick={click}> Click Me</button>
            <h2>Count is: {counter}</h2>
        </div>
    )
   
}

export default ClickCounter;
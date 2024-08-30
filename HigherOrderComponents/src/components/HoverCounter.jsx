import { useState } from "react";


const HoverCounter = ()=>{

    const[counter, setCount] = useState(0);


    return (
        <div>
            <button  className="hoverme" onMouseOver={() => setCount(counter+1)}> Hover  Me</button>
            <h2>Count is: {counter}</h2>
        </div>
    )
   
}

export default HoverCounter;
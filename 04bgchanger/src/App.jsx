import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


function App() {
    const [color, setColor] = useState("white");
  
   return(
      <div className='h-screen w-screen'
        style={{backgroundColor: color}}
      >
         
         <div className='flex fixed flex-wrap justify-center bottom-8 inset-x-0 px-2'> 
            <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white rounded-2xl px-3 py-2'>
               <button
              
                className='outline-none rounded-3xl bg-red-500 shadow-xl'
                onClick={()=> setColor("red")}
               >Red</button>


               <button
                onClick={()=> setColor("green")}
                className='outline-none rounded-3xl bg-green-500 shadow-xl'
               >Red</button>

               <button
                onClick={()=> setColor("yellow")}
                className='outline-none rounded-3xl bg-yellow-500 shadow-xl'
               >Red</button>
            
               <button
                onClick={()=> setColor("blue")}
                className='outline-none rounded-3xl bg-blue-500 shadow-xl'
               >Red</button>
           
            
               <button
                onClick={()=> setColor("pink")}
                className='outline-none rounded-3xl bg-pink-500 shadow-xl'
               >Red</button>
            
         </div>

         </div>


      </div>

   )
}

export default App

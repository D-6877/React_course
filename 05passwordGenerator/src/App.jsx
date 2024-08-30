import { useState, useCallback , useEffect, useRef} from 'react'



function App() {

  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharAllowed] = useState(false);
  const [ password, setPassword] = useState("");


  //useRef hook
  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurstuvwxyz";

    if(numberAllowed){
      str += "0123456789"
    }
    if (characterAllowed){
      str+="@#$%&^*!~"
    }

    for (let i=1;i <= length;i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);

    }

    setPassword(pass)


  } ,[length, numberAllowed, characterAllowed, setPassword])

  //button click event function call
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password)
  },[password])
  

 useEffect(()=>{
    passwordGenerator()
 }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
       <div className='w-full max-w-md mx-auto shadow-md rounded-lg pt-3 px-8 pb-12 my-8 text-orange-500 bg-gray-800 text-center '>
          <h1 className='text-center m-3 '>Password Generator</h1>
          <div className='className=" flex shadow rounded-lg overflow-hidden mb-4 "'>

              <input type="text"
                
                value={password}

                className='outline-none w-full py-1 px-3'
                placeholder='password'
                readOnly
                ref={passwordRef}
              />


              
              <button 
              className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
              onclick={copyPasswordToClipboard}
              >
              copy
              </button>
          </div>

          <div className='flex text-sm gap-x-2'>
             <div className='flex items-center gap-x-1'>
              <input 
              type="range" 
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{
                setlength(e.target.value)
              }}
              />
              <label htmlFor="">Length: {length}</label>
             </div>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
             type="checkbox"
             defaultChecked={numberAllowed}
             id="numberInput"
             onChange={()=>{
              setNumberAllowed((prev) => !prev)
             }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>

               <input 
               type="checkbox" 
               defaultChecked={characterAllowed}
               id="characterInput"
               onChange={()=>{
                setCharAllowed((prev => !prev))
               }}
               />

               <label htmlFor="characterInput"> Characters</label>

          </div>
        
        </div>
    </>
  )
}

export default App

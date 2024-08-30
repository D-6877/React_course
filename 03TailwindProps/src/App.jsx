import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  let myObject={
    name:"Debsankar",
    age:21,
    roll:3311
  }

  let myArr = [10, 20, 30 , 40];
  return (
    <>

    <h1 className='bg-green-400 text-black rounded-xl p-4' > Tailwind  test</h1>
    <Card name="Debsankar" btnText="Click Me"/>
    <Card name="Suman" />
    </>
  )
}

export default App

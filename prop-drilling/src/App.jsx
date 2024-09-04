import { useState } from 'react'

import './App.css'
import ChildA from './ChildA'

function App() {
  const [count, setCount] = useState(0)

  const name = "Debsankar Dhara";


  return (
    <>
          <ChildA name={name} />

    </>
  )
}

export default App

import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

const navigate = useNavigate();


    
function handleclick(){
    navigate("/about");
}

  return (
    <div>

        Home page

        <button onClick={handleclick}>Move to about page</button>
    </div>
  )
}

export default Home
import React from 'react'
import "../App.css"


function card(props) {
  return (
    <div>

        <input type="text" onChange={(e)=>{props.setName(e.target.value)}}/>
    </div>
  )
}

export default card
import React from 'react'
import { useParams } from 'react-router-dom'

function ParamCom() {
    const {id} = useParams();

  return (
    <div>

        <p>Params: {id}</p>

    </div>
  )
}

export default ParamCom
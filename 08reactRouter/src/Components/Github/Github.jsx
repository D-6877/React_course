import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {

    
     const [data, setData] = useState([]);

     useEffect(()=>{
        fetch("https://api.github.com/users/D-6877")
        .then(response => response.json())
        .then((data)=>{
            console.log(data);
            setData(data);
        })

     }, [])

  return (
    <>
       <div className='bg-gray-600 text-white  flex '>
        <p >Github Followers: {data.login}</p>
        <img  src={data.avatar_url} alt="" className='w-36 h-36 mt-9'/>
       </div>
    </>

  )
}

export default Github
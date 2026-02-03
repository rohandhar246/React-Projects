import React from 'react'
import { useState,useEffect } from 'react'
const Github = () => {
  const [data, setdata] = useState([])
  
  useEffect(() => {
    fetch('https://api.github.com/users/hiteshchoudhary')
    .then(res => res.json())
    .then(res => setdata(res))

  }, [])

  return (
    <div className='text-center m-4 bg-gray-400 text-white h-screen text-4xl'>Followers: {data.followers} 
      <img src={data.avatar_url} alt='git profilepicddddd'/>
    </div>
  )
}

export default Github
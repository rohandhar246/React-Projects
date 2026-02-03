import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const { uid } = useParams()
  return (
    <div>User: {uid}</div>
  )
}

export default User
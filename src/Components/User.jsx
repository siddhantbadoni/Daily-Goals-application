import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
const User = () => {
    const params = useParams()
    console.log(params.id) 
    const navigation = useNavigate();
  return (
    <div className='user'>
      <button onClick={() => navigation("/about")}>Click Me</button>
      </div>
  )
}

export default User
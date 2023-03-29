import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../store/AuthContext'
import { useNavigate } from 'react-router-dom'
import axios from "../axios"
function Login() {
  const navigate = useNavigate()
  const {token, loginUser} = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async(e)=>{
    e.preventDefault()
    if(!email || !password){
      console.log('Specify all the details')
    }

    else{
      await axios.post("/user/login", {
        email,
        password
      }).then(res=>{
        console.log(res.data);
        loginUser(res.data.token);
        setEmail(null)
        setPassword(null)
        setEmail('')
        setPassword('')
        navigate('/blogs')
      }).catch(err=>console.log(err))
    }
  }

  return (
    <div className='container mx-auto py-8'>
      <div className='w-full max-w-md mx-auto'>
        <form className='bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">
              Email:
            </label>
            <input placeholder='Email' className='shadow border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded appearance-none' type="email" id='email' onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className='mb-4'>
            <label className='block font-bold text-gray-700 text-sm mb-2' htmlFor="password">
              Password:
            </label>
            <input placeholder='password' className='shadow border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded appearance-none' type="text" id='password' onChange={(e)=>setPassword(e.target.value)}/>            
          </div>  
          <div className='flex items-center justify-between'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
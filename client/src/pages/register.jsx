import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../store/AuthContext'
import { useNavigate } from 'react-router-dom'
import axios from "../axios"
function Register() {
  const {token, loginUser} = useContext(AuthContext)
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const handleSubmit = async(e)=>{
    e.preventDefault()
    if(!email || !password){
      console.log('Specify all the details')
    }
    else if(password !== password2){
      console.log("Passwords dont match")
    }

    else{
      await axios.post("/user/register", {
        email,
        password
      }).then(res=>{
        console.log(res.data);
        loginUser(res.data.token);
        setEmail('')
        setPassword('')
        setPassword2('')
        navigate('/login')
      }).catch(err=>console.log(err))
    }
  }

  return (
    <div class="container mx-auto py-8">
      <div class="w-full max-w-md mx-auto">
          <form class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email:
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password:
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
              </div>
              <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor ="password2">
                  Confirm Password:
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password2" type="password" placeholder="Confirm Password" onChange={(e)=>setPassword2(e.target.value)} />
              </div>
              <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  Submit
                </button>
              </div>
          </form>
      </div>
  </div>
  )
}

export default Register
import React, { useContext } from 'react'
import { AuthContext } from '../store/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from '../axios'
const Header = () => {
    const {token, logoutUser}= useContext(AuthContext)
    const navigate = useNavigate()

  return (
        <header className="bg-gray-800 text-white flex items-center justify-between py-4 px-6">
      <div>
        <Link to="/">
          <img src="/vite.svg" alt="Logo" className="h-8" />
        </Link>
      </div>
      <div>
        {token ? (
          <div className="flex items-center">
            <button
              className="bg-gray-500 hover:bg-gray-600 px-3 py-1 rounded"
              onClick={()=>{logoutUser(); navigate('/')}}
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link
              to="/login"
              className="bg-gray-500 hover:bg-gray-600 px-3 py-1 rounded mr-2"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-gray-500 hover:bg-gray-600 px-3 py-1 rounded"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </header>

  )
}

export default Header
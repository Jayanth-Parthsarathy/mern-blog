import React from 'react';
import { useNavigate } from 'react-router-dom';
function HomePage() {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen w-full text-center bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto py-16 sm:py-24 lg:py-32">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Welcome to My Blog</h1>
          <p className="mt-6 text-xl text-gray-500 max-w-2xl">Here you can find and create your own blogs for others to see.</p>
        </div>
        <button className='bg-black rounded p-2 text-white mx-10' onClick={()=>navigate("/blogs")}>Explore Blogs</button>
        <button className='bg-black rounded p-2 text-white mx-10 w-28' onClick={()=>navigate("/register")}>Register</button>
        <button className='bg-black rounded p-2 text-white mx-10 w-28' onClick={()=>navigate("/login")}>Login</button>
        

      </div>
    </div>
  );
}

export default HomePage;






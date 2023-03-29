import React, {useContext, useEffect, useState} from 'react'
import { AuthContext } from '../store/AuthContext'
import { useNavigate } from 'react-router-dom'
import axios from '../axios'
function Blogs() {
  const navigate = useNavigate()
    const base_url = "http://localhost:8001/"
    const [blogs, setBlogs] = useState([])
    const {token} = useContext(AuthContext)
    const getBlogs = async()=>{
        axios.get("/blogs/").then(res=>{
            setBlogs(res.data);
            console.log(res)
        }).catch(err=>console.log(err))
    }
    useEffect(() => {
      getBlogs()
    
    }, [])
    
  return (
   <div className="container mx-auto py-8 text-center">
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
    {blogs && blogs.map(blog => (
      <div key={blog._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img className="h-48 w-full object-cover" src={`${base_url}/${blog.image}`} alt="" />
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">{blog.title}</h2>
          <p className="text-gray-700 leading-6">{blog.summary}</p>
          <button onClick={()=>{navigate(`/blogs/${blog._id}`)}} className="mt-4 block bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg">Read More</button>
        </div>
      </div>
    ))}
  </div>
    <button className='bg-green-500 rounded p-2 text-white mx-10 w-28 my-20' onClick={()=>navigate("/user/blogs")}>My blogs</button>

</div>
  )
}

export default Blogs
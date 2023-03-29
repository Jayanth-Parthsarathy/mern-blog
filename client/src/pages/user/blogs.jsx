import { AuthContext } from '../../store/AuthContext'
import React, {useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "../../axios"
function UserBlogs() {
    const base_url = "http://localhost:8001/"
    const {token, blogChange} = useContext(AuthContext)
    const [blogs, setBlogs] = useState([])
    const navigate = useNavigate()
    const editBlog = async(blog)=>{
      blogChange(blog);
      navigate("/user/edit")
    }


    const getBlogs = async()=>{
      const headers = {
        Authorization: "Bearer "+ token
      }
      await axios.get("/blogs/user", {headers}).then(res=>{
        setBlogs(res.data);
        console.log(res.data)
      }).catch(err=>console.log(err))
    }
    useEffect(() => {
      getBlogs()
    }, [])
    
  return (
      <div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div key={blog._id} className="p-6 bg-white rounded-lg shadow">
        <img
          className="object-cover w-full rounded-lg h-40"
          src={`${base_url}/${blog.image}`}
          alt=""
        />
        <div className="mt-4">
          <h1 className="text-lg font-medium text-gray-900">{blog.title}</h1>
          <p className="mt-2 text-sm text-gray-500">{blog.summary}</p>
        </div>
        <div className="mt-4 flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              editBlog(blog);
            }}
          >
            Actions
          </button>
        </div>
            </div>
          ))}
        </div>
      <button className='ml-5 bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5' onClick={()=>navigate("/user/create")}>Add Blog</button>

      </div>

  )
}

export default UserBlogs
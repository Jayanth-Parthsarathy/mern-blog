import React, {useContext, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from "../axios.js"
const base_url = "http://localhost:8001"
const BlogDetail = () => {
  const {id} = useParams()
  const [blog, setBlog] = useState({})
  const getBlog = async()=>{
    await axios.get(`/blogs/${id}`).then(res=>setBlog(res.data)).catch(err=>console.log(err))
  }
  useEffect(() => {
    getBlog()
  
    }
  , [])
  
  return (
    <div className="container mx-auto my-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <img className="mx-auto mb-4 h-3/5 w-5/6" src={`${base_url}/${blog.image}`} alt={blog.title} />
        <p className="text-gray-600 text-lg leading-7">{blog.body}</p>
      </div>
    </div>
  )
}

export default BlogDetail
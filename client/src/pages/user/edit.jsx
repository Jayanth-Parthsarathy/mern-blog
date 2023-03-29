import React, { useState } from 'react'
import { useContext  } from 'react'
import axios from "../../axios"
import { AuthContext } from '../../store/AuthContext'
import { useNavigate } from 'react-router-dom'
const Edit = () => {
    const navigate = useNavigate()
    const {blog, token} = useContext(AuthContext)
    const [title, setTitle] = useState(blog.title)
    const [body, setBody] = useState(blog.body)
    const [summary, setSummary] = useState(blog.summary)
    const [image, setImage] = useState(null)
    const [confirm, setConfirm] = useState(null)


    const deleteConfirm = ()=>{
        setConfirm("Do you really want to delete this?")
    }

    const deleteBlog = async()=>{
        const headers = {
        Authorization: "Bearer "+ token,
        "Content-Type": "multipart/form-data"
        }
        await axios.delete(`/blogs/${blog._id}`, {headers})
        navigate("/user/blogs")
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const headers = {
        Authorization: "Bearer "+ token,
        "Content-Type": "multipart/form-data"
        }
        const formData = new FormData();
        formData.append('title', title)
        formData.append('summary', summary);
        formData.append('body', body);
        if(image){
            formData.append('image', image)
        }
        console.log(image)
        await axios.post(`/blogs/${blog._id}`, formData, {headers})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
  return (
 <div className="w-full max-w-lg mx-auto">
  <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
        Title:
      </label>
      <input value={title} type="text" id='title' onChange={(e)=>setTitle(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
    </div>
    <div className="mb-4">
      <label htmlFor="summary" className="block text-gray-700 font-bold mb-2">
        Summary:
      </label>
      <input value={summary} type="text" id='summary' onChange={(e)=>setSummary(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
    </div>
    <div className="mb-4">
      <label htmlFor="body" className="block text-gray-700 font-bold mb-2">
        Body:
      </label>
      <textarea value ={body} rows="4" cols="50" id='body' onChange={(e)=>setBody(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

    </div>
    <div className="mb-4">
      <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
        Image
      </label>
      <input  id='image' name='image' type="file" onChange={
          (e)=>{
              setImage(e.target.files[0])
          }
      } className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
    </div>
    <div className="flex items-center justify-between">
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Edit
      </button>
      <button onClick={deleteConfirm} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Delete
      </button>
      {confirm && (<button onClick={deleteBlog} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">{confirm}</button>)}
    </div>
  </form>
</div>

  )
}

export default Edit
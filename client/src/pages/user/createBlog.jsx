import axios from '../../axios'
import React, {useState,    useContext} from 'react'
import { AuthContext } from '../../store/AuthContext'
import { useNavigate } from 'react-router-dom'


function CreateBlog() {
    const navigate = useNavigate()
    const {token} = useContext(AuthContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [summary, setSummary] = useState('')
    const [image, setImage] = useState('')

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const headers = {
        Authorization: "Bearer "+ token,
        "Content-Type": "multipart/form-data"
        }
      const formData = new FormData();
      formData.append('title', title)
      formData.append('summary', summary);
      formData.append('body', body);
      formData.append('image', image)
      console.log(image)
    await axios.post("/blogs",formData, {headers:headers}).then(res=>{console.log(res); navigate("/user/blogs")}).catch(err=>console.log(err))
}

  return (
 <div className="w-full max-w-md mx-auto">
  <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
        Title:
      </label>
      <input
        type="text"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="summary" className="block text-gray-700 font-bold mb-2">
        Summary:
      </label>
      <input
        type="text"
        id="summary"
        onChange={(e) => setSummary(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="body" className="block text-gray-700 font-bold mb-2">
        Body:
      </label>
      <textarea
        id="body"
        onChange={(e) => setBody(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      ></textarea>
    </div>
    <div className="mb-4">
      <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
        Image
      </label>
      <input
        id="image"
        name="image"
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="flex items-center justify-between">
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Save
      </button>
    </div>
  </form>
</div>
  )
}

export default CreateBlog
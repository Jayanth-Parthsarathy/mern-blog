import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom/dist'
import './App.css'
import { AuthProvider } from './store/AuthContext'
import Login from './pages/login'
import Register from './pages/register'
import UserBlogs from './pages/user/blogs'
import Blogs from './pages/blogs'
import CreateBlog from './pages/user/createBlog'
import Edit from './pages/user/edit'
import BlogDetail from './pages/blogDetail'
import HomePage from './pages/home'
import Header from './components/Header'
function App() {

  return (
        <>
          <Router>
                <Header />

              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/user/blogs' element={<UserBlogs />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/user/create' element={<CreateBlog />} />
                <Route path='/user/edit' element={<Edit />} />
                <Route path='/blogs/:id' element={<BlogDetail />} />
              </Routes>
            </Router>
        </>
            
  )
}

export default App

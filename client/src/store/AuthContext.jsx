import { createContext, useState, useEffect } from "react";

export const  AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [token, setToken] = useState(localStorage.getItem("token")||null)
    const [blog, setBlog] = useState(localStorage.getItem("blog")||null)

    const loginUser = (token)=>{
        setToken(null)
        localStorage.removeItem("token")
        localStorage.setItem("token", token);
        setToken(token);
    }
    const logoutUser = ()=>{
        localStorage.removeItem("token")
        setToken(null)
    }

    const blogChange = (blog)=>{
        localStorage.setItem("blog", blog);
        setBlog(blog)
    }

    return (    
        <AuthContext.Provider value={{token, loginUser, logoutUser, blog, blogChange}}>
        {children}
         </AuthContext.Provider>
    )
    
}



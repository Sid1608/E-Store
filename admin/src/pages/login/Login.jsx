import React from 'react'
import { useState } from 'react';
import {login} from "../../redux/apiCalls";
import {useDispatch} from "react-redux";
const Login = () => {
    const [username, setUsername]=useState("");
    const[password,setPassword]=useState("");
    const dispatch=useDispatch()
    const handleClick=(e)=>{
        e.preventDefault()
        login(dispatch,{username,password});
    }
  return (
    <div style={{height:"100",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
        <input style={{padding:10,marginBottom:20}} type="text" placeholder="username"/>
        <input style={{padding:10,marginBottom:20}} type="password" placeholder="password"/>
        <button style={{padding:10,width:100}} onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login

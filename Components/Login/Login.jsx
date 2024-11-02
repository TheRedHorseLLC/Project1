import React, { useState } from "react";
//import authenticate from "../Authentication/Authentication";
import "./Login.css"

export default function signUp(){
             const [loginData,setLoginData] = React.useState(
                {
            email:"",
            password:"",
                })

            const id=React.useId()
            
            /* handles the form functionality: checking the checkbox, the type, value, and name */
            function handleInput(event)
            {
            const{name,type,value,checked} = event.target
            setLoginData(prevLoginData => (
                {
                    ...prevLoginData,
                    [name]: type === "checkbox" ? checked : value
                }))
            }
            /*Handles the submit functionality */
            function handleSubmit(event) {
                event.preventDefault()
        }
return (
        <div className = "loginAlpha">
            <h3 className="loginTitle">Login In</h3>
            <form className="loginForm" onSubmit={handleSubmit}>
                <div className="loginInput">

                    <label htmlFor={id+"-email"}>Email:</label>
                    <input type="email" name="email" autoComplete="on" onChange={handleInput} id={id+"-email"} placeholder="Enter Your Email" value={loginData.email} />
                    
                    <label htmlFor={id+"-password"}>Password:</label>
                    <input type="password" name="password" autoComplete="on" onChange={handleInput} id={id+"-password"} placeholder="Create Your Password" value={loginData.password} />
                    
                    <button className = "loginButton">Login</button>

                </div>
            </form>
        </div>
    )}
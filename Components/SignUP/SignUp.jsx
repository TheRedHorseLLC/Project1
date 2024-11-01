import React, { useState } from "react";
import "./SignUp.css"

export default function signUp(){
             const [formData,setFormData] = React.useState(
                {
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            conPassword:"",
            age: true
                })

            const id=React.useId()
            
            /* handles the form functionality: checking the checkbox, the type, value, and name */
            function handleInput(event)
            {
            const{name,type,value,checked} = event.target
            setFormData(prevFormData => (
                {
                    ...prevFormData,
                    [name]: type === "checkbox" ? checked : value
                }))
            }
            /*Handles the submit functionality */
            function handleSubmit(event) {
                event.preventDefault()
                if(formData.password === formData.conPassword){
                    console.log("Signed up")
                }else{
                    console.log("Passwords do not match")
                }
                if(formData.age){
                    console.log("You have agreed you are old enough")
                }
        }
return (
        <div className = "newSU">
            <h3 className="SUTitle">Sign Up</h3>
            <form className="SUForm" onSubmit={handleSubmit}>
                <div className="SUInput">
                    <label htmlFor={id +"-First Name"}>First Name:</label>
                    <input type="text" name="firstName" autoComplete="on" onChange={handleInput} id={id+"-First Name"} placeholder="Enter Your First Name" value={formData.firstName} />
                    
                    <label htmlFor={id+"-last Name"}>Last Name:</label>
                    <input type="text" name="lastName" autoComplete="on"  onChange={handleInput} id={id+"-last Name"} placeholder="Enter Your Last Name" value={formData.lastName} />
                    
                    <label htmlFor={id+"-email"}>Email:</label>
                    <input type="email" name="email" autoComplete="on" onChange={handleInput} id={id+"-email"} placeholder="Enter Your Email" value={formData.email} />
                    
                    <label htmlFor={id+"-password"}>Password:</label>
                    <input type="password" name="password" autoComplete="on" onChange={handleInput} id={id+"-password"} placeholder="Create Your Password" value={formData.password} />
                    
                    <label htmlFor={id+"-confirm password"}>Confirm Password:</label>
                    <input type="password" name="conPassword" autoComplete="on"  onChange={handleInput} id={id+"-confirm password"} placeholder="Confirm Your Password" value={formData.conPassword} />

                    <div className={"checkedForum"}>
                        <input id={id+"-age"} type="checkbox" name="age" onChange={handleInput} checked={formData.age} />
                        <label className= "checkT" htmlFor={id+"-age"}>I Am Old Enough</label>
                    </div>

                    <button className = "SUButton" variant="primary">Sign Up</button>{' '}
                    <div className="SULB">
                        <p>Already Have An Account?</p>
                    <button className = "SUButton2" variant="primary">Login</button>{' '}
                    </div>
                </div>
            </form>
        </div>

    )}
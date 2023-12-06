import React from "react";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
//import './index.css'

const App =() => {
    return (
        <div className="container bg-#eb2049" >
        <div className="position-absolute top-50 start-50 translate-middle" >
        <div className="" >
            
            <h2 >Login</h2>
            <lable className="">Access to our dashboard</lable>
            <div>
                
                <div>
                    <lable  className ="mb-5">Email Address</lable><br/>
                    <input type="text" className ="mb-3 bg-light border" placeholder="example@gmail.com"/>
                </div>
                <div>
                    <lable html = "password">Password</lable>
                    <a>Forgot password?</a><br/>
                    <input type="password" className="mb-3  p-2 bg-light border " placeholder="password"/>
                </div>
                
                <div>

                <button type="submit" className="btn btn-#eb2049" value="login">Login</button>
                <div>
                    Don't have an account yet?<a href="#">Register</a>
                </div>
                
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}




export default App


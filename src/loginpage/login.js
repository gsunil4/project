import React from "react"
import {Link } from "react-router-dom";
import './style.css';
import logo from './logos.png'; 
import usePassworldToggle from "./passwlogos.js";


 function Login () {
    const customBgColorStyle = {
        backgroundColor: '#fef2f2' 
        // Example of a custom background color
      };
      
      
    const [PasswordInputType, ToggleIcon] = usePassworldToggle();


    return (
         
        
        <div style={customBgColorStyle} className="login template d-flex justify-content-center align-items-center 100-w vh-100">
        <div >
            <img src={logo} alt="logo" className=" mrl "/>
            <div className="400-w p-5 rounded bg-white ">
            <from className="body">
                <h3 className="text-center">Login</h3>
                <p className="text-center element">Access to your dashbord</p>
                <div className="mb-2">
                    <label htmlFor="email" className="mb-2">Email</label>
                    <input type="email" placeholder="example@gmail.com" className=" form-control" required/>
                </div>
                < div className="mb-2"> 
                <div  className="conta mb-2">
                    <label htmlFor="password">Password  </label>                   
                     <a href="#"className="element"><label>Forgot Password?</label></a>
                    </div><span className="password-toogle-icon element">{ToggleIcon}</span>
                    <div></div>
                    <input type={PasswordInputType} placeholder="Enter Password" className=" form-control" required/>
                    
                </div>
                
                <div className="mb-2">
                <Link to="loginpage">
                    <button type="submit"  className="btn  form-control btn-color"> Login</button>
                    </Link>
                </div>
                <p className="text-right-5 mb-2">
                   <label> Don't have an account yet?</label> 
                   <Link to="/Register" className="ms-2">Register</Link>
                    </p>
                
                
                <div className="d-grid">

                </div>
            </from>
            </div>
            </div>
        </div>
        
        
    )
}

 
export default Login
import React,{ useState} from "react"
import {Link } from "react-router-dom";
import './style.css';
import logo from './logos.png'; 
import usePassworldToggle from "./passwlogos.js";


 function Login () {
    const customBgColorStyle = {
        backgroundColor: '#fef2f2' // Example of a custom background color
      };
      const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can perform authentication logic
    // For demonstration purposes, let's just log the credentials
    console.log('Username:', username);
    console.log('Password:', password);
    // You can add authentication logic using APIs, etc.
  };

      
    const [PasswordInputType, ToggleIcon] = usePassworldToggle();


    return (
         
        <div  className="container">
            <div >
        <div style={customBgColorStyle} className=" row justify-content-center align-items-center vh-100">
        <div className="col-md-6">
            <img src={logo} alt="logo" height="80" width="80" className=" " />
            <from onSubmit={haqndleLogin} className="card p-4">
                <h3 className="text-center">Login</h3>
                <p className="text-center">Access to your dadhbord</p>
                <div className="mb-2">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" placeholder="Enter Email" className=" form-control" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                </div>
                < div className="mb-2 conta "> 
                    <label htmlFor="password" className="form-label">Password</label>                   
                    <label> Forgot Password?</label>
                    <div>
                    <input type={PasswordInputType} placeholder="Enter Password" className=" form-control" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    <span className="password-toogle-icon">{ToggleIcon}</span>
                </div>
                
                <div className="mb-2">
                <Link to="loginpage">
                    <button type="submit"  className="btn btn-color form-control"> Login</button>
                    </Link>
                </div>
                <p className="">
                    Don't have an account yet <Link to="/register" className="ms-2">Register</Link>
                    </p>
                
            </from>
            </div>
            </div>
            </div>
        </div>
        
        
        
    )
}

 
export default Login
import react from "react"
import {Link } from "react-router-dom";
import './style.css';
import logo from './logos.png'; 

function Register () {
    const customBgColorStyle = {
        backgroundColor: '#fef2f2' // Example of a custom background color
      };

    return (
        <div style={customBgColorStyle} className="login template d-flex justify-content-center align-items-center 100-w vh-100 ">
            <div >
                <div className="justify-content-center">
                <img src={logo} alt="logo " className=" mb-2" />
                </div>
                <div className="form_container p-5 rounded bg-white "> 
                <from>
                    <h3 className="text-center">Register</h3>
                    <h6 className="text-center">Access to your dadhbord</h6>
                    <div className="mb-2">
                        <label htmlFor="email">Email*</label>
                        <input type="email" placeholder="Email" className=" form-control" required/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Password*</label>
                 
                        <input type="password" placeholder="Password" className=" form-control" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="repeat password" >Repeat Password*</label>
                        <input type="repeat password" placeholder="conform Password" className="form-control" required/>
                    </div>
                    <div className="mb-2">
                        <Link to="loginpage">
                        <button type="submit"  className="btn  form-control btn-color"> Register</button>
                        </Link>
                    </div>
                    <p className="text-right">
                        Already have an account? <Link to="/login">Login</Link>
                        </p>
                </from>
                </div>
                </div>
            
            </div>
        
    
    )
}

export default Register
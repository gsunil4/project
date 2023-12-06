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
            <div>
                <div className="image-container">
                <img src={logo} alt="logo" className=" mrr" />
                </div>
                <div className="400-w p-5 rounded bg-white "> 
                <from>
                    <h3 className="text-center">Register</h3>
                    <p className="text-center element">Access to your dashbord</p>
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
                        <button type="submit"  className="btn  form-control btn-color"><label> Register</label></button>
                        </Link>
                    </div>
                    <p className='mb-2 text-center'>Alredy have an account ?  <Link to='/' className='text-decoration-none' variant="danger" size="lg">
                                Login
                            </Link></p>
                </from>
                </div>
                
            
            </div>
            </div>
    
    )
}

export default Register
import React from "react"
import {Link } from "react-router-dom";
import './style.css';
import logo from './logos.png'; 
import usePassworldToggle from "./passwlogos.js";


 function Login () {
    const customBgColorStyle = {
        backgroundColor: '#fef2f2' // Example of a custom background color
      };
      
    const [PasswordInputType, ToggleIcon] = usePassworldToggle();
    
    return (
        <div className="login-container">
          <div className="image-container">
            <img src="path_to_your_image.jpg" alt="Login Image" />
          </div>
          <div className="form-container">
            {/* Your login form content */}
            <form>
              {/* Input fields, submit button, etc. */}
            </form>
          </div>
        </div>
      );
    };
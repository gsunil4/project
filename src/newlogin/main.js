import React from "react"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewLogin from "./NewLogin.js"
import Register from "./register.js"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faEnvelope, faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
//import signup from "./signup.js";
import "bootstrap/dist/css/bootstrap.min.css"
//import './style.css';

library.add( faUser, faEnvelope, faLock, faEye, faEyeSlash);

function App () {

    return(
        <Router>
            <Routes>
            <Route path="/" element={<NewLogin/>}/>
            <Route path="/register" element={<Register/>}/>
           

            </Routes>
        </Router>
    )
}
    


export default App
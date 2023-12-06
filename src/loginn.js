import React from 'react'
import "./login.css"


const App = () =>{
    return(
        <div className="login-container">
            <div className="login-box">
                <h1>Login page</h1>
                <form>
                    <lable htmlFor ='username'>username</lable>
                    <input type="text" id='username'/>
                    <lable htmlFro="password">passworld</lable>
                    <input type="password" placeholder="password" id ="password"/>
                    <button type="button">login</button>
                    
                </form>
            </div>
        </div>
    )
}

export default App
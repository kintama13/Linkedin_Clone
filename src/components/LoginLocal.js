// import Home from "@mui/icons-material/Home";
import React, { useRef } from "react";
import '../styles/LoginLocal.css';
import Home from "./Home";
import RoutesApp from '../routes/routesApp'
function LoginLocal() {
    const email=useRef()
    const password=useRef()
    const getEmail=localStorage.getItem("emailData")
    const getPassword=localStorage.getItem("passwordData")
    const register=() =>{
        localStorage.clear();
        window.location.reload();
    }
    const loginToApp=() => {
        <Home />
    }
    const handleSubmit=()=>{
        if(email.current.value=="randomUser69@gmail.com"&&password.current.value=="M1lf4l1ve"){
            localStorage.setItem("emailData","randomUser69@gmail.com")
            localStorage.setItem("passwordData","M1lf4l1ve")
        }
    }

    return(
        <div className="loginlocal">
           
            {
                getEmail&&getPassword?
                <RoutesApp />:
            <form onSubmit={handleSubmit}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png"></img>
                <div>
                    <input placeholder="insert email" type="text" ref={email}></input>
                </div>
                <div>
                    <input placeholder="Password" type="password" ref={password}></input>
                </div>
                <button type="submit" onClick={loginToApp}>Login</button>
                
            </form>
            }
            <span className="register" onClick={register}>Log out</span>
            
        
        </div>
    );
}
export default LoginLocal;
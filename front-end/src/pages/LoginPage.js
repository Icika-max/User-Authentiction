import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
    const [errrMessage, setErrorMessage]=useState('')
     const [emailValue,setEmailValue]=useState('')
     const [passwordValue,setPaswordValue]=useState('')

     const history= useHistory()

     const onLoginCliked=async()=>{
        alert('login not implemented yet')
     }


    return ( <div className="container">
        <h1>Log in</h1>
        {errrMessage && <div className="'fail">{errrMessage}</div>}
        <input
        value={emailValue}
        onChange={e=>setEmailValue(e.target.value)}
        placeholder="youremail@gmail.com" />
        <input type="password" 
        value={passwordValue}
        onChange={e=>setPaswordValue(e.target.value)}
        placeholder="password" />
        <hr />
        <button 
        disabled={!emailValue || !passwordValue}
        onClick={onLoginCliked}>Log In</button>
        <button onClick={()=>history.push('/forget-push')}>Forgot your password?</button>
        <button onClick={()=>history.push('/signup')}>Don't have an account? Sign Up</button>
    </div> );
}
 
export default LoginPage;
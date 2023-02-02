import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const SignUpPage = () => {
    const [errrMessage, setErrorMessage]=useState('')
     const [emailValue,setEmailValue]=useState('')
     const [passwordValue,setPaswordValue]=useState('')
     const [confirmPasswordValue,setConfirmPaswordValue]=useState('')


     const history= useHistory()

     const onSignUpCliked=async()=>{
        alert('SignUp not implemented yet')
     }


    return ( <div className="container">
        <h1>Sign Up</h1>
        {errrMessage && <div className="'fail">{errrMessage}</div>}
        <input
        value={emailValue}
        onChange={e=>setEmailValue(e.target.value)}
        placeholder="youremail@gmail.com" />
        <input type="password" 
        value={passwordValue}
        onChange={e=>setPaswordValue(e.target.value)}
        placeholder="password" />
        
        <input type="password" 
        value={confirmPasswordValue}
        onChange={e=>setConfirmPaswordValue(e.target.value)}
        placeholder="password" />
        <hr />
        <button 
        disabled={!emailValue || !passwordValue || passwordValue !== confirmPasswordValue}
        onClick={onSignUpCliked}>Sign Up</button>
        <button onClick={()=>history.push('/login')}>Already have an account? Login</button>
    </div> );
}
 
export default SignUpPage;
import React from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Login() {
    function navigate(url) {
        window.location.href = url;
    }

    async function handLogin() {
        let response = await axios.post("/user/request")
        navigate(response.data.url)
    }

    return (
        <>
            <div className="Login-page">
                <div className="Login-Box">
                    <h2>Login</h2>
                    <div className="login-details-area">
                        <div className="login-details">
                            <label htmlFor="">User Name</label>
                            <input type="text" className='login-input' />
                        </div>
                        <div className="login-details">
                            <label htmlFor="">Password</label>
                            <input type="text" className='login-input' />
                        </div>
                        <button className='login-btn'>Login</button>
                        <div className='google-login-btn' onClick={handLogin}>
                            <img src="/images/GoogleIcon.png" alt="" className='google-icon'/>Login with google</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login
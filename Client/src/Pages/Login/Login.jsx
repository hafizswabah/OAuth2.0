import React from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Login() {
    function navigate(url) {
        window.location.href = url;
    }

    async function handLogin() {
        let data = await axios.post("http://localhost:8888/user/request")
        navigate(data.data.url)
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
                        <button className='login-btn' onClick={handLogin}>Login</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login
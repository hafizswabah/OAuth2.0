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
                    <button onClick={handLogin}>Login</button>
                </div>
            </div>
        </>
    )
}

export default Login
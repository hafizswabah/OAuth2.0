import React from 'react'
import './Home.css'
import { IoHomeOutline, IoLogOutOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
function Home() {
    const name = "Guest"
    return (
        <>
            <div className="nav-bar">
                <div className="nav-sections">
                    <IoHomeOutline />
                    <h5>
                        Home
                    </h5>
                </div>
                <div className="nav-sections">
                    <IoLogOutOutline />
                    <h5>
                        Logout
                    </h5>
                </div>
                <div className="nav-sections">
                    <CgProfile />
                    <h5>
                        Profile
                    </h5>
                </div>
            </div>
            <div className="home-page">
                <h1>Welcome to Home Mr {name}</h1>
            </div>
        </>
    )
}

export default Home
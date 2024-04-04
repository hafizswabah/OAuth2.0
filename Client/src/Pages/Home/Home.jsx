import React from 'react'
import './Home.css'
import { IoHomeOutline, IoLogOutOutline } from "react-icons/io5";
function Home() {
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
                    <IoHomeOutline />
                    <h5>
                      Profile
                    </h5>
                </div>
            </div>
        </>
    )
}

export default Home
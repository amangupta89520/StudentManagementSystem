import React from 'react'
import { Link } from 'react-router-dom'

const Layout = ({children}) => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link to="/" style={{textDecoration: "none", fontSize:20}}>Student Record Management</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item" style={{paddingLeft: 40, fontSize: 20}}>
                            <Link to="/create">Register Student</Link>
                        </li>
                        <li class="nav-item" style={{paddingLeft: 40, fontSize: 20}}>
                            <Link to="/attendance">Attendance</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <div>
                {children}
            </div>
            <footer>
                <p style={{textAlign: "center"}}>Copyright 2021 Blockchain Warriors</p>
            </footer>
        </div>
    );
}
 
export default Layout;
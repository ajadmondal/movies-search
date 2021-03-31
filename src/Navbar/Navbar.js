import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <ul className="nav">
                <li className = "nav-item home">Movies</li>
                <li className = "nav-item">
                    <form action="" >
                        &#128269;
                        <input placeholder="Search movies" type="text"autoFocus/>
                        {/* <button>&#10095;</button> */}
                    </form>
                    
                </li>
                <li className = "nav-item">About</li>
            </ul>
        </div>
    )
}

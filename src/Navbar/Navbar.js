import React, {useState} from 'react';
import './Navbar.css';

export default function Navbar(props) {
    const [value, setValue] = useState();
    const handleSubmit = (e)=>{
        e.preventDefault();
        props.query(value);
        setValue("");
    }
    const handleChange = (e)=>{
        setValue(e.target.value);
    }
    return (
        <div className="navbar" onSubmit={handleSubmit}>
            <ul className="nav">
                <li className = "nav-item home">Movies</li>
                <li className = "nav-item">
                    <form action="" >
                        &#128269;
                        <input placeholder="Search movies" onChange = {handleChange} type="text" value={value} autoFocus/>
                    </form>
                </li>
                <li className = "nav-item">About</li>
            </ul>
        </div>
    )
}

import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

function Head(){
    return (
    <div id="head">
        <div id="titlle">
            <h1>Beekeeping Database</h1>
        </div>
        <div id="nav">
            <NavLink to='/' className="nav-link">Home</NavLink>
            <NavLink to='/form' className="nav-link">Form</NavLink>
        </div>
    </div>
    );
}

export default Head;
import React from 'react'
// note: a component is just a function that exports a jsx template
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Passbook</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Entry</Link>
                <Link to="/page">Page</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;
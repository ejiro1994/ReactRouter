import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Styles/Styles.css'


const Navbar = () => {
    return (
        <nav className="nav-wrapper blue darken-4">
            <div className="container">
                <ul className="left">
                <a href="" className="logo" style={{fontSize:60}}>o</a>
                {/* <h2>hello</h2> */}
                {/* <svg><circle cx="25" cy="75" r="20"/></svg> */}
                </ul>
                <ul className="right">
                    <li><Link to="/">Popular</Link></li>
                    <li><Link to="/top-rated">Top Rated</Link></li>
                    <li><Link to="/upcoming">Upcoming</Link></li>
                  
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
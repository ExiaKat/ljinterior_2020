import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <div>
                <ul className="nav">
                    <li>
                        <Link to="/aboutus" style={{'textDecoration': 'none'}}>ABOUT US</Link>
                    </li>
                    <li>
                        <Link to="/projects" style={{'textDecoration': 'none'}}>PROJECTS</Link>
                    </li>
                    <li>
                        <Link to="/contact" style={{'textDecoration': 'none'}}>CONTACT</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navigation;
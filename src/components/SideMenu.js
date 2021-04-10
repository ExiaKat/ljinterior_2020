import React, { Component } from 'react';
import  { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom'

class SideMenu extends Component {
    render() {
        return (
            <Menu>
                <Link to="/aboutus" style={{'textDecoration': 'none', margin: '10px'}}>ABOUT US</Link>
                <Link to="/projects" style={{'textDecoration': 'none', margin: '10px'}}>PROJECTS</Link>
                <Link to="/contact" style={{'textDecoration': 'none', margin: '10px'}}>CONTACT</Link>
            </Menu>
        )
    }
}

export default SideMenu;

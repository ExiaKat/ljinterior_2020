import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
            <div id="about" className="aboutme">
                <h2>About Us</h2>
                <p>L J Interior is an interior design studio that is specialised in retail design with various experience on hospitality and workplace.</p>
                <p>We believe that we can make a difference for our clients through customised design solutions.</p>
                <p>We listen to our client, understand the chanllenge they are facing and create a unique design and approach to assist clients to make the development process easier and successful.</p> 
                <p>Our design has evolved with current market movement with consistent high quality.</p>
                <p>We believea good design works closely with business branding  and assist business development. </p>
                <p>
                    <span className="dia_member">Member of: </span>
                    <img className="dia_member dia" src="/images/dia_logo.png" alt="Design Institute of Australia logo"/>
                    <img className="dia_member asofia" src="/images/asofia.png" alt="ASOFIA log"/>
                </p>
            </div>
        )
    }

    componentDidMount() {
        this.props.showAbout();
    }
};

export default About
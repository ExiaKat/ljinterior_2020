import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (
            <div id="contact" className="contact">
                <h2>Contact</h2>
                <p>Moble: +61 (0)433559293</p>
                <p>Email: lj.zhang@ljinterior.com.au</p>
                <p>
                    <a href="https://www.facebook.com/RetailDesignSydney">Facebook</a> | 
                    <a href="httlis://www.instagram.com/lj_interior_design_sydney">Instgram</a> | 
                    <a href="https://www.pinterest.ca/designzlj/boards">Pinterest</a>
                </p>
            </div>
        );
    }

    componentDidMount() {
        this.props.showContact()
    }
}

export default Contact
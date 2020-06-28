import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (<div></div>);
    }

    componentDidMount() {
        this.props.showHome();
    }
}

export default Home;
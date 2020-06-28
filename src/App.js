import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Links from './components/Links';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

class App extends Component {
  state = {
    style: {height: '100%'}
  }

  showHome = () => {
    this.setState(state => ({style: {height: '100%'}}));
  }

  showProjects = () => {
    this.setState(state => ({style: {height: state.style.height==='100%'?'fit-content':'100%'}}));
  }

  showAbout = () => {
    this.setState(state => ({style: {height: '100%', "backgroundImage": 'url("/images/aboutme.jpg")'}}))
  }

  showContact = () => {
    this.setState(state => ({style: {height: '100%', "backgroundImage": 'url("/images/contact.jpg")'}}))
  }

  render() {
    return (
      <Router>
        <div className="App" style={this.state.style}>
          <Navigation />
          <Links />
          <Switch>
            <Route path="/aboutus">
              <About showAbout={this.showAbout} />
            </Route>
            <Route path="/projects">
              <Projects showProjects={this.showProjects} />
            </Route>
            <Route path="/contact">
              <Contact showContact={this.showContact} />
            </Route>
            <Route path="/">
              <Home showHome={this.showHome} /> 
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

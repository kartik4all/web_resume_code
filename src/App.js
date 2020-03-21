import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import { ProfileBanner } from './components/profileBanner';
import About from './components/about';
import Resume from './components/resume';
import Projects from './components/projects';
import Contact from './components/contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: true,
      resume: false,
      projects: false,
      contact: false
    }
  }

  handleChange = (field) => {
    switch (field) {
      case 'about': this.setState({
        about: true,
        resume: false,
        projects: false,
        contact: false
      }); break
      case 'resume': this.setState({
        about: false,
        resume: true,
        projects: false,
        contact: false
      }); break
      case 'projects': this.setState({
        about: false,
        resume: false,
        projects: true,
        contact: false
      }); break
      case 'contact': this.setState({
        about: false,
        resume: false,
        projects: false,
        contact: true
      }); break

    }
  }

  render() {
    return (
      <div className="App" id="app">
        <div className="context">
        </div>
        <div className="area" >
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div >
        <div id="mainContainer">
          <div id="navContainer">
            <Navbar handleChange={this.handleChange} state={this.state} />
          </div>
          <div className=" row justify-content-center" id="mainContainerInnerContainer">

            <div className="col-sm-4"> <ProfileBanner handleChange={this.handleChange}/></div>
            <div className="col-sm-6" id="slideContainer">
              <div style={{position:'relative'}}>
              <div className={this.state.about?"slideEffectOut":"slideEffectIn"}><About  /></div>
              <div className={this.state.resume?"slideEffectOut":"slideEffectIn"}><Resume/></div>
              <div className={this.state.projects?"slideEffectOut":"slideEffectIn"}><Projects/></div>
              <div className={this.state.contact?"slideEffectOut":"slideEffectIn"}><Contact/></div>
              </div>
            </div>

          </div>


        </div>

      </div>
    );
  }
}

export default App;

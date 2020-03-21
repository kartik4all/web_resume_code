
import React from 'react';
import profilePic from '../assets/images/IMG-20190503-WA0058.jpg';
export const ProfileBanner = (props) => {
    return (
        <div id="profileBanner">

            <div id="profileImg">
                <img src={profilePic} />
            </div>
            <div id="profileInfo">
                <div id="profileName">
                    <h1>Kartik Kehar</h1>
                </div>
                <div id="profileDesc">
                    <h2>Front-End Developer/Web Designer</h2>
                </div>
                <div id="profileSocial">
                    <ul>
                        <li ><i className="fab fa-github"onClick={() => window.open('https://github.com/kartik4all', 'target')} /></li>
                        <li><i className="fab fa-facebook-square" onClick={() => window.open('https://www.facebook.com/kartik.kehar', 'target')} /></li>
                        <li><i className="fab fa-linkedin-in" onClick={() => window.open('https://www.linkedin.com/in/kartik-kehar-6aa036181/', 'target')}/></li>
                        <li><i className="fab fa-instagram" onClick={() => window.open('https://www.instagram.com/kartik_kehar/', 'target')}/></li>
                    </ul>
                </div>

            </div>
            <div id="profileAdditional" className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <button className="btn" onClick={()=>window.open('https://drive.google.com/file/d/1Ae88mI-CyZjIJAO__NwmajG8f3cQfTSM/view','target')}>Download CV <i className="fas fa-download" /></button>
                    </div>
                    <div className="col-sm-6">
                        <button className="btn" onClick={()=>props.handleChange('contact')}>Contact Me <i className="fas fa-long-arrow-alt-right" /></button>
                    </div>
                </div>
            </div>

        </div>
    )
}
import React from 'react';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';



export default function About(props) {

    return (

        <div id="aboutContainer" className="w-100">
            <div id="aboutContent" className="w-100">
                <div id="aboutMe">
                    <div className="aboutheading">
                        <h1>About <span>Me</span></h1>
                    </div>
                    <div className="row w-100 aboutDetails">
                        <div className="col-6">
                            <p>I am an enthusiast with 1 year work-experience willing to work for an organisation under working professionals which provides me the opportunity to improve my skills and knowledge for organisational as well as personal growth.</p>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>
                                    <div className="row w-100 justify-content-between">
                                        <div className='col-6 '><span> &nbsp;Age.... &nbsp; </span></div>
                                        <div className='col-6 '>22 years</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row w-100 justify-content-between">
                                        <div className='col-6 '><span> &nbsp;Experience...&nbsp; </span></div>
                                        <div className='col-6 '>1 year +</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row w-100 justify-content-between">
                                        <div className='col-6 ' ><span>Projects&nbsp; &nbsp;Completed...&nbsp; </span></div>
                                        <div className='col-6 '>20+</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="myServices">
                    <div className="aboutheading">
                        <h1>My <span>Services</span></h1>
                    </div>
                    <div className="row w-100 aboutDetails">
                        <div className="col-6">
                            <div className="aboutIcon d-flex justify-content-center "><div className="col-4"><i className="fas fa-code" /></div></div>
                            <h2>Web Development</h2>
                            <p>I Develop Websites on both Full time and Contract basis using ReactJS, Angular and JavaScript</p>
                        </div>
                        <div className="col-6" style={{borderLeft:'1px solid lavender'}}>
                            <div className="aboutIcon d-flex justify-content-center ">
                                <div className="col-4"><i className="fas fa-pen-nib"/>
                                </div>
                            </div>
                            <h2>Web Designing</h2>
                            <p>I Design Responsive Websites using HTML5, CSS3, Bootstrap & JQuery</p>

                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
}

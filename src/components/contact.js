import React from 'react';

import  MapContainer  from './map';
const google = window.google;



export default function Contact(props) {

    return (

        <div id="contactContainer" className="w-100">
            <div id="contactContent" className="w-100">
                <div id="aboutMe">
                    <div className="aboutheading">
                        <h1>Contact <span>Me</span></h1>
                    </div>
                    <div className="contactDetails w-100">
                        <div id="map">
                          <MapContainer/>
                        </div>


                    </div>
                </div>
                <div className="row w-100 aboutDetails">
                <div className="col-6">
                            <ul>
                                <li>
                                    <div className="row w-100 justify-content-between">
                                        <div className='col-4 '><span> &nbsp;Address.... &nbsp; </span></div>
                                        <div className='col-8 '>326/1, D-6, Sec-6, Rohini, Delhi-110085</div>
                                    </div> 
                                </li>
                             
                            
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>
                                    <div className="row w-100 justify-content-between">
                                        <div className='col-4 '><span> &nbsp;Email.... &nbsp; </span></div>
                                        <div className='col-8 '>kehar.kartik31@gmail.com</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row w-100 justify-content-between">
                                        <div className='col-4 '><span> &nbsp;Phone...&nbsp; </span></div>
                                        <div className='col-8 '>+91-8010601654</div>
                                    </div>
                                </li>
                              
                            </ul>
                        </div>
                        </div>



            </div>
        </div>
    );
}

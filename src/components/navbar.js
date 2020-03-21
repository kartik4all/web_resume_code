
import React from 'react';
export const Navbar=(props)=>{
    return(
        <div id="navbar">
            <ul>
                <li onClick={()=>props.handleChange('about')}>
                    <div  className={props.state.about ? "navbarItemActive navbarItemContainer":"navbarItemContainer"}>
                    <i className="fas fa-user-alt"/><br/>
                        <span>ABOUT</span>
                    </div>
                </li>
                <li onClick={()=>props.handleChange('resume')}>
                    <div  className={props.state.resume ? "navbarItemActive navbarItemContainer":"navbarItemContainer"}>
                    <i className="fas fa-server"/><br/>
                        <span>RESUME</span>
                    </div>
                </li>
             
                <li onClick={()=>props.handleChange('projects')}>
                    <div className={props.state.projects ? "navbarItemActive navbarItemContainer":"navbarItemContainer"}>
                    <i className="fas fa-tasks"/><br/>
                        <span>PROJECTS</span>
                    </div>
                </li>
                <li onClick={()=>props.handleChange('contact')}>
                    <div  className={props.state.contact ? "navbarItemActive navbarItemContainer":"navbarItemContainer"}>
                    <i className="fas fa-address-book"/><br/>
                        <span>CONTACT</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}
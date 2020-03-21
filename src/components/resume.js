import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
const Resume = () => {
    return (
        <div id="resumeContainer">
            <div id="resumeContent" className="w-100">
                <div id="resume">
                    <div className="resumeheading">
                        <h1>R<span>esume</span></h1>
                    </div>

                    <div id="resumeExperience">
                        <div className="resumeDetailsHeading w-100">
                            <h4><i className="fas fa-briefcase" />&nbsp;<span>EXPERIENCE</span></h4>
                        </div>
                        <div className="resumeDesc">
                            <div className="row w-100">
                                <div className="col-6" style={{ borderRight: '1px solid lavender' }}>
                                    <h2 className="resumeDescHead resumeDescHeadActive">Sep 2019-Present</h2>
                                    <h3 className="resumeDescSub">Front End Web Developer</h3>
                                    <h4 className="resumeDescMinor">Claro Energy pvt ltd</h4>
                                    <p className="resumeDescPara">Developing & handling all Claro projects as well as Designing websites</p>
                                </div>
                                <div className="col-6">
                                    <h2 className="resumeDescHead">June 2019-Sep 2019</h2>
                                    <h3 className="resumeDescSub">Web Developer Intern</h3>
                                    <h4 className="resumeDescMinor">Buddy4Study</h4>
                                    <p className="resumeDescPara">Developed 3 Projects on ReactJS, Also worked on Colgate-page/Awareness Camp sections</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="resumeTraining">
                        <div className="resumeDetailsHeading w-100">
                            <h4><i class="fas fa-laptop-code"/>&nbsp;<span>TRAININGS</span></h4>
                        </div>
                        <div className="resumeDesc">
                            <div className="row w-100">
                                <div className="col-6" style={{ borderRight: '1px solid lavender' }}>
                                    <h2 className="resumeDescHead">Aug 2019-Sep 2019-</h2>
                                    <h3 className="resumeDescSub">MEAN/MERN</h3>
                                    <h4 className="resumeDescMinor">Brain Mentors Pvt Ltd</h4>
                                    <p className="resumeDescPara">Learnt Back-end technologies MongoDB, ExpressJS & Node</p>
                                </div>
                                <div className="col-6">
                                    <h2 className="resumeDescHead">June 2018-August 2018</h2>
                                    <h3 className="resumeDescSub">Web Development</h3>
                                    <h4 className="resumeDescMinor">Brain Mentors Pvt Ltd</h4>
                                    <p className="resumeDescPara">Made Projects on JS, AngularJS, Angular, ReactJS, Redux, Saga</p>
                                </div>
                                <div className="col-6">
                                    <h2 className="resumeDescHead">June 2018-August 2019</h2>
                                    <h3 className="resumeDescSub">Web Designing</h3>
                                    <h4 className="resumeDescMinor">Brain Mentors Pvt Ltd</h4>
                                    <p className="resumeDescPara">Made Websites using HTML5, CSS3, HTML4, CSS2, JS, JQuery, Bootstrap</p>
                                </div>
                                <div className="col-6">
                                    <h2 className="resumeDescHead">June 2016-July 2016</h2>
                                    <h3 className="resumeDescSub">Core-Java</h3>
                                    <h4 className="resumeDescMinor">Brain Mentors Pvt Ltd</h4>
                                    <p className="resumeDescPara">Learnt Basic concepts of coding in Java</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="resumeEducation">
                        <div className="resumeDetailsHeading w-100">
                            <h4><i class="fas fa-university"/>&nbsp;<span>EDUCATION</span></h4>
                        </div>
                        <div className="resumeDesc">
                            <div className="row w-100">
                                <div className="col-6" style={{ borderRight: '1px solid lavender' }}>
                                    <h2 className="resumeDescHead">2015-2019</h2>
                                    <h3 className="resumeDescSub">B.Tech (ET)</h3>
                                    <h4 className="resumeDescMinor">College Of Engineering Roorkee</h4>
                                    <p className="resumeDescPara">Graduated scoring 71%</p>
                                </div>
                                <div className="col-6">
                                    <h2 className="resumeDescHead">2013-2015</h2>
                                    <h3 className="resumeDescSub">Higher-Sec Education</h3>
                                    <h4 className="resumeDescMinor">Aadharshila Vidyapeeth [CBSE]</h4>
                                    <p className="resumeDescPara">Passed with 93.4%</p>
                                </div>
                                <div className="col-6">
                                    <h2 className="resumeDescHead">2011-2013</h2>
                                    <h3 className="resumeDescSub">High School</h3>
                                    <h4 className="resumeDescMinor">Aadharshila Vidyapeeth [CBSE]</h4>
                                    <p className="resumeDescPara">Passed with 8.6 CGPA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="resumeheading">
                        <h1>My <span>Skills</span></h1>
                    </div>
                    <div id="resumeSkills">
                        <div className="row w-100">
                            <div className="col-6 paddingStructure">
                                <div className="resumeDetailsHeading w-100">
                                    <h4>&nbsp;&nbsp;<i className="fas fa-briefcase" />&nbsp;&nbsp;<span>DESIGN</span>&nbsp;&nbsp;</h4>
                                </div>
                                <div className="row">
                                    <div className="col-6 resumeSkillsCircular">
                                        <CircularProgress variant="static" value={90} />
                                        <span className="resumeSkillsCircularSpan">90%</span>
                                        <h4 style={{ fontSize: '14px', textAlign: 'center', marginBottom: '13px' }}>HTML5</h4>

                                    </div>
                                    <div className="col-6 resumeSkillsCircular">
                                        <CircularProgress variant="static" value={85} />
                                        <span className="resumeSkillsCircularSpan">85%</span>
                                        <h4 style={{ fontSize: '14px', textAlign: 'center', marginBottom: '13px' }}>CSS3</h4>

                                    </div>
                                    <div className="col-6 resumeSkillsCircular">
                                        <CircularProgress variant="static" value={85} />
                                        <span className="resumeSkillsCircularSpan">85%</span>
                                        <h4 style={{ fontSize: '14px', textAlign: 'center', marginBottom: '13px' }}>Bootstrap</h4>

                                    </div>
                                    <div className="col-6 resumeSkillsCircular">
                                        <CircularProgress variant="static" value={70} />
                                        <span className="resumeSkillsCircularSpan">70%</span>
                                        <h4 style={{ fontSize: '14px', textAlign: 'center', marginBottom: '13px' }}>JQuery</h4>

                                    </div>
                                </div>

                            </div>
                            <div className="col-6 paddingStructure" style={{ borderLeft: '1px solid lavender' }}>
                                <div className="resumeDetailsHeading w-100">
                                    <h4>&nbsp;&nbsp;<i className="fas fa-briefcase" />&nbsp;&nbsp;<span>LANGUAGES</span>&nbsp;&nbsp;</h4>
                                </div>
                                <div className="resumeSkillsLinear">
                                    <ul>
                                        <li>
                                            <div>
                                                <h4 style={{ fontSize: '14px', textAlign: 'left', marginBottom: '13px' }}>English</h4>
                                                <LinearProgress variant="determinate" value={70} />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="resumeSkillsLinear">
                                    <ul>
                                        <li>
                                            <div>
                                                <h4 style={{ fontSize: '14px', textAlign: 'left', marginBottom: '13px' }}>Hindi</h4>
                                                <LinearProgress variant="determinate" value={90} />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                              

                            </div>
                            <div className="col-6 paddingStructure" style={{ borderLeft: '1px solid lavender' }}>
                                <div className="resumeDetailsHeading w-100">
                                    <h4>&nbsp;&nbsp;<i className="fas fa-briefcase" />&nbsp;&nbsp;<span>CODING</span>&nbsp;&nbsp;</h4>
                                </div>
                                <div className="resumeSkillsLinear">
                                    <ul>
                                        <li>
                                            <div>
                                                <h4 style={{ fontSize: '14px', textAlign: 'left', marginBottom: '13px' }}>ReactJS</h4>
                                                <LinearProgress variant="determinate" value={80} />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="resumeSkillsLinear">
                                    <ul>
                                        <li>
                                            <div style={{ border: 'none' }}>
                                                <h4 style={{ fontSize: '14px', textAlign: 'left', marginBottom: '13px' }}>Redux</h4>
                                                <LinearProgress variant="determinate" value={80} />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                              
                                <div className="resumeSkillsLinear">
                                    <ul>
                                        <li>
                                            <div>
                                                <h4 style={{ fontSize: '14px', textAlign: 'left', marginBottom: '13px' }}>Angular</h4>
                                                <LinearProgress variant="determinate" value={50} />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="resumeSkillsLinear">
                                    <ul>
                                        <li>
                                            <div>
                                                <h4 style={{ fontSize: '14px', textAlign: 'left', marginBottom: '13px' }}>JavaScript</h4>
                                                <LinearProgress variant="determinate" value={80} />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="resumeSkillsLinear">
                                    <ul>
                                        <li>
                                            <div style={{ border: 'none' }}>
                                                <h4 style={{ fontSize: '14px', textAlign: 'left', marginBottom: '13px' }}>Type Script</h4>
                                                <LinearProgress variant="determinate" value={60} />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                              

                            </div>
                            <div className="col-6 paddingStructure" style={{ borderLeft: '1px solid lavender' }} >
                                <div className="resumeDetailsHeading w-100">
                                    <h4>&nbsp;&nbsp;<i className="fas fa-briefcase" />&nbsp;&nbsp;<span>KNOWLEDGE</span>&nbsp;&nbsp;</h4>
                                </div>
                                <div >
                                <div className="resumeSkillsKnowledge">
                                    <ul>
                                        <li>
                                            <h4 style={{ fontSize: '14px', textAlign: 'left' }}><i className="fas fa-check" />&nbsp;&nbsp;Github</h4>
                                            <h4 style={{ fontSize: '14px', textAlign: 'left' }}><i className="fas fa-check" />&nbsp;&nbsp;Axios</h4>
                                            <h4 style={{ fontSize: '14px', textAlign: 'left' }}><i className="fas fa-check" />&nbsp;&nbsp;JWT</h4>
                                            <h4 style={{ fontSize: '14px', textAlign: 'left' }}><i className="fas fa-check" />&nbsp;&nbsp;Keycloak</h4>
                                            <h4 style={{ fontSize: '14px', textAlign: 'left' }}><i className="fas fa-check" />&nbsp;&nbsp;Saga</h4>
                                            <h4 style={{ fontSize: '14px', textAlign: 'left' }}><i className="fas fa-check" />&nbsp;&nbsp;High Charts</h4>
                                            <h4 style={{ fontSize: '14px', textAlign: 'left' }}><i className="fas fa-check" />&nbsp;&nbsp;Material Design</h4>
                                            <h4 style={{ fontSize: '14px', textAlign: 'left' }}><i className="fas fa-check" />&nbsp;&nbsp;JIRA</h4>
                                            <h4 style={{ fontSize: '14px', textAlign: 'left' }}><i className="fas fa-check" />&nbsp;&nbsp;Jenkins</h4>
                                            <h4 style={{ fontSize: '14px', textAlign: 'left' }}><i className="fas fa-check" />&nbsp;&nbsp;Google-maps</h4>
                                            
                                        </li>
                                    </ul>
                                </div>
                                </div>




                            </div>
                        </div>
                    </div>





                </div>



            </div>
        </div>
    )
}
export default Resume;
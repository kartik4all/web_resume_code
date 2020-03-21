import React, { useEffect } from 'react';


import AGROANALYSIS from '../assets/images/claro-agroAnalysis.jfif';
import CLAROFARMER from '../assets/images/claro-farmer.jfif';
import CLAROHC from '../assets/images/claro-hc.jfif';
import CLAROHOME from '../assets/images/claro-home.jfif';
import CLAROIAAS from '../assets/images/claro-iaas.jfif';
import CLARORMS from '../assets/images/claro-rms.jfif';
import MANDIDASHBOARD from '../assets/images/claro-mandiDashboard.jfif';
import ENTRY from '../assets/images/entry.jfif';
import OGT from '../assets/images/ogt.jfif';
import VENDOR from '../assets/images/vendor.jfif';
import AGROFORM from '../assets/images/claro-agroform.jfif';
import WYNKCLONE from '../assets/images/wynkClone.jfif';
import APPLECLONE from '../assets/images/appleclone.jfif';
import BOOKMYSHOWCLONE from '../assets/images/bookmyshow_clone.jfif';
import BCCICLONE from '../assets/images/bcci_clone.jfif';
import GAMING from '../assets/images/gaming.jfif';




const $ = require("jquery");
export default function Projects(props) {

    const [value, setValue] = React.useState(0);


    useEffect(() => {
        // document.querySelectorAll("#projects button") && document.querySelectorAll("#projects button")[0] && document.querySelectorAll("#projects button")[0].classList.add('active')

    });

    const switchGallery = (e) => {
        var value = e.target.name;

        if (value == "all") {
            $('.filter').show('1000');
        }
        else {
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');
        }
        if ($(".projectfilter-button").removeClass("active")) {

            e.target.classList.remove("active");
        }
        e.target.classList.add("active");
        setValue(value + 1)
    }

    const onButtonClick=(param)=>{
        // alert(param);
      switch(param){
          case 'APPLECLONE':window.open('https://kartik4all.github.io/appleclone/');
          case 'AGROANALYSIS':window.open('https://maps.claroenergy.in/home/#/agroAnalytics');
          case 'CLAROFARMER':window.open('https://maps.claroenergy.in/home/#/farmer');
          case 'CLAROHC':window.open('https://maps.claroenergy.in/home/#/harvestCalendar');
          case 'CLAROHOME':window.open('https://maps.claroenergy.in/home/');
          case 'CLAROIAAS':window.open('https://maps.claroenergy.in/home/#/iaas');
          case 'CLARORMS':window.open('https://maps.claroenergy.in/home/#/rms');
          case 'MANDIDASHBOARD':window.open('https://maps.claroenergy.in/home/#/mandiDashboard');
          case 'ENTRY':window.open('http://entry.b4s.in/login');
          case 'OGT':window.open('http://entry.b4s.in/login');
          case 'VENDOR':window.open('http://entry.b4s.in/login');
          case 'AGROFORM':window.open('https://maps.claroenergy.in/agroform');
          case 'WYNKCLONE':window.open('https://kartik4all.github.io/MusicPlayerDemo/');
          case 'BOOKMYSHOWCLONE':window.open('https://kartik4all.github.io/bookmyshow_clone/index.html');
          case 'BCCICLONE':window.open('https://kartik4all.github.io/bcci_clone/');
          case 'GAMING':window.open('https://kartik4all.github.io/gaming_static/');

      }
    }
    return (

        <div id="projectContainer" className="w-100">
            <div id="projectContent" className="w-100">
                <div id="projects">
                    <div className="aboutheading row">
                        <div className="col-5">  <h1>My <span>Projects</span>

                        </h1></div>
                        <div className="col-7 projectButtons"> <div align="center">
                            <button className="btn btn-default projectfilter-button" data-filter="all" name="all" onClick={(e) => switchGallery(e)}>All</button>
                            <button className="btn btn-default projectfilter-button" data-filter="designing" name="designing" onClick={(e) => switchGallery(e)}>Designing</button>
                            <button className="btn btn-default projectfilter-button" data-filter="development" name="development" onClick={(e) => switchGallery(e)}>JS/ReactJS</button>
                        </div></div>


                    </div>
                    <div className="row w-100 projectDetails">

                        <div className="row w-100">
                            <div className="col-sm-6 gallery_productHeight">



                                <div className="gallery_product  filter development">
                                    <div className="gallery_productContainer">
                                        <img src={CLAROFARMER} className="img-responsive" />
                                        <div className="galleryProductHover" onClick={(e)=>onButtonClick('CLAROFARMER')}>
                                            <div className="galleryProductHoverDetail">
                                                <span>Farmer portal to view/edit all Farmer Details.</span>
                                                <h6>-ReactJS, HighCharts</h6>
                                            </div>
                                            <div className="galleryProductHoverSkill" >
                                                <div><button className="btn" >View</button></div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3>Claro Farmer</h3>

                                </div>
                                <div className="gallery_product  filter designing">
                                    <div className="gallery_productContainer">  <img src={BCCICLONE} className="img-responsive" />
                                    <div className="galleryProductHover" onClick={()=>onButtonClick('BCCICLONE')}>
                                            <div className="galleryProductHoverDetail">
                                                <span>Static Website</span>
                                                <h6>-HTML5, CSS3</h6>
                                            </div>
                                            <div className="galleryProductHoverSkill" >
                                                <div><button className="btn">View</button></div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3>BCCI Clone</h3>
                                </div>
                                <div className="gallery_product  filter development">
                                    <div className="gallery_productContainer">   <img src={CLAROHC} className="img-responsive" />
                                    <div className="galleryProductHover" onClick={()=>onButtonClick('CLAROHC')}>
                                            <div className="galleryProductHoverDetail">
                                                <span>Calendar integrated with Maps for Crop Procurement</span>
                                                <h6>-ReactJS, GoogleMaps, FullCalendar</h6>
                                            </div>
                                            <div className="galleryProductHoverSkill" >
                                                <div><button className="btn">View</button></div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3>Harvest Calendar</h3>
                                </div>
                                <div className="gallery_product  filter designing">
                                    <div className="gallery_productContainer">  <div className="galleryProductHover" onClick={()=>onButtonClick('BOOKMYSHOWCLONE')}>
                                            <div className="galleryProductHoverDetail">
                                                <span>Static Website</span>
                                                <h6>-HTML4, CSS2</h6>
                                            </div>
                                            <div className="galleryProductHoverSkill" >
                                                <div><button className="btn">View</button></div>
                                            </div>
                                        </div>  <img src={BOOKMYSHOWCLONE} className="img-responsive" /></div>
                                    <h3>BookmyShow Clone</h3>
                                </div>
                                <div className="gallery_product  filter development">
                                    <div className="gallery_productContainer"> 
                                    <div className="galleryProductHover" onClick={()=>onButtonClick('AGROFORM')}>
                                            <div className="galleryProductHoverDetail">
                                                <span>Form for Daily Mandi Crop Prices</span>
                                                <h6>-ReactJS, MaterialDesign</h6>
                                            </div>
                                            <div className="galleryProductHoverSkill" >
                                                <div><button className="btn">View</button></div>
                                            </div>
                                        </div>
                                      <img src={AGROFORM} className="img-responsive" /></div>
                                    <h3>Agro Form</h3>
                                </div>



                                <div className="gallery_product  filter development">
                                    <div className="gallery_productContainer"> 
                                    <div className="galleryProductHover" onClick={()=>onButtonClick('CLAROHOME')}>
                                            <div className="galleryProductHoverDetail">
                                                <span>Various Claro Services plotted on Google Maps</span>
                                                <h6>-ReactJS, GoogleMaps</h6>
                                            </div>
                                            <div className="galleryProductHoverSkill" >
                                                <div><button className="btn">View</button></div>
                                            </div>
                                        </div>
                                     <img src={CLAROHOME} className="img-responsive" /></div>
                                    <h3>Claro Home</h3>
                                </div>





                            </div>
                            <div className="col-sm-6 gallery_productWidth">


                                <div className="gallery_product  filter designing" >
                                    <div className="gallery_productContainer" >   <img src={APPLECLONE} className="img-responsive" />
                                    <div className="galleryProductHover" onClick={()=>onButtonClick('APPLECLONE')}>
                                            <div className="galleryProductHoverDetail">
                                                <span>Static Website</span>
                                                <h6>-Bootstrap, HTML5, CSS3</h6>
                                            </div>
                                            <div className="galleryProductHoverSkill" >
                                                <div><button className="btn">View</button></div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3>Apple Clone</h3>
                                </div>




                                <div className="gallery_product  filter development">
                                    <div className="gallery_productContainer">
                                    <div className="galleryProductHover" onClick={()=>onButtonClick('MANDIDASHBOARD')}>
                                            <div className="galleryProductHoverDetail">
                                                <span>Dashboard for Mandi Price Analysis</span>
                                                <h6>-ReactJS, HighCharts</h6>
                                            </div>
                                            <div className="galleryProductHoverSkill" >
                                                <div><button className="btn">View</button></div>
                                            </div>
                                        </div>
                                          <img src={MANDIDASHBOARD} className="img-responsive" /></div>
                                    <h3>Mandi Dashboard</h3>

                                </div>
                                <div className="gallery_product  filter development">
                                    <div className="gallery_productContainer"> 
                                    <div className="galleryProductHover" onClick={()=>onButtonClick('CLARORMS')}>
                                            <div className="galleryProductHoverDetail">
                                                <span>Dashboard for Monitoring Devices on Field</span>
                                                <h6>-ReactJS, HighCharts</h6>
                                            </div>
                                            <div className="galleryProductHoverSkill" >
                                                <div><button className="btn">View</button></div>
                                            </div>
                                        </div>
                                      <img src={CLARORMS} className="img-responsive" /></div>
                                    <h3>Claro RMS</h3>
                                </div>
                                <div className="gallery_product  filter designing">
                                    <div className="gallery_productContainer">
                                    <div className="galleryProductHover" onClick={()=>onButtonClick('GAMING')}>
                                            <div className="galleryProductHoverDetail">
                                                <span>Static Website</span>
                                                <h6>-HTML5, CSS3</h6>
                                            </div>
                                            <div className="galleryProductHoverSkill" >
                                                <div><button className="btn">View</button></div>
                                            </div>
                                        </div>
                                         <img src={GAMING} className="img-responsive" /></div>
                                    <h3>Gaming Website</h3>
                                </div>
                                <div className="gallery_product  filter development">
                                    <div className="gallery_productContainer"> 
                                    <div className="galleryProductHover" onClick={()=>onButtonClick('AGROANALYSIS')}>
                                            <div className="galleryProductHoverDetail">
                                                <span>Dashboard for Agriculture Price Analysis</span>
                                                <h6>-ReactJS, HighStock</h6>
                                            </div>
                                            <div className="galleryProductHoverSkill" >
                                                <div><button className="btn">View</button></div>
                                            </div>
                                        </div>
                                    <img src={AGROANALYSIS} className="img-responsive" /></div>
                                    <h3>Agro Analysis</h3>
                                </div>
                                <div className="gallery_product  filter development">
                                    <div className="gallery_productContainer">  
                                    <div className="galleryProductHover" onClick={()=>onButtonClick('OGT')}>
                                            <div className="galleryProductHoverDetail">
                                                <span>Smart Form for entering Student Details </span>
                                                <h6>-ReactJS</h6>
                                            </div>
                                            <div className="galleryProductHoverSkill" >
                                                <div><button className="btn">View</button></div>
                                            </div>
                                        </div>
                                    <img src={OGT} className="img-responsive" /></div>
                                    <h3>B4s OGT</h3>
                                </div>
                                <div className="gallery_product  filter development">
                                    <div className="gallery_productContainer"> 
                                    <div className="galleryProductHover" onClick={()=>onButtonClick('VENDOR')}>
                                            <div className="galleryProductHoverDetail">
                                                <span>Vendor Dashboard to manage Documents </span>
                                                <h6>-ReactJS</h6>
                                            </div>
                                            <div className="galleryProductHoverSkill" >
                                                <div><button className="btn">View</button></div>
                                            </div>
                                        </div>
                                     <img src={VENDOR} className="img-responsive" /></div>
                                    <h3>B4s Vendor</h3>
                                </div>
                                <div className="gallery_product  filter development">
                                    <div className="gallery_productContainer">
                                    <div className="galleryProductHover" onClick={()=>onButtonClick('WYNKCLONE')}>
                                            <div className="galleryProductHoverDetail">
                                                <span>Music Player to play music online</span>
                                                <h6>-JS, Bootstrap</h6>
                                            </div>
                                            <div className="galleryProductHoverSkill" >
                                                <div><button className="btn">View</button></div>
                                            </div>
                                        </div>
                                          <img src={WYNKCLONE} className="img-responsive" /></div>
                                    <h3>Wynk Clone</h3>
                                </div>
                                <div className="gallery_product  filter development">
                                    <div className="gallery_productContainer"> 
                                    <div className="galleryProductHover" onClick={()=>onButtonClick('CLAROIAAS')}>
                                            <div className="galleryProductHoverDetail">
                                                <span>Dashboard to manage Irrigation Devices</span>
                                                <h6>-ReactJS, HighCharts</h6>
                                            </div>
                                            <div className="galleryProductHoverSkill" >
                                                <div><button className="btn">View</button></div>
                                            </div>
                                        </div>
                                      <img src={CLAROIAAS} className="img-responsive" /></div>
                                    <h3>Claro IAAS</h3>
                                </div>
                                <div className="gallery_product  filter development">
                                    <div className="gallery_productContainer"> 
                                    <div className="galleryProductHover" onClick={()=>onButtonClick('ENTRY')}>
                                            <div className="galleryProductHoverDetail">
                                                <span>Detailed Student Form with Document upload</span>
                                                <h6>-ReactJS</h6>
                                            </div>
                                            <div className="galleryProductHoverSkill" >
                                                <div><button className="btn">View</button></div>
                                            </div>
                                        </div>
                                     <img src={ENTRY} className="img-responsive" /></div>
                                    <h3>B4s Entry</h3>
                                </div>


                            </div>



                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
}

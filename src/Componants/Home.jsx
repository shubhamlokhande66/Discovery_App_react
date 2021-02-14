
import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import { PageHeader } from "react-bootstrap";
import shubham from '../Assets/Coastal_200626_112714.mp4'
import Drag from '../Assets/hold-n-drag.svg'
import Logo from '../Assets/Logo+one.png'
import "./Home.css"


export default function App () {


    // const header = document.querySelector("header");
    // const sectionOne = document.querySelector(".home-intro");
    
    // const faders = document.querySelectorAll(".fade-in");
    // const sliders = document.querySelectorAll(".slide-in");
    
    // const sectionOneOptions = {
    //   rootMargin: "-200px 0px 0px 0px"
    // };
    
    // const sectionOneObserver = new IntersectionObserver(function(
    //   entries,
    //   sectionOneObserver
    // ) {
    //   entries.forEach(entry => {
    //     if (!entry.isIntersecting) {
    //       header.classList.add("nav-scrolled");
    //     } else {
    //       header.classList.remove("nav-scrolled");
    //       sectionOneObserver.observe(sectionOne);
    //     }
    //   });
    // },
    // sectionOneOptions);

    
    // const appearOptions = {
    //   threshold: 0,
    //   rootMargin: "0px 0px -250px 0px"
    // };
    
    // const appearOnScroll = new IntersectionObserver(function(
    //   entries,
    //   appearOnScroll
    // ) {
    //   entries.forEach(entry => {
    //     if (!entry.isIntersecting) {
    //       return;
    //     } else {
    //       entry.target.classList.add("appear");
    //       appearOnScroll.unobserve(entry.target);
    //     }
    //   });
    // },
    // appearOptions);
    
    // faders.forEach(fader => {
    //   appearOnScroll.observe(fader);
    // });
    
    // sliders.forEach(slider => {
    //   appearOnScroll.observe(slider);
    // });
    window.onscroll = function () {
        scrollRotate();
    };
    
    function scrollRotate() { 
        let image = document.getElementById("reload");
        image.style.transform = "rotate(" + window.pageYOffset/10 + "deg)";
    }


useEffect(() =>{
Aos.init({duration:3000});
},[]);

        return (


            <div >
                
                <header className="header">
                <div className="Logo">
                <img className="Logo1" src={Logo} alt="Sample photo"/>
                </div>
                    <nav className="navbar">
                        <ul className="menu">
                            <li className="About">
                                <a > About DLC </a>
                            </li>
                            <li className="About">
                                <a> Our Worlds </a>
                            </li>
                            <li className="About">
                                <a href="../experience"> Experience </a>
                            </li>
                            <li className="About">
                                <a> Press </a>
                            </li>
                            <li className="About">
                                <a> Contact </a>
                            </li>
                            <li className="About">
                                <div className="menubar" >
                                    <div className="bar1"></div>
                                    <div className="bar2"></div>
                                    <div className="bar3"></div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </header>
                <h1>
                    <div data-aos="zoom-in"className="On-video">
                        <div  className="start-content">
                            <div>D</div>
                            <div>i</div>
                            <div>s</div>
                            <div>c</div>
                            <div>o</div>
                            <div>v</div>
                            <div>e</div>
                            <div>r</div>
                        </div>
                        <span>
                            <div className="start-content2">your world</div>
                        </span>
                    </div>
                </h1>

                <div className="shubham">
                    <video autoPlay muted loop id="myVideo" >
                        <source src={shubham} type="video/mp4"></source>
                    </video>
                </div>

                <div className="main">
                    <div class="image">
                    </div >
                    <div className="row">
                        <div className="image-text">
                            <img className="image1" src="https://dxaurk9yhilm4.cloudfront.net/images/275/Home_76fe09b415dcada4f46ba4114338562c.jpg" />
                            <div className="image-text2">
                                <img  className="image2" src="https://dxaurk9yhilm4.cloudfront.net/images/27/DriftwoodDevelopment_JessicaJohnson_March2019_52_df8586bb4c14d18f77324f7452f392cd.jpg"></img>
                            
                               
                                <div className="image-text3">

                                    <h3 className="content-title" data-scroll="titleLines">
                                        <div className="c-line">Welcome to</div>
                                        <span >
                                            <div className="c-line2" data-scroll="titleLines">
                                                our world
              </div>
                                        </span>
                                    </h3>
                                    <p>
                                        <div className="style" >
                                            Discover the unique atmosphere of our private <br/>
                               
                                            residential club communities. Once experienced. Never <br/>
                                    
                                            forgotten. This is classic, comfortable, modern living in<br/>
                                         
                                            nature’s most spectacular settings worldwide<br/>
                                      
                                            Reassuringly exclusive. Generously welcoming.<br/>
                                   
                                       
                                            your unique world – a place where families love to be;<br/>
                                    
                                            creating unforgettable moments, together.<br/>
                                       </div>
                                    </p>
                                </div>


                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="headline">
                        <h1>
                            <div className="headline1">Explore</div>
                            <span>
                                <div className="headline2">
                                    our worlds
      </div>
                            </span>
                        </h1>
                    </div>
                </div>

                <p>
      <div className="para">From majestic mountainscapes to beautiful coastlines... breathtaking </div>
      <div className="para" >worlds to uncover and experience. </div>
    </p>
    <figure className="figure">
      <main >
        <img className="cards" src="https://dxaurk9yhilm4.cloudfront.net/images/6944/Carousel_500x750_200612_084523_397186feb8bd51bb37bc24fc2b9b500f.jpg" alt="Sample photo"/>
        <img className="card2" src="https://dxaurk9yhilm4.cloudfront.net/images/6894/IMG_00162-copy_397186feb8bd51bb37bc24fc2b9b500f.jpg" alt="Sample photo"/>
        <div  className="card4" >
        <img className="card3" src="https://dxaurk9yhilm4.cloudfront.net/images/6492/LM-Coco-Point-Barbuda-0266_397186feb8bd51bb37bc24fc2b9b500f.jpg"  alt="Sample photo"/>
        </div>
      </main>
    </figure>
    <div className="location" >
      <img  id="reload" className="logo"  src={Drag} alt="Hold & Drag" />
      
    </div>
    <nav className="button1">
    <button className="button">


    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>
  

    </button>
    <button className="button" >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
    </button>
    <hr className="line"size="8" width="90%" color="grey"/>  
  </nav>
  <div className="title3">
  <h1 className="header2">
    <div className="lands">
     Lands of 
    </div>
    <span>
      <div className="discovery">
     Discovery
      </div>
    </span>
  </h1>
</div>	

<div className="sentence">
  
  <p>
    <div className="para2">
      A world away from the day-to-day. Your escape. Your haven. Your world.
    </div>
    <div  className="para2">
      Explore the map below and take a journey to our communities.
    </div>
  </p>
</div>
  <div className="division-nav2">
  <nav className="navbar2">
    <div className="nav-dropdown">
      <span>
        <div> America & Caribbean </div>
      </span>
      </div>
    <div  className="next">
      <span>
        Hawaii
      </span>
    </div>
    <div className="next22">
      <span >
        Europe
      </span>
    </div>  
    </nav>
    </div>

    <div className="clouds">
    <div className="map-box">
    <img  className="earth" src="https://discoverylandco.com/static/globe-usa.jpg" alt="" />
    </div>
    </div>
 
    <div className="text-block">
  
      <img  className="swimming-deck" src="https://dxaurk9yhilm4.cloudfront.net/images/6945/Map_500x750_200612_084636_397186feb8bd51bb37bc24fc2b9b500f.jpg"/>
      <div className="suntop">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg>
    </div>

    <div className="speed">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-speedometer2" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
  <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/>
</svg>
    </div>
    <div className="compas">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-compass" viewBox="0 0 16 16">
  <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
  <path d="M6.94 7.44l4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
</svg>
    </div>
    <div class="name">
      <h2>Maharashtra</h2>
    </div>
    <div class="maplocation">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
<div className="value">
<h6>40.41N/-45.50W</h6>
</div>

    </div>
  </div>
  
 
      <div className="Background1" />
      <div className="Background2" />

    
  <img   className="img1" src="https://dxaurk9yhilm4.cloudfront.net/images/728/Expereinces_slider_190716_095517_e36797c82dbcb9dea0800f713424f022.jpg"/> 
 <img  className="img2" src="https://dxaurk9yhilm4.cloudfront.net/images/729/lifestyle_slider_190716_095537_fc98236fcd7afd38ca0fd181cf61bcb6.jpg"/>
 <div className="img4"> 
 <img className="img3" src="https://dxaurk9yhilm4.cloudfront.net/images/730/wellness_slider_190716_095551_90f8ce634cc6ad7a15d605007f03ee5c.jpg"/> 
 </div> 
 <div className="ExpMain">
   <div className="Exp" >
   <h1>Experience</h1>
   </div>
   <div className="Exp1" >
<h1>Lifestyle</h1>
</div>
<div className="Exp2" >
<h1>Wellness</h1>
</div>
</div>





  <footer   className="footer"  data-parallax-no-firefox >
    <div>
      <a>
        <svg></svg>
      </a>
      <nav>
        <div className="last-left-content">
         <h4>
           Get in touch
         </h4>
         </div>
         <div className="last-left-content1">
         <ul>
           <li>
            <a href="tel:(480) 624-5200" >(480) 624-5200</a>
           </li>
           <li>
            <a href="mailto:mail@discoverylandco.com">mail@discoverylandco.com</a>
           </li>
         </ul>
        </div>
        <div className="last-content">
          <ul>
            <li>
              <a>About DLC</a>
            </li>
            <li>
              <a>our Worlds</a>
            </li>
            <li>
              <a>Experiences</a>
            </li>
            <li>
              <a>Press</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="last-content2">
          <ul>
            <li>
              <a>
                Magazine
              </a>
            </li>
            <li>
              <a>
                Careers
              </a>
            </li>
            <li>
              <a>
                Foundation
              </a>
            </li>
            <li>
              <a>
                Company
              </a>
            </li>
            <li>
              <a>
                Privacy
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div className="LogoF">
                <img className="LogoF1" src={Logo} alt="Sample photo"/>
                </div>
   </footer>



            </div>
        );
    }

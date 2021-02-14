import React, { useEffect } from 'react'
import shubham from '../../Assets/experiences_hero.mp4'
import '../Experience/Experience.css'
import Logo from '../../Assets/Logo+one.png'



export default function Experience (){

        return (
<div>
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
                                <a  href="../experience"> Experience </a>
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

<div className="Expvideo">
                    <video autoPlay muted loop id="ExpVideo" >
                        <source src={shubham} type="video/mp4"></source>
                    </video>
                </div>

                
                <div class="division">
      <div class="division1">
        <p class="paragraph">
         
            Memorable days. Exceptional nights. We believe it’s our mission to <br/>
          
         
            make every minute matter. So you can live your life to the fullest,<br/>
        
         
            with the people closest to you.<br/>
       
        </p>
      </div>
    </div>
<div className="headex">
    <div className="head">
      <h3>
        Exclusive to
        <br></br>
        your world
      </h3>
    </div>
    <br></br>
    <div className="para1">
      <p>
        <div className="style">
          Our worlds are designed to offer you endless<br/>
        opportunities to share incredible once-in-a-lifetime<br/>
        experiences and adventures every single minute of the<br/>
        day. Each of our settings offers a relaxed sense of<br/>
       community through exceptional clubhouses,<br/>
       world-class golf courses, welcoming staff and an<br/>
        extensive Outdoor Pursuits program. Create moments<br/>
       of joy and wonder, unforgettable memories and <br/>
       cherished times, together with those who matter most.<br/>
        </div>
      </p>
    </div>
    
        <figure>
          <div>
            <img className="ride" src="https://dxaurk9yhilm4.cloudfront.net/images/899/Scuba_5ae402c9837860cd6e4f65e304b3a5fa.jpg"/>
          </div>
        </figure>
        </div>



        <div className="background-grey">
      <figure>
      <div className="grey-smooth"> 

        <div className="man-golf">
          <div className="man-golfback"></div>
          <img className="man-golf-img" src="https://dxaurk9yhilm4.cloudfront.net/images/533/Golf3_4d32d1f061062da257f8ac1083a047ac.jpg"/>
          <div className="container">
            <h1 className="Golf-Tittle">Golf</h1>
            <div className="text-golf">
              <p>
                We commission the world’s most 
    renowned course architects to design spectacular
   golf experiences on challenging yet incredibly 
   playable 18-hole courses. Our trademark comfort 
   stations also set new standards in on-course
   amenities.
              </p>
            </div>
            <a>
              <div className="box-golf">
              <div className="explore">Explore</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </figure>
    </div>



    <figure>
      <div className="grey-smooth2"> 

        <div className="mountain">
          <img className="mountain-img" src="https://dxaurk9yhilm4.cloudfront.net/images/144/OD_image_4d32d1f061062da257f8ac1083a047ac.jpg"/>
          <div className="container2">
            <h1 className="mountain-Tittle">Outdoor Pursuits</h1>
            <div className="text-mountain">
              <p>
                Our signature Outdoor Pursuits
       program is designed for families to create
       memories together. Whether you’re trying a new
       sport or taking a day trip, our team will ensure
       you make the most of every minute with
       activities designed to help you take advantage
       of everything each region has to offer.
              </p>
            </div>
            <a>
              <div className="box-golf2">
              <div className="explore2">Explore</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </figure>
    <div>
      <section>
        <a>
          <figure>
            <img className="ocean-tree" src="https://dxaurk9yhilm4.cloudfront.net/images/139/img_5dabbd1a34149dcaed83515ff1526a0f.jpg"/>
          </figure>
          <div className="title34">
            <h1 className="title-inner">Our Worlds</h1>
          </div>
          <div className="box-golf3">
            <div className="explore3">Explore</div>
            </div>
        </a>
      </section>
    </div>
    

    <footer   className="footer1"  data-parallax-no-firefox >
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

        )
}
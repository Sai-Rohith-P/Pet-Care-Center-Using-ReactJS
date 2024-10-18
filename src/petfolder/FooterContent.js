import React, { useState } from 'react'
import './FooterContent.css'

import call from '../imges/footer/call.svg'
import mail from '../imges/footer/mail.svg'
import location from '../imges/footer/Location.svg'

import arrow from '../imges/arrow.svg'
// social Media
import twitter from '../imges/footer/socialmedia/twitter.png'
import facebook from '../imges/footer/socialmedia/facebook.png';
import inst from '../imges/footer/socialmedia/insta.png';
import linkedin from '../imges/footer/socialmedia/linkedin.png';

const linkUrl ="www.linkedin.com/in/rohith-sai-pudi-9b64462a9";
const SMedia = [
  {
    path:twitter, 
    links:"#"
  },
  {
    path:facebook, 
    links:"#"
  },
  {
    path:inst,  
    links:"#"
  },
  {
    path:linkedin, 
    links:"#",
  }
];



function FooterContent() {
  return (
   <>
    <div className='FooterContent'>
      <div className='footerContentCenter'>
        <div className='firstBox'>
          <SideHeadingFooter heading="GET IN TOUCH" />
          <p className='myDetails'>Contact us for any pet care inquiries, appointments, or questions. We're here to assist you anytime!</p>
          <LocationDetail location={location} address="AKP, Vizag, AP" />
          <LocationDetail location={mail} address="rohithsai4734@gmail.com" />
          <LocationDetail location={call} address="6302255030" />
        </div>
        <div className='firstBox'>
          <LinksTwo headings="QUICK LINKS" />
        </div>
        <div className='firstBox'>
          <LinksTwo headings="POPULAR LINKS" />
        </div>



        <div className='firstBox'>
          <SideHeadingFooter heading="NEWS LETTER" />
          <div className='inp'>
            <input type='text' placeholder='Your Mail'></input>
            <button>SignIn</button>
          </div>
          <h3>Follow us</h3>
          <div className='socialmedia'>
            {
              SMedia.map((eachImg, index) =>{
                const {path,links}=eachImg;
                return  (
                  <SocialMedia key={index} img={path} links={links} />
                )
              })
            }
          </div>
        </div>
      </div>
      <div className='divConditions'>
      <p>Terms & Conditions I Privacy Policy I Customer Support I Payments I Help I FAQs</p>
      </div>
    </div>
    <div className="lastfooterlast">
      <div className="firstdiiv">
        <p><span className='spanElememntlast'>©</span> 2024 Pet Care Center. <span className='spanElememntlast'>All Rights Reserved.</span></p>
      </div>
      <div className="firstdiiv">
        <p><span className='spanElememntlast'>Designed By</span> Rohith Sai.</p>
      </div>
    </div>
    </>
  )
}

export default FooterContent


function SideHeadingFooter({ heading }) {
  return (
    <div className='top'>
      <div className='barline'></div>
      <div className='text'>
        <h2>{heading}</h2>
      </div>
    </div>
  )
}
function LocationDetail({ location, address }) {
  return (
    <div className='locationDetail'>
      <img src={location}></img>
      <span>{address}</span>
    </div>
  )
}

function LinksTwo({ headings }) {
  return (
    <div className='centerLinks'>
      <SideHeadingFooter heading={headings} />
      <ul>
        <li><img className='arrow' src={arrow}></img> <span>Home</span></li>
        <li><img className='arrow' src={arrow}></img> <span>About</span></li>
        <li><img className='arrow' src={arrow}></img> <span>Services</span></li>
        <li><img className='arrow' src={arrow}></img> <span>Meet The Team</span></li>
        <li><img className='arrow' src={arrow}></img> <span>Latest Blog</span></li>
        <li><img className='arrow' src={arrow}></img> <span>Contact Us</span></li>
      </ul>
    </div>
  )
}


function SocialMedia({ img,links}) {
  const [sMedia, setSMedia] = useState(false);

  const OnmouseHover = () => {
    setSMedia(true);
  };

  const onMouseOut = () => {
    setSMedia(false);
  };

  return (
    <div className='imgBG' style={{ backgroundColor: sMedia ? "orange" : "rgb(231, 231, 231)" }} onMouseOver={OnmouseHover} onMouseOut={onMouseOut} >
      <a href={links}><img src={img} style={{ filter: sMedia ? "invert(0)" : "invert(0.5) sepia(1) saturate(10)" }} alt="social media icon"></img></a>
    </div>
  );
}


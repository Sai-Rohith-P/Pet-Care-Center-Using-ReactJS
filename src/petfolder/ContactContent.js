import React from 'react'
import '../petfolder/ContactContent.css'

import location from '../imges/ContactUsImages/ContactImg.svg'
import Email from '../imges/ContactUsImages/EmailImg.svg'
import Contact from '../imges/ContactUsImages/ContactImg.svg'
import SocialM from '../imges/ContactUsImages/SocialMediaLinkesImg.svg'

function ContactContent() {
    const MyDetails = [
        {
            imgPath: location,
            name: "Home Address",
            paraText: "4-19 Anakapalli Road,",
            paratext2: "Vizag,AP"
        },
        {
            imgPath: Email,
            name: "Email Us",
            paraText: "rohithsai4734@gmail.com",
            paratext2: "darlingrohith12@gmail.com"
        },
        {
            imgPath: Contact,
            name: "Call Us",
            paraText: "+91 6302255030",
            paratext2: "+91 6302255030"
        },
        {
            imgPath: SocialM,
            name: "Social Media",
            paraText: "Personal Portfolio",
            paratext2: "LinkedIn"
        }
    ]
    return (
        <div className='contactcontent'>
            <div className="rightLeft leftright">
                {
                    MyDetails.map((eachblock) => {
                        const { imgPath, name, paraText, paratext2 } = eachblock;
                        return (
                            <div className="detailOne">
                                <div className='imgBg'> <img src={imgPath} alt="" /></div>
                                <h3>{name}</h3>
                                <p>{paraText}<br />{paratext2}</p>
                            </div>
                        )
                    })
                }
                {/* <div className="detailOne">
                   <div className='imgBg'> <img src={location} alt="" /></div>
                   <h3>Home Address</h3>
                   <p>4-19 Anakapalli Road,<br />Vizag,AP</p>
                </div>
                <div className="detailOne"></div>
                <div className="detailOne"></div>
                <div className="detailOne"></div> */}

            </div>
            <div className="rightLeft rightLeft1">
                <h3>Get In Touch</h3>
                <p>Contact us for any pet care inquiries, appointments, or questions. We're here to assist you anytime!</p>
                <div className="divinput">
                    <input type="text" placeholder='Your Name' />
                    <input type="text" placeholder='Your Email' />
                </div>
                <input type="text" placeholder='Your Subject' />
                <textarea name="textarea" rows={5} cols={75} placeholder='Write Your Message Here..'></textarea>
                <button>Send Message</button>
            </div>
        </div>
    )
}

export default ContactContent

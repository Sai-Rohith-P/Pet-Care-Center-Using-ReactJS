import React, { useState } from 'react'
import './AboutPage.css';
import SideHeadingstyle from './SideHeadingstyle.js';
import Aboutimg from '../imges/aboutimg.jpg';

function AboutPage() {
    const para1 = "Our mission is to provide a safe, loving, and professional environment where pets receive top-quality care and attention. We strive to ensure that each pet feels at home, offering services like grooming, training, medical attention, and playtime with compassion and dedication.";
    const para2 = "Our vision is to be the leading pet care center, recognized for our exceptional standards of service and trust. We aim to enhance the well-being of pets, fostering lifelong bonds between them and their families while promoting a culture of responsible, loving pet ownership and happiness.";
    const [bgColor, setbgColor] = useState(true);
    const [paraData, setParadata] = useState(para1);
    const ourVisionHandeler = () => {
        setParadata(para2);
        setbgColor(!true);
    }
    const ourMissionHandeler = () => {
        setParadata(para1)
        setbgColor(true);

    }
    return (
        <>
            <div className='aboutPage'>
                <div className='imgblock'>
                    <img src={Aboutimg}></img>
                </div>
                <div className='textblock'>
                    <div className='sidebars'>
                        <SideHeadingstyle services="About Us" heading1="We Keep Your Pets" heading2="Happy All Time" />
                    </div>
                    <p className='dummytext'>Our Pet Center is dedicated to providing top-quality care, ensuring your pets receive love, attention, and expert services they deserve.</p>
                    <div className='changeBlockText'>
                        <div className='clickButtonsHere'>
                            <button style={{ backgroundColor: bgColor ? "orange" : "", color: bgColor ? "white" : "" }} className='missionTextHead' onClick={ourMissionHandeler}>Our Mission</button>
                            <button style={{ backgroundColor: bgColor ? "" : "orange", color: bgColor ? "" : "white" }} onClick={ourVisionHandeler}>Our Vision</button>
                        </div>
                        <div>
                            <p className='changePara'>{paraData} </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutPage

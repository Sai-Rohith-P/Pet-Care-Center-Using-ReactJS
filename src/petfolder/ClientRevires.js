import React, { useState } from 'react'
import './ClientRevires.css'

import ClientOne from '../imges/clientOne.jpg';
import Clienttwo from '../imges/clienttwo.jpg';
import ClientThree from '../imges/ProffisorsList/P-7.jpg';

import arrowRight from '../imges/arrow.svg';
import arrowleft from '../imges/arrowleft.svg';

function ClientRevires() {
    const ClientDetails = [
        {
            profile: ClientOne,
            description: "The grooming services were excellent. My dog was well cared for, and he looked amazing afterward. The staff was friendly, knowledgeable, and attentive to my pet's needs. I highly recommend their services for anyone seeking quality pet care.",
            name: "John D",
            profission: "Doctor"
        },
        {
            profile: Clienttwo,
            description: "I was really happy with the pet sitting service. They kept me updated with photos, and my cat seemed calm and well taken care of. I’ll definitely use their services again when I need someone to watch over my pets.",
            name: "Emily R",
            profission: "Marketing Manager"
        }, {
            profile: ClientThree,
            description: "The health checkup for my dog was thorough and professional. The vet showed genuine care and explained everything clearly. I felt confident my pet was in good hands, and I’ll continue using this center for my pets’ healthcare needs.",
            name: "Rohith P",
            profission: "Software Engineer"
        }
    ]

    const [overbefore, setOverAfter] = useState(false);
    const [overbefore1, setOverAfter1] = useState(false);
    const mouseOver = () => {
        setOverAfter(true);
    }
    const mouseOut = () => {
        setOverAfter(false);
    }
    const mouseOver1 = () => {
        setOverAfter1(true);
    }
    const mouseOut1 = () => {
        setOverAfter1(false);
    }


    const clientIncrease = () =>{
        if(dataClient<ClientDetails.length-1){
            setDataClient(dataClient+1)
        }else{
            setDataClient(0)
        }
    }
    
    const clientDecrease = ()=>{
        if(dataClient>0){
            setDataClient(dataClient-1);
        }else{
            setDataClient(ClientDetails.length-1);
        }
    }

    const [dataClient, setDataClient] = useState(0);
    return (
        <div className='ClientRevires'>
            <div className='ClientReViewBox'>
                <div className='leftArrowDiv' onMouseOver={mouseOver} onMouseOut={mouseOut} onClick={clientDecrease} >
                    <img src={arrowleft} style={{ filter: overbefore ? "invert(1)" : "invert(0" }}></img>
                </div>
                <div className='boxclient'>
                    <img src={ClientDetails[dataClient].profile}></img>
                    <p>{ClientDetails[dataClient].description}</p>
                    <h2>{ClientDetails[dataClient].name}</h2>
                    <p className='clientProffission'>{ClientDetails[dataClient].profission}</p>
                </div>
                <div className='rightArrowDiv' onMouseOver={mouseOver1} onMouseOut={mouseOut1} onClick={clientIncrease}
                >
                    <img src={arrowRight} style={{ filter: overbefore1 ? "invert(1)" : "invert(0" }}></img>
                </div>
            </div>
        </div>
    )
}

export default ClientRevires

import React, { useState } from 'react'
import SideHeadingstyle from './SideHeadingstyle'
import './ProfissorsList.css';

import P1 from '../imges/ProffisorsList/P-1.jpg';
import P2 from '../imges/ProffisorsList/P-2.jpg';
import P3 from '../imges/ProffisorsList/P-3.jpg';
import P4 from '../imges/ProffisorsList/P-4.jpg';
import P5 from '../imges/ProffisorsList/P-5.jpg';
import P6 from '../imges/ProffisorsList/P-6.jpg';
import P7 from '../imges/ProffisorsList/P-7.jpg';


function ProfissorsList() {

    const socialMedias = {
        twitter: "https://cdn-icons-png.flaticon.com/256/3938/3938028.png",
        linkedin: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-suyH5XUGhAbRwMVg_mUyvJre2qtxGB6qPQ&s",
        facebook: "https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg"
    }

    const { twitter, linkedin, facebook } = socialMedias;

    const ProffisorsListdata = [
        {
            id: 1,
            imgPath: P7,
            name: "Rohith Sai",
            Proffission: "Pet Groomer"
        },
        {
            id: 2,
            imgPath: P2,
            name: "Sophia Davis",
            Proffission: "Veterinary Technician"
        },
        {
            id: 3,
            imgPath: P3,
            name: "Anjali",
            Proffission: "Pet Groomer"
        },
        {
            id: 4,
            imgPath: P4,
            name: "Olivia Brown",
            Proffission: "Animal Behaviorist"
        },
        {
            id: 5,
            imgPath: P5,
            name: "Liam Anderson",
            Proffission: "Pet Sitter"
        },
        {
            id: 6,
            imgPath: P6,
            name: "Ava Wilson",
            Proffission: "Dog Trainer"
        },
        {
            id: 7,
            imgPath: P7,
            name: "Rohith Sai",
            Proffission: "Pet Groomer"
        },
        {
            id: 8,
            imgPath: P1,
            name: "Anjali",
            Proffission: "Animal Rescue Worker"
        }
    ]

    const [over, setOver] = useState(null);
    const [opacities, setOpacities] = useState(null)

    const mouseOverHandler = (id) => {
        setOver(id);
        setOpacities(id);
    }
    const mouseoutHandler = () => {
        setOver(null)
        setOpacities(null)
    }
    return (
        <div className='ProfissionalPage'>
            <div className='sidestyle2'>
                <SideHeadingstyle services="Team Members" heading1="Qualified Pets Care" heading2="Professionals" />
            </div>
            <div className='ListOfList'>
                {
                    ProffisorsListdata.map((eachProffisior) => {
                        const { imgPath, name, Proffission, id } = eachProffisior;
                        return <div className='listOne' onMouseOver={() => mouseOverHandler(id)} onMouseOut={mouseoutHandler} key={id}>
                            <img className={opacities === id ? "imgOne1" : "imgOne"} src={imgPath}></img>
                            <div className='textname'>
                                <h2>{name}</h2>
                                <p>{Proffission}</p>
                            </div>
                            <div className='innerTextDetails'>
                                {over === id ? <div className='socialMedia'>
                                    <a href='#'><img src={twitter}></img></a>
                                    <a href='#'><img src={facebook}></img></a>
                                    <a href='#'><img src={linkedin}></img></a>
                                </div> : ""}
                            </div>
                        </div>

                    })
                }
            </div>

        </div>
    )
}

export default ProfissorsList

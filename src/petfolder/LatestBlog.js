import React, { useState } from 'react'
import SideHeadingstyle from './SideHeadingstyle'
import './LatestBlog.css'
import './Secondpage.css'

import dog1 from '../imges/dogblog1.webp'
// import dog1 from '../imges/dogblog3.jpeg'
import dog2 from '../imges/dogblog2.avif'
import arrow from '../imges/arrow.svg'

function LatestBlog() {
    const [filters, setfilter] = useState(null)
    const ReadMoreButton = (id) => {
        setfilter(id);
    }
    const ReadMoreButtonout = () => {
        setfilter(null);
    }

    const DogsData = [
        {
            id:1,
            imgProfile: dog1,
            heading1: "How to Choose the Best",
            heading2:"Pet Food",
            paraDetails: "Learn how to select the perfect, nutritious meals to keep your pet healthy, happy, and full of energy."
        }, {
            id:2,
            imgProfile: dog2,
            heading1: "Top 5 Tips for a",
            heading2:"Healthy Pet",
            paraDetails: "Follow these simple, effective tips to ensure your pet stays active, happy, and in the best health possible."
        }
    ]
    return (
        <div className='LatestDogPage'>
            <div className='sidestyle2'>
                <SideHeadingstyle services="Latest Blog" heading1="Latest Articles From" heading2="Our Blog Post" />
            </div>
            <div className='BlogBlock'>
                {
                    DogsData.map((eachitem) => {
                        const {imgProfile,heading1,paraDetails,heading2,id} = eachitem;
                          const isHovered = filters === id;
                        return (
                            <div key={id} className='FirstOne'>
                                <div className='ImgDiv'>
                                    <img src={imgProfile}></img>
                                </div>
                                <div className='TextDiv'>
                                    <h3>{heading1} <br></br>{heading2}</h3>
                                    <p>{paraDetails}</p>
                                    <div className='pButton' onMouseOver={()=>ReadMoreButton(id)} onMouseOut={ReadMoreButtonout}>
                                        <p className='buttonP' style={{ color: isHovered  ? "black" : "orange" }}>Read More</p>
                                        <img src={arrow} style={{ filter: isHovered  ?"invert(1)":"invert(0.5) sepia(1) saturate(10)" }}></img>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default LatestBlog

import React, { useState } from 'react'
import services from './Serviesdata.js'
import arrowimg from '../imges/arrows.png';


function OurServices() {
    return (
        <div className='serviesprops'>
            {services.map((e) => {
                let { para, btnn, id, heading, imgg } = e;
                return <SingleBlock key={id} para={para} btnn={btnn} heading={heading} imgg={imgg}></SingleBlock>
            })}
        </div>
    )
}

function SingleBlock({ para, btnn, heading, imgg }) {
    const [ArrowWidth , setArrowWidth] = useState("90px")
    
    const arrowincrease = ()=>{
        setArrowWidth("190px")
    }
    const arrowdecrease = () =>{
        setArrowWidth("90px")
    }
    return (
        <div className='one'>
            <div className='imgservices'>
                <img src={imgg}></img>
            </div>
            <div className='textdiv'>
                <h2 className='h2services'>{heading}</h2>
                <p className='pservices'>{para}</p>
                <div onMouseOver={arrowincrease} onMouseOut={arrowdecrease} className='arrowblock'>
                    <p className='learnMore'>{btnn}</p>
                    <img className='arrowimg' style={{width:ArrowWidth}} src={arrowimg}></img>
                </div>
            </div>
        </div>
    )
}
export default OurServices

import React from 'react'
import SideHeadingstyle from './SideHeadingstyle'
import './OffersPlan.css';
import check from '../imges/check.svg'
import close from '../imges/close.svg';


function OffersPlan() {
    const skills = [["Pet Grooming", "Basic Health Checkup", "Nail Trimming", "Bathing & Drying"],
    ["All Standard Services", "Advanced Health Checkup", "Extended Pet Sitting (Up to 5 Days)", "Behavior Training"]]

    const middleSkills = ["All Basic Services", "Vaccinations", "Dental Care", "Pet Sitting for 2 Days"]

    return (
        <div className='OfferPlan'>
            <div className='sidestyle2'>
                <SideHeadingstyle services="Pricing Plan" heading1="Competitive Pricing" heading2="For Pet Services" />
            </div>
            <div className='PricingPlans'>
                <OffersPlanList choice="Basic" choicePara="The Best Choice" costPrice="49" skills={skills[0]} />
                <OffersPlanList1 choice="Standard" choicePara="The Best Choice" costPrice="99" skills={middleSkills} />
                <OffersPlanList choice="Extended" choicePara="The Best Choice" costPrice="199" skills={skills[1]} />
            </div>

        </div>
    )
}

export default OffersPlan

function OffersPlanList({ choice, choicePara, costPrice, skills }) {

    return (
        <div className='box'>
            <h2>{choice}</h2>
            <p>{choicePara}</p>
            <div className='colorBg'>
                <span className='doler'>$</span><span className='num'>{costPrice}</span><span className='mon'>/Mo</span>
            </div>
            <div className='rohi'>
                {skills.map((skill, index) => (<div key={index} className='innerText'>
                    <p>{skill}</p>
                    <img className={index === skills.length - 1 ? 'imgCheck1' : "imgCheck"} src={index === skills.length - 1 ? close : check}></img>
                </div>))}
            </div>
            <div className='but'>
                <button>Order</button>
            </div>
        </div>
    )
}


function OffersPlanList1({ choice, choicePara, costPrice, skills }) {
    return (
        <div className='box1'>
            <h2>{choice}</h2>
            <p>{choicePara}</p>
            <div className='colorBg colorBG1'>
                <span className='doler'>$</span><span className='num'>{costPrice}</span><span className='mon'>/Mo</span>
            </div>
            <div className='rohi'>
                {
                    skills.map((skill, index) => (
                        <div key={index} className='innerText'>
                            <p>{skill}</p>
                            <img className='imgCheck' src={check}></img>
                        </div>
                    ))
                }
            </div>
            <div className='but'>
                <button>Order</button>
            </div>
        </div>
    )
}



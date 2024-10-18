import React from 'react'
import './FirstPage.css'
import dogimg from '../imges/dog1.png';

export default function FirstPage() {
    return (
        <>
            <div className='firstpage'>
                <div className='lefttext'>
                    <div className='text'>
                        <p id='para1'>Pet Care Center</p>
                        <h3>Your Pets are Our <br></br> Family Member's <br></br> Now</h3>
                        <p className='dammypara'>Welcome to our Pet Center! We offer grooming, training, and medical services to keep your pets happy.</p>
                        <button>Contact Us</button>
                    </div>
                </div>
                <div className='imgbg'>
                    <img src={dogimg}></img>
                </div>
            </div>
        </>
    )
}

import React from 'react'
import './Secondpage.css'
import './DiscountPage.css';
import SideHeadingstyle from './SideHeadingstyle.js';

function DiscountPage() {
    return (
        <div className='imgWidthDiscount'>
            <div className='propsDiv'>
                <div className='sidestyle2'>
                    <SideHeadingstyle services="Special Offer" heading1="Save 50% on all items" heading2="your first order" />
                </div>
                <p className='offerPara'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </div>
            <div className='buttons'>
            <button>Shop Now</button>
            <button className='readMore'>Read More</button>
            </div>
        </div>
    )
}

export default DiscountPage

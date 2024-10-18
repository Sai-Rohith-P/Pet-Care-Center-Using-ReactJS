import React, { useEffect } from 'react'
import './Secondpage.css'
import OurServices from './OurServices'
import SideHeadingstyle from './SideHeadingstyle'
import Products from './Products'

function SecondPage() {
  return (
    <><div className='secondpage'>
      <div className='sidestyle2'>
        <SideHeadingstyle services="Services" heading1="Our Excellent Pet" heading2="Care Services" />
      </div>
      <OurServices />
    </div>
    
    </>
  )
}


export default SecondPage

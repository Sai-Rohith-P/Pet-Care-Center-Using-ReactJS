import React from 'react'

function SideHeadingstyle({services,heading1,heading2}) {
    
  return (
    <div className='sidestyle'>
     <div className='linebar'>
     </div>
     <div className='sideText sideTextOffer'>
        <p>{services}</p>
        <h1>{heading1}<br></br>{heading2}</h1>
     </div>
    </div>
  )
}

export default SideHeadingstyle

import React from 'react'
import SideHeadingstyle from './SideHeadingstyle'
import Products from './Products'

function ProductPage() {
  return (
    <>
    <div className='sidestyle2'>
        <SideHeadingstyle services="Products" heading1="Products For Your" heading2="Best Friends" />
      </div>
      <Products />
    </>
  )
}

export default ProductPage

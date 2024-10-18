
import React from 'react'
import Navbars from '../Navbars';
import FirstPage from '../FirstPage';
import SecondPage from '../SecondPage';
import ProductPage from '../ProductPage';
import AboutPage from '../AboutPage';
import DiscountPage from '../DiscountPage';
import OffersPlan from '../OffersPlan';
import ProfissorsList from '../ProfissorsList';
import ClientRevires from '../ClientRevires';
import LatestBlog from '../LatestBlog';
import FooterContent from '../FooterContent';

function HomePageComponents() {
  return (
    <>
      {/* <Navbars /> */}
      <FirstPage />
      <AboutPage />
      <SecondPage />
      <ProductPage/>
      <DiscountPage />
      <OffersPlan />
      <ProfissorsList />
      <ClientRevires />
      <LatestBlog />
      <FooterContent />
    </>
  )
}

export default HomePageComponents

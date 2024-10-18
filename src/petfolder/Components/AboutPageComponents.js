
import React from 'react'
import Navbars from '../Navbars';
import FirstPage from '../FirstPage';
import SecondPage from '../SecondPage';
import AboutPage from '../AboutPage';
import DiscountPage from '../DiscountPage';
import OffersPlan from '../OffersPlan';
import ProfissorsList from '../ProfissorsList';
import ClientRevires from '../ClientRevires';
import LatestBlog from '../LatestBlog';
import FooterContent from '../FooterContent';

function AboutPageComponents() {
  return (
    <>
      <AboutPage />
      <DiscountPage />
      <ProfissorsList />
      <FooterContent />
    </>
  )
}

export default AboutPageComponents

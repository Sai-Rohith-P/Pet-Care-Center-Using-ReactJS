import React from 'react';
import HomePageComponents from './petfolder/Components/HomePageComponents'
import AboutPageComponents from './petfolder/Components/AboutPageComponents';
import ServicesPageComponents from './petfolder/Components/ServicesPageComponents';
import ProductPageComponents from './petfolder/Components/ProductPageComponents';
import ContactPageComponents from './petfolder/Components/ContactPageComponents';
import { Route, Routes } from 'react-router-dom'
import Navbars from './petfolder/Navbars';


function App() {
  return (
    <>
      <Navbars />
      <Routes>
        <Route path='/' element={<HomePageComponents />}></Route>
        <Route path='/About' element={<AboutPageComponents />}></Route>
        <Route path='/Services' element={<ServicesPageComponents />}></Route>
        <Route path='/Product' element={<ProductPageComponents />}></Route>
        <Route path='/Contact' element={<ContactPageComponents />}></Route>
      </Routes>
    </>
  )
}

export default App;



// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
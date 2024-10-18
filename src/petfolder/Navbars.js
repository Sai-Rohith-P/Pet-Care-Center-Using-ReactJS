import React from 'react'
import './Navbar.css'
import menu1 from '../imges/menu.svg'
import close1 from '../imges/close.svg'
import {NavLink} from 'react-router-dom'

function navbars() {

  function menu() {
    let mns =  document.getElementById("menuitems");
    let menu1 =  document.getElementById("menu1");
    let close1 =  document.getElementById("close1");

    if(mns.style.display !=="block"){
      mns.style.display ="block";
      close1.style.display = "block";
      menu1.style.display="none";
    }else{
      mns.style.display ="none";
      close1.style.display = "none";
      menu1.style.display="block";
    }
  }

  return (
    <>
      <div className='navbar' id='navbar'>
        <div className='navbarLogo'>
          <h3>Pet Center</h3>
        </div>
        <div className='ullis' id='menuitems'>
          <ul id='ullists'>
            <li ><NavLink to='/' href='#' className='home'>Home</NavLink></li>
            <li><NavLink to='/About' href='#'>About</NavLink></li>
            <li><NavLink to='/Services' href='#'>Services</NavLink></li>
            <li><NavLink to='Product' href='#'>Product</NavLink></li>
            <li><NavLink to='/Contact' className='contactus' href='#'>Contact</NavLink></li>
          </ul>
        </div>
        <div className='imgdiv' id='menu' onClick={() => { menu() }}>
          <img className='menuimg' id='menu1' src={menu1}></img>
          <img className='menuimg' id='close1' src={close1}></img>
        </div>
      </div>
    </>
  )

}

export default navbars

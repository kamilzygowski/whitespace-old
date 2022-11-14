import React from 'react'
import './Footer.scss'
import logo from '../../assets/logoTextLess.svg';

const Footer = () => {
    const today = new Date();
  return (
    <div className='Footer'>
        <img src={logo} alt="" className='logo'/>
        <h2> WHITE SPACE</h2>
        <ul>
            <li className='footerLinks'>KARIERA</li>
            <li className='footerLinks'>SPÓŁKA</li>
            <li className='footerLinks'>POMOC</li>
            <li className='footerLinks'>POLITYKA PRYWATNOŚCI</li>
            <li className='footerLinks'>COOKIES</li>
            <li className='footerLinks'>WARUNKI UŻYTKOWANIA</li>
        </ul>
        <p>@{today.getFullYear()} White Space Studio, Inc. All rights reserved</p>
        <p>Wszystkie użyte lub wymienione znaki towarowe należą do ich prawnych właścicieli.</p>
    </div>
  )
}

export default Footer
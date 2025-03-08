import React from 'react'
import './Futter.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Futter = () => {
  return (
    <div>
        <div className='futter-cart'>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Service</a></li>
            <li><a href="">Company</a></li>
          </ul>
        </div>
        <div className='link-cart'>
          <ul>
            <a href="https://www.facebook.com/apo.mojumder/"><FaFacebookSquare/></a>
            <a href=""><FaWhatsappSquare /></a>
            <a href=""><FaInstagramSquare /></a>
          </ul>
        </div>
        <div className='hr-tag'>
            <hr />
        </div>
        <div style={{textAlign:'center',padding:'15px 0px'}}>
          <h2>Copyright@2025</h2>
        </div>
    </div>
  )
}

export default Futter

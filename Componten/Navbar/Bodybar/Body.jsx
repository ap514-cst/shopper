import React from 'react'
import './Body.css'
import { FaCartPlus } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom'
const Body = () => {
  return (
    <div>
      <div className='navbar'>
      
                          <div className='shopper-cart'>
                              <h3>Shopper<span ><FaShoppingBag /></span></h3>
      
                          </div>
      
                          <ul className='nav-menu'>
                              <Link to={'/'}><li>Home</li> </Link>
                              <Link to={'shop'}> <li>Shop</li> </Link>
                          </ul>
                          <div className='nav-login-cart'>
                              <Link to={'aboutUs'}><button>AboutUs</button></Link>
                              <Link to={'login_cart'}><button>Login</button></Link>
                          </div>
                          <div className='cart-div-box'>
                              <Link to={'cart'}><span><FaCartPlus /></span></Link>
                          </div>
      
      
                      </div>
    </div>
  )
}

export default Body

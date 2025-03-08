import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
const Product = ({ Products, HandlerDetails}) => {
  const { id, image, title, price } = Products
  return (
    <div className='continer'>
      <div className='cart-div'>

        <p>{id}</p>
        <div style={{ width: '300px', height: '300px' }}>
          <img src={image} width={200} height={200} alt="" />
          <div className='list-cart'>
            <p>{title}</p>
            <h4>{price}$</h4>
            <Link to={'/display'}><button onClick={()=>HandlerDetails(Products)}>buy now</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product

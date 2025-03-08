import React from 'react'
import './Details.css'
import { ToastContainer, toast } from 'react-toastify';


const Details = ({ datas, HandlerCart }) => {
  const { image, id, title, price } = datas
  const Handler=()=>{
    toast("Product is adding..")
  }
  
  return (



    <div>
      
      <div className='main-continer'>



        <div className="img-div">
          <img src={image} width={300} height={300} alt="" />
        </div>
        <div className='Data-cart'>
          <p>{id}</p>
          <h4>{title}</h4>
          <h3>{price}</h3>
          <p>Your perfect pack for eceryday use and walks in the forest.</p>
          <button  onClick={() =>{HandlerCart(datas),Handler()}}>Add to Cart</button>
          <ToastContainer/>
        </div>


      </div>
    </div>



  )
}

export default Details

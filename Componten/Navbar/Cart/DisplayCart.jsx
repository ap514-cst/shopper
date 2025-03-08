import React, { useState } from 'react'
import './DisplayCart.css'
import { MdDeleteForever } from "react-icons/md";


const DisplayCart = ({ carts}) => {
  const { id, title, image,price } = carts
  const [count, setCount] = useState(0)
  //remove Product-:
  const[remove,setRemove]=useState([carts])
  
  
  const HandlerRemove=(id)=>{
   const newRm=remove.filter((l)=> l.id !== id)
      setRemove(newRm)
  }
  
  return (
    <div>

      <div className='display-cart'>
        <img src={image} width={100} alt="" />
        <div style={{ width: '300px',height:'250px' }}>
          <p>{id}</p>
          <h2>{title}</h2>
          <h3>{price}$</h3>
          <h4>{count}</h4>
          <div className='btn-click'>
            <button onClick={()=>setCount((count+1))}>+</button>
            -
            <button onClick={()=>setCount((count-1))}>-</button>
          </div>
          <div style={{padding:'10px 0px'}}>
            
            <button onClick={()=>HandlerRemove(carts)} style={{fontSize:'20px',}}><MdDeleteForever />
            </button>
            <h3></h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayCart

import React from 'react'
import Details from './Details'
import './ProductsDisplay.css'
import Futter from '../../../Futter/Futter'

const ProductsDisplay = ({display,HandlerCart}) => {
  
  
  return (
    <div>
      
      <div className='Details-text'>
        <h2>Details Page</h2>
        <div className='delta'>
        <hr />
        </div>
      </div>
        <div>
          {display.map((datas,index)=><Details
          key={index}
          datas={datas}
          HandlerCart={HandlerCart}
          />)
          }
          
        </div>
        <div className='futter-div'>
        <Futter/>
        </div>
    </div>
  )
}

export default ProductsDisplay

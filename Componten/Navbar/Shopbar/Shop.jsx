import React, { useEffect, useState } from 'react'
import Product from './Productbar/Product';
import './Shop.css'

const Shop = ({HandlerDetails}) => {
  const [Products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Data is not found')
        }
        return res.json()
      })
      .then(data => {
        setProduct(data)
        setLoading(false)
        setError(false)
      })
      .catch((error) => {
        setError(error.message)
        setLoading(false)
        setError(true)
      })
  })
  
  const [searchText,setSeacrchText]=useState('')
  
      const HandleChange=(e)=>{
          setSeacrchText(e.target.value)
      }
      let filterOut=Products.filter((curValue)=>{
        return curValue.title.toLowerCase().includes(searchText)
      })

  return (
    <div>
      <div>

      <div className='search-div'>
          <input type="text" placeholder='search your products'
           onChange={HandleChange}
           value={searchText}
           />


        </div>
        <div className='hr-div'>
          <hr />
        </div>
        <div>
          {loading && <h2>Data is loading....</h2>}
          {error && <h2>Data is not found...404..error</h2>}
        </div>
        <div className='All-Product'>
          <div className='Products-cart'>

            {filterOut.map((Products) => <Product
              key={Products.id}
              Products={Products}
              HandlerDetails={HandlerDetails}
            />)}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop

import React, { useEffect, useState } from 'react'

const Search = ({onSearch}) => {
    const [searchText,setSeacrchText]=useState('')

    const HandleChange=(e)=>{
        setSeacrchText(e.target.value)
    }
    useEffect(()=>{
        onSearch(searchText)
    },[searchText])
  return (
    <div>
      <div className='search-div'>
          <input type="text" placeholder='search your products'
           onChange={HandleChange}
           value={searchText}
           />


        </div>
    </div>
  )
}

export default Search

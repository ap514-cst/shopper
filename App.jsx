
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Manu from './Componten/Navbar/Manubar/Manu'
import Shop from './Componten/Navbar/Shopbar/Shop'
import AboutUs from './Componten/Navbar/AboutUs/AboutUs'
import Login_cart from './Componten/Navbar/Loginbar/Login_cart'
import ProductsDisplay from './Componten/Navbar/Shopbar/ProductsDetailsbar/ProductsDisplay'
import { useState } from 'react'
import Cart from './Componten/Navbar/Cart/Cart'

function App() {
  const [display, setDisplay] = useState([])
  const HandlerDetails = (Data) => {
    const newDisplay=([Data])
    setDisplay(newDisplay)
    
    
    }
    const [cart,setCart]=useState([])
    const HandlerCart=(data)=>{
      const newCart=([...cart,data])
      setCart(newCart)
      
    }
    
  

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Manu />,
      
    },
    
    
    {
        path: 'shop',
        element: <Shop HandlerDetails={HandlerDetails} />
    },
    
    {
      path: 'aboutUs',
      element: <AboutUs />
    },
    {
      path: 'Login_cart',
      element: <Login_cart />
    },
    {
      path: 'display',
      element: <ProductsDisplay display={display}
      HandlerCart={HandlerCart}
      />
    },
    {
      path:'cart',
      element:<Cart setCart={cart}/>
    }
    
  ])
  return (
    <div>

      <RouterProvider router={router} />

    </div>
  )
}

export default App

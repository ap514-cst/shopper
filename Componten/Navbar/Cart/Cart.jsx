
import DisplayCart from './DisplayCart'
import './Cart.css'

const Cart = ({ setCart }) => {



    return (
        <div>
            <div style={{ padding: '10px 0px', backgroundColor: 'gray' }}>
                <h1 style={{ textAlign: 'center' }}>Cart page</h1>
            </div>
            <div className='dis-hr'>
                <hr />
            </div>
            <div className='Display-div'>
                {
                    setCart.map((carts, index) => <DisplayCart
                        key={index}
                        carts={carts}

                    />)
                }

            </div>
            <div className='payment-div'>
                <button>payment</button>
            </div>
        </div>
    )
}

export default Cart

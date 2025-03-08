import React from 'react'
import './Manu.css'


import { FaHome } from "react-icons/fa";
import Futter from '../../Futter/Futter';

import Body from '../Bodybar/Body';
const Manu = () => {
    return (
        <div>
            <div>
                <Body/>
            </div>

            <div className='hero'>
                <div className='hero-left'>
                    <h2 style={{color:'green'}}>NEW ARRIVALS ONLY</h2>
                    <div>
                        <div className='hero-hand-icon'>
                            <p style={{color:'red'}}>new</p>
                            <span><FaHome /></span>

                        </div>
                        <p style={{color:'gray'}}>collections</p>
                        <p style={{color:'gold'}}>for everyone</p>
                    </div>
                    <div className='btn-div'>
                        <button>Latest collection</button>
                    </div>
                </div>
                <div className='hero-right'>
                    <img src="https://img.freepik.com/premium-photo/beauty-woman-with-shopping-bags_78203-574.jpg?ga=GA1.1.819132749.1677990575&semt=ais_hybrid" alt="" />
                </div>
            </div>
            <div>
                <div className='newsletter'>
                    <h1>Get Exclusive ofeers on your Email</h1>
                    <p>Subscribe to our newletter and stay updata</p>
                    <div>
                        <input type="email" placeholder='Your Email id' />
                        <button>Subscribe</button>
                    </div>
                </div>
                <div>
                    <Futter/>
                </div>
            </div>

        </div>
    )
}

export default Manu

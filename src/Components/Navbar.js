import React from 'react'
import { FiShoppingBag } from "react-icons/fi";

const Navbar = ({cart}) => {
    return (
        <div className='navbar-wrapper'>
            <nav className='navbar'>
                    <h1 className="logo">Infoware</h1>
                <div className="cart-icon-wrapper">
                    <span className="cart-icon">
                        <FiShoppingBag/>
                    </span>
                    <div className="item-count-wrapper">
                    <span className="item-count">{cart.length}</span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

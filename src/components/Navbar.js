import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import logo from "./logo.png";
const Navbar = () => {
    const { shoppingcart } = useSelector(state => state.Reducers)
    return (
        <>
            <div className='navbar-container'>
                <div className="navbar-Item">
                    <div className="logo"> <ul>
                        <li>
                            <Link to="/"><img src={logo} alt="" className='logo-Img' /></Link>
                        </li>
                    </ul>
                    </div>
                    <div className="list-Item">
                        <ul>
                            <li>
                                <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link>
                                <span className="cartItem-count">{shoppingcart.length}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar

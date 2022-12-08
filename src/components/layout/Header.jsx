import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import cartIcon from '../../assets/shopping-cart.png'

import './Header.css'
const Header = () => {
  const noOfCartItems = useSelector((state) => state.noOfCartItems)
  return (
    <header className="header">
      <div>
        <Link to="/">
          <h1>E-Commerce website</h1>
        </Link>
      </div>
      <div>
        <ul>
          <Link to="/cart">
            <li>
              Cart &nbsp;
              <img className="cart-icon" src={cartIcon} alt="cart" />
              <span className="badge">{noOfCartItems}</span>
            </li>
          </Link>
        </ul>
      </div>
    </header>
  )
}

export default Header

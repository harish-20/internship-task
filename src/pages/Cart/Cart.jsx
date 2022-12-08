import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './Cart.css'
import CartItem from './CartItem'
const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems)
  const totalAmount = useSelector((state) => state.totalAmount)

  if (cartItems.length === 0) {
    return <h1 className="centered">No items found in the cart.</h1>
  }
  return (
    <div className="cart">
      <h1 className="centered">CART ITEMS</h1>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <div className="total-container">
        <div>
          <h4>Total price:</h4>
          <p className="grand-total">&#8377;{totalAmount}</p>
        </div>
      </div>
      <div className="total-container">
        <Link to={'/checkout'}>Pay</Link>
      </div>
    </div>
  )
}

export default Cart

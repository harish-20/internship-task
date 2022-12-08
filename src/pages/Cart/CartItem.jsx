import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/Slices/cartSlice'

const CartItem = (props) => {
  const dispatch = useDispatch()
  const addQuantityHandler = () => {
    dispatch(cartActions.addItem({ ...props, quantity: 1 }))
  }
  const removeQuantityHandler = () => {
    dispatch(cartActions.removeItem(props))
  }
  return (
    <div className="cart-item">
      <div>
        <img src={props.image} alt="" />
      </div>
      <div className="cart-description">
        <h4>{props.title}</h4>
        <p>{props.category}</p>
      </div>
      <div>
        {props.price} x<button onClick={removeQuantityHandler}>-</button>
        {props.quantity}
        <button onClick={addQuantityHandler}>+</button> ={' '}
        <span className="total">&#8377;{props.price * props.quantity}</span>
      </div>
    </div>
  )
}

export default CartItem

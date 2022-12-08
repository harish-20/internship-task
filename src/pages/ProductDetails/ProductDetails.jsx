import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { data } from '../../data/data'
import { cartActions } from '../../store/Slices/cartSlice'

import './ProductDetails.css'
const ProductDetails = () => {
  const [quantity, setQuantity] = useState(0)

  const dispatch = useDispatch()

  const { id } = useParams()
  const product = data.find((product) => product.id === Number(id))

  const addToCartHandler = () => {
    dispatch(cartActions.addItem({ ...product, quantity }))
    setQuantity(0)
  }

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }
  const decreaseQuantity = () => {
    setQuantity((prev) => prev - 1)
  }

  if (!product) {
    return <h1 className="centered">No Product found.</h1>
  }

  return (
    <div className="product-details">
      <h1 className="centered product-title">{product.title}</h1>
      <img src={product.image} alt="product" />
      <div className="product-description">
        <h3>Description:</h3>
        <p>{product.description}</p>

        <h3>Category:</h3>
        <p>{product.category}</p>

        <h3>Price:</h3>
        <p className="product-price">&#8377;{product.price}</p>

        <div className="actions">
          <div className="cart-actions">
            <button onClick={decreaseQuantity} disabled={!quantity}>
              -
            </button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>
          <div className="purchase">
            <button disabled={!quantity} onClick={addToCartHandler}>
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails

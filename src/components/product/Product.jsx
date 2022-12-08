import React from 'react'
import { Link } from 'react-router-dom'

import './Product.css'
const Product = (props) => {
  return (
    <div className="product">
      <img src={props.image} alt="product" />
      <p className="product-name">{props.title.slice(0, 20)}...</p>
      <p className="product-price">&#8377;{props.price}</p>
      <Link className="btn" to={'/product/' + props.id}>
        <button className="btn">view</button>
      </Link>
    </div>
  )
}

export default Product

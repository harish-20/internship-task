import React from 'react'

import Product from '../../components/product/Product'
import { data } from '../../data/data'

import './Home.css'
const Home = () => {
  return (
    <div className="product-view">
      {data.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  )
}

export default Home

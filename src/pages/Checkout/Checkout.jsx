import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Checkout.css'
const Checkout = () => {
  const [customerDetails, setCustomerDetails] = useState({
    firstName: '',
    lastName: '',
    dob: null,
    deliveryDate: null,
  })

  const [error, setError] = useState({ firstName: false, lastName: false })

  const navigate = useNavigate()

  const onChangeHandler = (event) => {
    setCustomerDetails((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
    if (customerDetails.firstName.trim().length !== 0) {
      setError((prev) => ({ ...prev, firstName: false }))
    }
    if (customerDetails.lastName.trim().length !== 0) {
      setError((prev) => ({ ...prev, lastName: false }))
    }
  }

  const submitHandler = (event) => {
    event.preventDefault()
    let error = false
    if (customerDetails.firstName.trim().length === 0) {
      setError((prev) => ({ ...prev, firstName: true }))
      error = true
    }
    if (customerDetails.lastName.trim().length === 0) {
      setError((prev) => ({ ...prev, lastName: true }))
      error = true
    }
    if (error) {
      return
    }
    navigate('/confirm')
  }
  return (
    <div className="checkout">
      <h2 className="centered">Payment details</h2>
      <div className="payment-form">
        <form onSubmit={submitHandler}>
          <label
            className={error.firstName ? 'invalid' : ''}
            htmlFor="firstname"
          >
            First name:
          </label>
          <input
            className={error.firstName ? 'invalid-input' : ''}
            id="firstname"
            name="firstName"
            onChange={onChangeHandler}
          />
          {error.firstName && (
            <p className="invalid">Enter a valid first name.</p>
          )}
          <label className={error.lastName ? 'invalid' : ''} htmlFor="lastname">
            Last name:
          </label>
          <input
            className={error.lastName ? 'invalid-input' : ''}
            id="lastname"
            name="lastName"
            onChange={onChangeHandler}
          />
          {error.lastName && (
            <p className="invalid">Enter a valid last name.</p>
          )}
          <label htmlFor="dob">Date of birth:</label>
          <input id="dob" type="date" name="dob" onChange={onChangeHandler} />
          <label htmlFor="deliverydate">Delivery date:</label>
          <input
            id="deliverydate"
            type="date"
            name="deliveryDate"
            onChange={onChangeHandler}
          />
          <button>Check out</button>
        </form>
      </div>
    </div>
  )
}

export default Checkout

import React from 'react'

import './Confirmation.css'

import confirmIcon from '../../assets/confirm-icon.svg'
import { Link } from 'react-router-dom'
const Confirmation = () => {
  return (
    <div className="confirmation">
      <img src={confirmIcon} alt="confirm icon" />
      <h3>Thank you for your order!</h3>

      <p>
        To order more amazing products <Link to="/">click me</Link>
      </p>
    </div>
  )
}

export default Confirmation

import React from 'react'
import Header from './Header'

import './Layout.css'
const Layout = (props) => {
  return (
    <>
      <Header />
      <main className="main-container">{props.children}</main>
    </>
  )
}

export default Layout

import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import Confirmation from './pages/Confirmation/Confirmation'
import Home from './pages/Home/Home'
import ProductDetails from './pages/ProductDetails/ProductDetails'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<Navigate to={'/products'} replace />} />
        <Route path="/products" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirm" element={<Confirmation />} />
      </Routes>
    </Layout>
  )
}

export default App

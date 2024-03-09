import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepages from '../customer/Pages/HomePages/Homepages'
import Navigation from '../customer/components/navigation/Navigation'
import Footer from '../customer/components/Footer/Footer'
import Product from '../customer/components/Product/Product'
import Cart from '../customer/components/Cart/Cart'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'

const CustomerRoutes = () => {
  return (
    <div>
        <div>
            <Navigation/>
        </div>    

        <Routes>
            <Route path='/' element={<Homepages/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
  <Route path='/:levelOne/:levelTwo/:levelThre' element={<Product/>}></Route>
  <Route path='/product/:productId' element={<ProductDetails/>}></Route>
  <Route path='/checkout' element={<Checkout/>}></Route>
  <Route path='/account/order' element={<Order/>}></Route>
  <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>


     {/* <Navigation/> */}
    {/* <Homepages/> */}
    {/* <Product/>   */}
    {/* <ProductDetails/> */}
    {/* <Cart/> */}
    {/* <Checkout/> */}


    {/* <Order/> */}
    {/* <OrderDetails/> */}
    {/* <Footer/> */}
        </Routes>

        <div>
            <Footer/>
        </div>

    </div>
  )
}

export default CustomerRoutes
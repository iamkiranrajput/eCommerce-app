import './App.css';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/navigation/Navigation';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Homepages from './customer/Pages/HomePages/Homepages';
function App() {
  return (
    <div className="App">
    <Navigation/>

    <div>
    {/* <Homepages/> */}
    {/* <Product/>   */}
    {/* <ProductDetails/> */}
    {/* <Cart/> */}

    {/* <Checkout/> */}
    {/* <Order/> */}
    <OrderDetails/>
    </div>

    <div>
    <Footer/>
    
    </div>
    </div>
  );
}

export default App;

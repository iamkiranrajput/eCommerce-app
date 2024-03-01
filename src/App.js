import './App.css';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/navigation/Navigation';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Homepages from './customer/Pages/HomePages/Homepages';
function App() {
  return (
    <div className="App">
    <Navigation/>

    <div>
    {/* <Homepages/> */}
    {/* <Product/> */}
    <ProductDetails/>
    </div>

    <div>
    <Footer/>
    
    </div>
    </div>
  );
}

export default App;

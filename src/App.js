import './App.css';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/navigation/Navigation';
import Homepages from './customer/Pages/HomePages/Homepages';
function App() {
  return (
    <div className="App">
    <Navigation/>

    <div>
    <Homepages/>

    </div>

    <div>
    <Footer/>
    
    </div>
    </div>
  );
}

export default App;

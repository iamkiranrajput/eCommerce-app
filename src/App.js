import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import Homepages from './customer/Pages/HomePages/Homepages';
function App() {
  return (
    <div className="App">
    <Navigation/>

    <div>
    <Homepages/>

    </div>
    </div>
  );
}

export default App;

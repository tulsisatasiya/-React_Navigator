import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Product from './Components/Product'
import Details from './Components/Details';
import Data from './Components/Data';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/product' exact element={<Product/>}/>
        <Route path='/data' exact element={<Data/>}/>
        <Route path='/:id' exact element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;

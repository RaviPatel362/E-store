import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import {Home} from './screens/home';
import { NavBar } from './components/NavBar';
import { ProductDetails } from './screens/ProductDetails';
import { Cart } from './screens/Cart';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/product/:id' element={<ProductDetails/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

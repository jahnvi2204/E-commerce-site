import React ,{useState}from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ShoppingCart from './components/Cart';
import ProductGrid from './components/ProductGrid';
const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <Router>
       {/* <Navbar cart={cart} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<ShoppingCart cart={cart} setCart={setCart} />} />
        <Route path="/her-clothing" element={<ProductGrid setCart={setCart} />} />
        <Route path="/his-clothing" element={<ProductGrid setCart={setCart} />} />


      </Routes>
    </Router>
  );
};

export default App;

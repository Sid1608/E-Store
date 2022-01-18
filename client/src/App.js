import React from 'react'

import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Success from './pages/Success';

const App = () => {
  const user=false;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={user?<Home/>:<Login/>}/>
        <Route path="/register" element={user?<Home/>:<Register/>}/>
        <Route path="/success" element={user?<Success/>:<Register/>}/>
      </Routes>
    </Router>
    
  )
}

export default App






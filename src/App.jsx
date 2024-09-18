import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShoppingCartProvider } from './Context';
import Home from './Pages/Home';
import MyOrders from './Pages/MyOrders';
import MyOrder from './Pages/MyOrder';
import MyAccount from './Pages/MyAccount';
import Navbar from './Components/Navbar';
import './App.css'

const App = () => {
  return (
    <ShoppingCartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clothes" element={<Home categories={["men's clothing", "women's clothing"]} />} />
          <Route path="/electronics" element={<Home categories={["electronics"]} />} />
          <Route path="/other" element={<Home categories={["jewelery"]} />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/my-order/:id" element={<MyOrder />} />
          <Route path="/my-account" element={<MyAccount />} />
        </Routes>
      </Router>
    </ShoppingCartProvider>
  );
};

export default App;
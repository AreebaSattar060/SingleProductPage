import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from '../pages/products/products';
import SingleProduct from '../pages/singleProduct/singleProduct';
<<<<<<< HEAD
import Cart from '../pages/cart/Cart';
=======
import Cart from '../pages/Cart';

>>>>>>> 9a305225b1632253606c9bff283b7988fa5a0820

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;

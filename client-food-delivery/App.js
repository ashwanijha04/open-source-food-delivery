import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import RestaurantList from './Components/RestaurantList';
import DishList from './Components/DishList';
import Cart from './Components/Cart';
import AdminPanel from './Components/AdminPanel';
import { CartProvider } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<RestaurantList />} />
            <Route path="/restaurants/:restaurantId/dishes" element={<DishList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<AdminPanel />} /> {/* Add this route */}

          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
};

export default App;

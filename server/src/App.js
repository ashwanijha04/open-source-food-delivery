import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import RestaurantList from './Components/RestaurantList';
import DishList from './Components/DishList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<RestaurantList />} />
          <Route path="/restaurants/:restaurantId/dishes" element={<DishList />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;

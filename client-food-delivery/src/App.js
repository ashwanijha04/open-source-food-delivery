import React from 'react';
import RestaurantList from './Components/RestaurantList';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <RestaurantList />
      </main>
      <Footer />
    </div>
  );
};

export default App;

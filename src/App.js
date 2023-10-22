import React from 'react';
import Header from './Header';
import Benefits from './Benefits';
import NewArrivals from './NewArrivals';
import ShopByCategory from './ShopByCategory';
import PopularProducts from './PopularProducts';
import Footer from './Footer';
import './style.css'

function App() {
  return (
    <div>
      <Header />
      <Benefits />
      <NewArrivals />
      <ShopByCategory />
      <PopularProducts />
      <Footer />
    </div>
  );
}

export default App;
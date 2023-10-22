import React from 'react';
import gold from './gold.png'

function ShopByCategory() {
  return (
    <section className="section">
      <div className="h">
        <h1><span>Shop By</span> Categories</h1>
      </div>
      <div className="ab box">
        <div className="item item-1">
          <img src={gold} alt="" className="gold" />
        </div>
        <div className="item item-2">
          <img src={gold} alt="" className="gold" />
        </div>
        <div className="item item-3">
          <img src={gold} alt="" className="gold" />
        </div>
        <div className="item item-4">
          <img src={gold} alt="" className="gold" />
        </div>
      </div>
    </section>
  );
}

export default ShopByCategory;

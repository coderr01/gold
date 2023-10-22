import React from 'react';
import gold from './gold.png'

function NewArrivals() {
  return (
    <section className="section">
      <div className="h">
        <h1><span>New</span> Arrivals</h1>
      </div>
      <div className="ac-center box">
        <div className="ac">
          <div className="img-cover">
            <img src={gold} alt="" className="gold" />
          </div>
          <p>Women handbag leather</p>
          <div className="rating">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
          </div>
          <div className="price">Rs 5000</div>
        </div>

        <div className="ac">
          <div className="img-cover">
            <img src={gold} alt="" className="gold" />
          </div>
          <p>Women Sandals 2021</p>
          <div className="rating">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bx-star"></i>
          </div>
          <div className="price">Rs 3000</div>
        </div>

        <div className="ac">
          <div className="img-cover">
            <img src={gold} alt="" className="gold" />
          </div>
          <p>Luxury wallet purse</p>
          <div className="rating">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bx-star"></i>
          </div>
          <div className="price">LKR 2000</div>
        </div>

        <div className="ac">
          <div className="img-cover">
            <img src={gold} alt="" className="gold" />
          </div>
          <p>Leather belt</p>
          <div className="rating">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bx-star"></i>
          </div>
          <div className="price">LKR 1500</div>
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;

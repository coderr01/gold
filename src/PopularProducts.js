import React from 'react';
import gold from './gold.png'

function PopularProducts() {
  return (
    <section className="section">
      <div className="h">
        <h1>Popular <span>Products</span></h1>
      </div>
      <div className="ac-center box">
        <div className="ac">
          <div className="img-cover">
            <img src={gold} alt="Product 1" className="gold" />
          </div>
          <p>Luxury Gold Chain</p>
          <div className="rating">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bx-star"></i>
          </div>
          <div className="price">Rs 8500</div>
        </div>

        <div className="ac">
          <div className="img-cover">
            <img src={gold} alt="" className="gold" />
          </div>
          <p>Covered Gold Bangle</p>
          <div className="rating">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bx-star"></i>
          </div>
          <div className="price">Rs 5000</div>
        </div>

        <div className="ac">
          <div className="img-cover">
            <img src={gold} alt="" className="gold" />
          </div>
          <p>Cute Wallet</p>
          <div className="rating">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bx-star"></i>
          </div>
          <div className="price">Rs 1200</div>
        </div>

        <div className="ac">
          <div className="img-cover">
            <img src={gold} alt="" className="gold" />
          </div>
          <p>Ladies Neckless</p>
          <div className="rating">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bx-star"></i>
          </div>
          <div className="price">Rs 2000</div>
        </div>

        <div className="ac">
          <div className="img-cover">
            <img src={gold} alt="" className="gold" />
          </div>
          <p>Earrings</p>
          <div className="rating">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bx-star"></i>
          </div>
          <div className="price">Rs 3200</div>
        </div>

        <div className="ac">
          <div className="img-cover">
            <img src={gold} alt="" className="gold" />
          </div>
          <p>Gold Coin</p>
          <div className="rating">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bx-star"></i>
          </div>
          <div className="price">Rs 1600</div>
        </div>

        <div className="ac">
          <div className="img-cover">
            <img src={gold} alt="" className="gold" />
          </div>
          <p>Gold Chain</p>
          <div className="rating">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bx-star"></i>
          </div>
          <div className="price">Rs 5600</div>
        </div>

        <div className="ac">
          <div className="img-cover">
            <img src={gold} alt="" className="gold" />
          </div>
          <p>Kids Gold Chain</p>
          <div className="rating">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bx-star"></i>
          </div>
          <div className="price">Rs 1500</div>
        </div>
      </div>
    </section>
  );
}

export default PopularProducts;

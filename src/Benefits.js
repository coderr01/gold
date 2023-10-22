import React from 'react';

function Benefits() {
  return (
    <section className="section benefits">
      <div className="benefit-center box">
        <div className="benefit">
          <span className="icon"><i className="bx bx-purchase-tag"></i></span>
          <h4>Free Shipping</h4>
          <span className="text">Capped at $16 per order</span>
        </div>

        <div className="benefit">
          <span className="icon"><i className="bx bx-book-reader"></i></span>
          <h4>10-Day Returns</h4>
          <span className="text">Shop without any fear</span>
        </div>

        <div className="benefit">
          <span className="icon"><i className="bx bx-headphone"></i></span>
          <h4>24/7 Support</h4>
          <span className="text">We are always there to help you</span>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
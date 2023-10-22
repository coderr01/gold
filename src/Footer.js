import React from 'react';

function Footer() {
  return (
    <section id="footer">
      <div className="foot">
        <ul>
          <li><a href="">HOME</a></li>
          <li><a href="">ABOUT US</a></li>
          <li><a href="">CONTACT US</a></li>
        </ul>

        <div className="social-links">
          <a href=""><i className="fab fa-linkedin"></i></a>
          <a href=""><i className="fab fa-behance"></i></a>
          <a href=""><i className="fab fa-dribbble"></i></a>
          <a href=""><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </section>
  );
}

export default Footer;

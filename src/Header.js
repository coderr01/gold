import React from 'react';
import logo from './logo.png'

function Header(){
	return (
		<header className="header">
      		<nav>
		        <img src={logo} className="logob" alt="Logo" />
		        <ul>
		          <li><a href="">HOME</a></li>
		          <li><a href="">ABOUT US</a></li>
		          <li><a href="">CONTACT US</a></li>
		        </ul>
      		</nav>
	      	<div className="intro">
		        <h1>Try out our Silver products</h1>
		        <h2>
		          
		          On This <br />
		          New Dhanteras
		        </h2>
		        
		        <a href="#" className="btn">SHOP NOW</a>
	      	</div>
    	</header>
	);
}

export default Header;
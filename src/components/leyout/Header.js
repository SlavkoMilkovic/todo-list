import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header style={headerStyle}>
			<h1>TodoList</h1>
			<div style={routeStyles}>
				<Link style={linkStyle} to="/">Home</Link>
				<Link style={linkStyle} to="/about">About</Link>
				<Link style={linkStyle} to="/fantasy">Fantasy</Link>
			</div>
		</header>
	)
}


const headerStyle = {
	background: '#333',
	color: '#fff',
	textAlign: 'center',
	padding: '10px',
}


const linkStyle = {
	color: '#fff',
	textDecoration: 'none'
}

const routeStyles = {
	display: 'flex',
	justifyContent: 'space-around',
	fontSize: '20px'
}


export default Header;
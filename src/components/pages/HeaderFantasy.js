import React, { Component } from 'react';




class HeaderFantasy extends Component {
	render() {
		return(
			<div style={style.headerStyle}>
				<h1 style={style.titleStyle}>Captains 18/19</h1>
				<h1 style={style.titleStyle}>Transfer 19/20</h1>
				<h1 style={style.titleStyle}>Expectations</h1>
			</div>
		)
	}
};


const style = {
	headerStyle: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: '#00ff87'
	},
	titleStyle: {
		color: '#37003c'
	}
}




export default HeaderFantasy;
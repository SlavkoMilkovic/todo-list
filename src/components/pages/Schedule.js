import React, { Component } from 'react';



class Schedule extends Component {

	state = {
		teams: [
			{
				name: 'ARS',
				rating: 5,
				opponents: [{
					name: 'NEW', 
					isHome: false 
				},{ 
					name: 'BUR', 
					isHome: true 
				},{
					name: 'LIV', 
					isHome: false 
				},{
					name: 'TOT', 
					isHome: true 
				},{
					name: 'WAT', 
					isHome: false 
				}]
			},
			{
				name: 'AVI',
				rating: 2,
				opponents: [{
					name: 'TOT', 
					isHome: false 
				},{ 
					name: 'BOU', 
					isHome: true 
				},{
					name: 'EVE', 
					isHome: true 
				},{
					name: 'CRY', 
					isHome: false 
				},{
					name: 'WES', 
					isHome: true 
				}]
			},
			{
				name: 'BOU',
				rating: 3,
				opponents: [{
					name: 'SHE', 
					isHome: true 
				},{ 
					name: 'AVI', 
					isHome: false 
				},{
					name: 'MCY', 
					isHome: true 
				},{
					name: 'LEI', 
					isHome: false 
				},{
					name: 'EVE', 
					isHome: true 
				}]
			},
			{
				name: 'BRI',
				rating: 2,
				opponents: [{
					name: 'WAT', 
					isHome: false 
				},{ 
					name: 'WES', 
					isHome: true 
				},{
					name: 'SOU', 
					isHome: true 
				},{
					name: 'MCY', 
					isHome: false 
				},{
					name: 'BUR', 
					isHome: true 
				}]
			},
			{
				name: 'BUR',
				rating: 2,
				opponents: [{
					name: 'SOU', 
					isHome: true 
				},{ 
					name: 'ARS', 
					isHome: false 
				},{
					name: 'WOL', 
					isHome: false 
				},{
					name: 'LIV', 
					isHome: true 
				},{
					name: 'BRI', 
					isHome: false 
				}] 
			},
			{
				name: 'CHE',
				rating: 4,
				opponents: [{
					name: 'MUN', 
					isHome: false 
				},{ 
					name: 'LEI', 
					isHome: true 
				},{
					name: 'NOR', 
					isHome: false 
				},{
					name: 'SHE', 
					isHome: true 
				},{
					name: 'WOL', 
					isHome: false 
				}]
			},
			{
				name: 'CRY',
				rating: 3,
				opponents: [{
					name: 'EVE', 
					isHome: true 
				},{ 
					name: 'SHE', 
					isHome: false 
				},{
					name: 'MUN', 
					isHome: false 
				},{
					name: 'AVI', 
					isHome: true 
				},{
					name: 'TOT', 
					isHome: false 
				}]
			}
		]
	};

	renderOpponents = (opponent) => {
		return(
			<div style={styles.opponentsContainer}>
				<h5 style={styles.opponentName}>{opponent.name}</h5>
				{
					opponent.isHome 
						? <h5>(H)</h5> 
						: <h5>(A)</h5> 
				}
			</div>
		)
	}

	renderTeam = (team) => {
		return(
			<div style={styles.teamContainer}>
				<h3 style={styles.teamName}>{team.name}</h3>
				{team.opponents.map(this.renderOpponents)}
			</div>
		)
	}



	render() {
		return(
			<div>{this.state.teams.map(this.renderTeam)}</div>
		)
	}
};

const styles = {
	teamContainer: {
		display: 'flex',
		// flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	teamName: {
		width: '100px'
	},
	opponentsContainer: {
		display: 'flex',
		// flex: 8,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'yellow',
		width: '80px',
		border: '1px solid black',
		margin: '5px'

	},
	opponentName: {
		marginRight: '5px'
	}
}




export default Schedule;
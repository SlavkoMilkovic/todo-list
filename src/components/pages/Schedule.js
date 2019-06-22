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
			},
			{
				name: 'EVE',
				rating: 3,
				opponents: [{
					name: 'CRY', 
					isHome: false 
				},{ 
					name: 'WAT', 
					isHome: true 
				},{
					name: 'AST', 
					isHome: false 
				},{
					name: 'WOL', 
					isHome: true 
				},{
					name: 'BOU', 
					isHome: false 
				}]
			},
			{
				name: 'LEI',
				rating: 3,
				opponents: [{
					name: 'WOL', 
					isHome: true 
				},{ 
					name: 'CHE', 
					isHome: false 
				},{
					name: 'SHE', 
					isHome: false 
				},{
					name: 'BOU', 
					isHome: true 
				},{
					name: 'MUN', 
					isHome: false 
				}]
			},
			{
				name: 'LIV',
				rating: 5,
				opponents: [{
					name: 'NOR', 
					isHome: true 
				},{ 
					name: 'SOU', 
					isHome: false 
				},{
					name: 'ARS', 
					isHome: true 
				},{
					name: 'BUR', 
					isHome: false 
				},{
					name: 'NEW', 
					isHome: false 
				}]
			},
			{
				name: 'MCY',
				rating: 5,
				opponents: [{
					name: 'WHU', 
					isHome: false 
				},{ 
					name: 'TOT', 
					isHome: true 
				},{
					name: 'BOU', 
					isHome: false 
				},{
					name: 'BRI', 
					isHome: true 
				},{
					name: 'NOR', 
					isHome: false 
				}]
			},
			{
				name: 'MUN',
				rating: 4,
				opponents: [{
					name: 'CHE', 
					isHome: true 
				},{ 
					name: 'WOL', 
					isHome: false 
				},{
					name: 'CRY', 
					isHome: true 
				},{
					name: 'SOU', 
					isHome: false 
				},{
					name: 'LEI', 
					isHome: true 
				}]
			},
			{
				name: 'NEW',
				rating: 3,
				opponents: [{
					name: 'ARS', 
					isHome: true 
				},{ 
					name: 'NOR', 
					isHome: false 
				},{
					name: 'TOT', 
					isHome: false 
				},{
					name: 'WAT', 
					isHome: true 
				},{
					name: 'LIV', 
					isHome: false 
				}]
			},
			{
				name: 'NOR',
				rating: 2,
				opponents: [{
					name: 'LIV', 
					isHome: false 
				},{ 
					name: 'NEW', 
					isHome: true 
				},{
					name: 'CHE', 
					isHome: true 
				},{
					name: 'WHU', 
					isHome: false 
				},{
					name: 'MCY', 
					isHome: true 
				}]
			},
			{
				name: 'SHE',
				rating: 2,
				opponents: [{
					name: 'BOU', 
					isHome: false 
				},{ 
					name: 'CRY', 
					isHome: true 
				},{
					name: 'LEI', 
					isHome: true 
				},{
					name: 'CHE', 
					isHome: false 
				},{
					name: 'SOU', 
					isHome: true 
				}]
			},
			{
				name: 'SOU',
				rating: 2,
				opponents: [{
					name: 'BUR', 
					isHome: false 
				},{ 
					name: 'LIV', 
					isHome: true 
				},{
					name: 'BRI', 
					isHome: false 
				},{
					name: 'MUN', 
					isHome: true 
				},{
					name: 'SHE', 
					isHome: false 
				}]
			},
			{
				name: 'TOT',
				rating: 4,
				opponents: [{
					name: 'AVI', 
					isHome: true 
				},{ 
					name: 'MCY', 
					isHome: false 
				},{
					name: 'NEW', 
					isHome: true 
				},{
					name: 'ARS', 
					isHome: false 
				},{
					name: 'CRY', 
					isHome: true 
				}]
			},
			{
				name: 'WAT',
				rating: 3,
				opponents: [{
					name: 'BRI', 
					isHome: true 
				},{ 
					name: 'EVE', 
					isHome: false 
				},{
					name: 'WHU', 
					isHome: true 
				},{
					name: 'NEW', 
					isHome: false 
				},{
					name: 'ARS', 
					isHome: true 
				}]
			},
			{
				name: 'WHU',
				rating: 3,
				opponents: [{
					name: 'MCY', 
					isHome: true 
				},{ 
					name: 'BRI', 
					isHome: false 
				},{
					name: 'WAT', 
					isHome: false 
				},{
					name: 'NOR', 
					isHome: true 
				},{
					name: 'AVI', 
					isHome: false 
				}]
			},
			{
				name: 'WOL',
				rating: 3,
				opponents: [{
					name: 'LEI', 
					isHome: false 
				},{ 
					name: 'MUN', 
					isHome: true 
				},{
					name: 'BUR', 
					isHome: true 
				},{
					name: 'EVE', 
					isHome: false 
				},{
					name: 'CHE', 
					isHome: true 
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
				<h2 style={styles.teamName}>{team.name}</h2>
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
		fontFamily: 'Quicksand',
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
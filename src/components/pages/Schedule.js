import React, { Component } from 'react';



class Schedule extends Component {

	state = {
		teams: [
			{
				name: 'ARS',
				rating: 5,
				opponents: [{
					name: 'WAT', 
					isHome: true 
				},{ 
					name: 'NEW', 
					isHome: false 
				},{
					name: 'MUN', 
					isHome: true 
				},{
					name: 'MUN', 
					isHome: true 
				},{
					name: 'MUN', 
					isHome: true 
				},{
					name: 'MUN', 
					isHome: true 
				}]
			},
			{
				name: 'MUN',
				rating: 5,
				opponents: [{
					name: 'WOL', 
					isHome: false 
				},{ 
					name: 'TOT', 
					isHome: true 
				},{
					name: 'ARS', 
					isHome: false 
				},{
					name: 'MUN', 
					isHome: true 
				},{
					name: 'MUN', 
					isHome: true 
				},{
					name: 'MUN', 
					isHome: true 
				}]
			},
						{
				name: 'ARS',
				rating: 5,
				opponents: [{
					name: 'WAT', 
					isHome: true 
				},{ 
					name: 'NEW', 
					isHome: false 
				},{
					name: 'MUN', 
					isHome: true 
				},{
					name: 'MUN', 
					isHome: true 
				},{
					name: 'MUN', 
					isHome: true 
				},{
					name: 'MUN', 
					isHome: true 
				}]
			},
			{
				name: 'MUN',
				rating: 5,
				opponents: [{
					name: 'WOL', 
					isHome: false 
				},{ 
					name: 'TOT', 
					isHome: true 
				},{
					name: 'ARS', 
					isHome: false 
				},{
					name: 'MUN', 
					isHome: true 
				},{
					name: 'MUN', 
					isHome: true 
				},{
					name: 'MUN', 
					isHome: true 
				}]
			},
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
				<h4 style={styles.teamName}>{team.name}</h4>
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
		borderWidth: '3px',
		borderColor: '#37003c',
		backgroundColor: 'red',
		width: '80px'

	},
	opponentName: {
		marginRight: '5px'
	}
}




export default Schedule;
import React, { Component } from 'react';
import { scheduleTeams } from '../../api/scehdule.js'

class Schedule extends Component {

	state = {
		teams: scheduleTeams
	};

	getOpponentRating = (opponent) => this.state.teams.find(team => team.name === opponent.name).rating

	getBackgroundColor = (opponent) =>
		this.getOpponentRating(opponent) === 2 && opponent.isHome
			? { backgroundColor: 'green' }
			: this.getOpponentRating(opponent) === 2 && !opponent.isHome
				? { backgroundColor: '#eaffec' }
				: this.getOpponentRating(opponent) === 3 && opponent.isHome
					? { backgroundColor: 'lightGreen' }
					: this.getOpponentRating(opponent) === 3 && !opponent.isHome
						? { backgroundColor: '#ffe8e8' }
						: this.getOpponentRating(opponent) === 4 && opponent.isHome
							? { backgroundColor: '#f28e8e' }
							: this.getOpponentRating(opponent) === 4 && !opponent.isHome
								? { backgroundColor: 'red' }
								: this.getOpponentRating(opponent) === 5
									? { backgroundColor: 'red' }
									: { backgroundColor: 'blue' }


	renderOpponents = (team, opponent) => {
		console.log(this.getOpponentRating(opponent))
		return (
			<div style={{ ...styles.opponentsContainer, ...this.getBackgroundColor(opponent) }}>
				<div style={styles.opponentName}>{opponent.name}</div>
				{
					opponent.isHome
						? <div style={styles.opponentName}>(H)</div>
						: <div style={styles.opponentName}>(A)</div>
				}
			</div>
		)
	}

	renderTeam = (team) => {
		return (
			<div style={styles.teamContainer}>
				<div style={styles.teamName}>{team.name}</div>
				{team.opponents.map((opponent) => this.renderOpponents(team, opponent))}
			</div>
		)
	}

	render() {
		return (
			<div>{this.state.teams.map(this.renderTeam)}</div>
		)
	}
};

const styles = {
	teamContainer: {
		display: 'flex',
		fontFamily: 'Quicksand',
		flexDirection: 'row',
	},
	teamName: {
		width: '100px',
		fontWeight: 'bold'
	},
	opponentsContainer: {
		display: 'flex',
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'yellow',
		width: '80px',
		border: '1px solid black',
		marginBottom: '20px'

	},
	opponentName: {
		marginRight: '5px',
		fontWeight: 'bold'
	}
}




export default Schedule;
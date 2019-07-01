import React, { Component } from 'react';



class Players extends Component {

	state = {
		players: [{
			name: 'Max Aarons',
			info: {
				position: 'RB',
				team: 'NOR',
				assists: 6,
				goals: 2
			}
		},
		{
			name: 'Slavko Milkovic',
			info: {
				position: 'RB',
				team: 'NOR',
				assists: 6,
				goals: 2
			}
		}]
	};

	renderPlayers = (player) => {
		return(
			<div style={styles.playerCard}>
				<div>{player.name}</div>
				<div>{player.info.position}</div>
				<div>{player.info.team}</div>
				<div>{player.info.assists}</div>
				<div>{player.info.goals}</div>
			</div>
		)
	}

	renderPlayer = () => {
		return(
			<div style={styles.container}>
				<div style={styles.playersContainer}>
					{this.state.players.map(player => this.renderPlayers(player))}
				</div>
			</div>
		)
	}



	render() {
		return(
			<div>
				{this.renderPlayer()}
			</div>
		)
	}
}


const styles = {
	container: {
		width: '100%',
		height: '100%',
	},
	playersContainer: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap'

	},
	playerCard: {
		display: 'flex',
		backgroundColor: 'red',
		width: 200,
		height: 300,
		margin: 20,
		borderRadius: 7,
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	itemsContainer: {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'column'
	}

}


export default Players;
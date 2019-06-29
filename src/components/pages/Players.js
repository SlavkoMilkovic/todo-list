import React, { Component } from 'react';



class Players extends Component {

	state = {
		players: [{
			name: 'Max Aarons',
			info:  [{position: 'RB',
					team: 'NOR',
					assists: 6,
					goals: 2}]
		},
		{
			name: 'Slavko Milkovic',
			info:  [{position: 'RB',
					 team: 'NOR',
					 assists: 6,
					 goals: 2}]
		}]
	};

	renderItems = (items) => {
		return(
			<div style={styles.itemsContainer}>
				{items.position}
				{items.team}
				{items.assists}
				{items.goals}
			</div>
		)
	}


	playerInfo = (player) => {
		return(
			<div>
				<div style={styles.playerContainer}>
					{player.name}
					{player.info.map(items => this.renderItems(items))}
				</div>
			</div>
		)
	}

	renderPlayer = () => {
		return(
			<div>
				{this.state.players.map(player => this.playerInfo(player))}
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
	playerContainer: {
		display: 'flex',
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: 'yellow',
		border: '1px solid black',
		marginBottom: '20px'
	},
	itemsContainer: {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center'
	}

}


export default Players;
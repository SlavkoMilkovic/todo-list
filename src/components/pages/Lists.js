import React, { Component } from 'react';




class Lists extends Component {

	state = {
		posts: [],
		comments: []
	}



	componentDidMount = () => {
		this.getPosts()
	}



	getPosts = () => {
		return fetch('https://my-json-server.typicode.com/typicode/demo/db')
				.then(res => res.json())
				// .then(data => console.log(data))
				.then(data => this.setState({
					posts: data.posts,
					comments: data.comments
				}))
				.catch(err => console.log(err))
			
	}

	renderPosts = post => {
		return (
			<h4 key={post.id} style={style.textStyle}>
				{post.title}
				{
					this.state.comments
					.filter(comment => post.id === comment.postId )
					.map(this.filterComments)
				}
			</h4>
		)
	}

	filterComments = comment => {
		return(
			<h6 key={comment.id}>
				{comment.body}
			</h6>
		)
	}




	render() {
		console.log(this.state.posts)
		console.log(this.state.comments)
		return(
			<div style={style.listStyle}>
				{
					this.state.posts.map(this.renderPosts)
				}
			</div>
		)
	}
};


const style = {
	listStyle: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	textStyle: {
		color: '#37003c',
		height: '100px'
	}
}




export default Lists;
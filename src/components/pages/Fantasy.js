import React, { Component } from 'react';
import HeaderFantasy from './HeaderFantasy.js';
import Lists from './Lists.js';




class Fantasy extends Component {

	render() {
		return(
			<div>
				<HeaderFantasy />
				<Lists />
			</div>
		)
	}

// class Fantasy extends Component {


// 	state = {
// 		posts: []
// 	}

// 	componentDidMount = () => {
// 		this.getPosts();
// 	}

// 	getPosts = () => {
// 		return (
// 			fetch('https://my-json-server.typicode.com/typicode/demo/posts')
// 				.then(res => res.json())
// 				.then(this.filterPosts)
// 				.then(data => this.savePosts(data))
// 				.catch(err => console.log(err))
// 		)
// 	}

// 	filterPosts = (data) => data.filter(item => item.id === 1)

// 	savePosts = (data) => {
// 		this.setState({ posts: data })
// 	}

// 	renderPosts = (item) => {
// 		return (
// 			<div key={item.id}>
// 				<h1>{item.title}</h1>
// 			</div>
// 		)
// 	}

// 	render() {
// 		return (
// 			<div>
// 				{
// 					this.state.posts.map(this.renderPosts)
// 				}	
// 			</div>
// 		)
// 	}
}




export default Fantasy; 
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/leyout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// import Fantasy from './components/pages/Fantasy';


class App extends Component  {
  
  state = {
    todos: [ ]
  } 

  componentDidMount = () => {
    return (
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(res => this.setState({ todos: res }))
    )
  }

  // Toogle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  } 

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: 4,
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]});
  }

    render() { 
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markComplete={this.markComplete} 
                delTodo={this.delTodo} />
            </React.Fragment>
          )} />
          <Route path="/about" render={props => (
            <React.Fragment>
              <About />
            </React.Fragment>
          )} />
        </div>    
      </div>
    </Router>
  );
 }

//  render() {
//   return (
//     <Fantasy />
//     );
//  }


}

export default App;

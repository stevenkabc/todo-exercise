// import React from 'react'
// export class Todo extends Component {
//   render() {
//      return (
//        <div>hello</div>
//      );
//    }
//  }

import React, { Component } from 'react';
export class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Todos: ([...props.Todos]),
      newTodo: {id: undefined, todo: "", completed: false}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleAddToDo (e) {
    addToDo(e)
  }

  handleChange (event) {
    const {value} = e.target
    this.setState({newTodo: value});
  }

  handleSubmit (event) {
    console.log("handleSubmit " + this.state.newTodo.toDo)

    if(this.state.newTodo.trim().length === 0){
      this.state.newTodo.todo=""
      this.setState({newTodo})
      return
    }
    this.addToDo()
  }

  handleKeyPress (event) {
    if (event.key === 'Enter') {
      console.log(`handleKeyPress ${event.target}`)
      this.handleSubmit(event)
    }
  }

  addToDo (e) {
    let toDo = {}
    toDo.id = (new Date).getTime() % 1E6;
    toDo.todo = this.state.newTodo;
    toDo.completed = false;
    this.setState({Todos: [...this.state.Todos, toDo], NewTodo: ''});
    console.log(`addToDo ${this.state}`)
    this.setState({value: ""})
  }

  toggleCompleted(index) {
    let toDos = [...Todos]
    toDos[index].completed = false
    setState({Todos: [...toDos]})
    }

  deleteToDO (index) {
    console.log(" delete to do " + this.state.Todos[index].id)

  }


  render () {
    const styles = {
      completed: {textDecoration: 'line-through'},
      active: {textDecoration: 'initial'}
    }

    return (
      <div>
          <input type="text"
            name="newTodo"
            placeholder="What's next?"
            value={this.state.value}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            onKeyPress={this.handleKeyPress}
          />
        <ul>
          {this.state.Todos.map((Todo,index) => (
            <li key={Todo.id}
              style={Todo.completed ? styles.completed : styles.active }>{`${Todo.todo}     `}
          <button onClick={() => this.handleCompleted(index)} >Completed</button>
          <button>Delete on</button>
          </li>
        ) )}
        </ul>
        <div>
          hello
        </div>
      </div>
    );
  }
}
const {array} = React.PropTypes;
Todo.propTypes = { Todos: array };

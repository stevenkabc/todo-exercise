import React, {Component} from 'react'
export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [...this.props.items],
      value: "",
      shift: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange (event) {
    const {value} = event.target
    this.setState({value});
  }
  handleKeyPress (event) {
    if (event.key === 'Enter') {
      console.log(`handleKeyPress ${event.target}`)
      this.handleSubmit(event)
    }
  }
  handleClick (e,index) {
    if(e.shiftKey) {
      this.deleteToDO(index)
    }
    else {
      this.toggleCompleted(index)
    }
  }

  handleSubmit () {
    console.log("handleSubmit " + this.state.value)
    if(this.state.value.trim().length === 0){
      this.setState({value: ""});
      return
    }
    this.addToDo()
  }

  handleAddToDo (e) {
    addToDo(e)
  }

  addToDo (e) {
    let toDo = {}
    toDo.id = (new Date).getTime();
    toDo.todo = this.state.value;
    toDo.completed = false;
    this.state.value = '';
    this.setState({items: [...this.state.items, toDo], value: ''});
    this.setState({value: ""})
  }

  toggleCompleted(index) {
    let toDos = [...this.state.items]
    toDos[index].completed = ! toDos[index].completed
    this.setState({items: [...toDos]})
    }

  deleteToDO (index) {
    const temp = this.state.items.slice(0,index)
    const temp2 = this.state.items.slice(index+1)
    const temp3 = [...this.state.items.slice(0,index), ...this.state.items.slice(index+1)]
    this.setState({items: [...this.state.items.slice(0,index), ...this.state.items.slice(index+1)]})
    console.log(" delete to do " + this.state.items[index].id)
  }


  render () {
    const styles = {
      completed: {listStyleType: 'none', textDecoration: 'line-through', },
      active: {listStyleType: 'none', textDecoration: 'initial'}
    }
    const name="steven"

    return (
      <div >
        <input type="text"
          name="newTodo"
          placeholder="What's next?"
          value={this.state.value}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          onKeyPress={this.handleKeyPress}
        />
        <ul>
          {
            this.state.items.map((item,index) => (
              <li key={item.id}
                style={item.completed ? styles.completed : styles.active}
                onClick={(e) => this.handleClick(e,index)}
              >{item.todo}
              </li>
          ) )}
        </ul>
      </div>
    );
  }
}
// import React, { Component } from 'react';
// export class Todo extends Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       Todos: ([...props.Todos]),
//       newTodo: {id: undefined, todo: "", completed: false}
//     }
//
//   }
//
//
//   render () {
//     const styles = {
//       completed: {textDecoration: 'line-through'},
//       active: {textDecoration: 'initial'}
//     }
//
//     return (
//       <div>
//           <input type="text"
//             name="newTodo"
//             placeholder="What's next?"
//             value={this.state.value}
//             onChange={this.handleChange}
//             onSubmit={this.handleSubmit}
//             onKeyPress={this.handleKeyPress}
//           />
//         <ul>
//           {this.state.Todos.map((Todo,index) => (
//             <li key={Todo.id}
//               style={Todo.completed ? styles.completed : styles.active }>{`${Todo.todo}     `}
//           <button onClick={() => this.handleCompleted(index)} >Completed</button>
//           <button>Delete on</button>
//           </li>
//         ) )}
//         </ul>
//         <div>
//           hello
//         </div>
//       </div>
//     );
//   }
// }
// const {array} = React.PropTypes;
// Todo.propTypes = { Todos: array };

import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

export default class TodoList extends React.Component {
    state = {
        todos: [],
        todosToShow: "All"
    }

    addTodo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos]
        });
    }

    handleToggle = (id) => {
        console.log('handle');
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    };
                } else {
                    return todo;
                }
            })
        })
    }

    handleType = (type) => {
       

        this.setState({
            todosToShow: type
        })
    }

    render() {
       let todos = [];
        if (this.state.todosToShow === "All") {
            todos = this.state.todos;
        } else if (this.state.todosToShow === "Active") {
            todos = this.state.todos.filter(todo => !todo.complete);
        } else if (this.state.todosToShow === "Complete") {
            todos = this.state.todos.filter(todo => todo.complete);
        }
        return (
            <div>
                <TodoForm onSubmit={this.addTodo} />
                {
                    todos.map(todo => (
                        <Todo toggleComplete={() => this.handleToggle(todo.id)} key={todo.id} todo={todo} />
                    ))}

                <div>
                    todos left: {this.state.todos.filter(todo => !todo.complete).length}
                    <div>
                        <button onClick={() => this.handleType("All")} > All</button>
                        <button onClick={() => this.handleType("Active")}> Active</button>
                        <button onClick={() => this.handleType("Complete")}> Complete</button>
                    </div>
                </div>

            </div>
        );
    }
}
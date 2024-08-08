import { Component } from "react"
import todoService from "../services/todo-service";

export default class TodoList extends Component { 

    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            currentTodo: null,
            currentIndex: -1
        }

        this.retreiveTodos = this.retreiveTodos.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    componentDidMount() {
        this.retreiveTodos();
    }

    retreiveTodos() {
        todoService.getAllTodos()
            .then(response => {
                this.setState({todos: response.data});
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        
    }

    deleteTodo = (id) => {
        todoService.deleteTodo(id)
        .then(response => {
            console.log(response.data);
        }).catch(error => {console.log(error);});
    }

    render() {
        return(
            <div>
                <div>
                    <table className="table table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>UserId</th>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Completed</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            {this.state.todos ? this.state.todos.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.userId}</td>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.completed}</td>
                                    <td>
                                        <button className="btn btn-warning">
                                            Edit Todo
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" 
                                        onClick={this.deleteTodo(item.id)}>Delete Todo</button>
                                    </td>
                                </tr>
                            )) : null}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
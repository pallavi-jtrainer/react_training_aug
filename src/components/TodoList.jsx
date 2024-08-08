import { Component } from "react"
import todoService from "../services/todo-service";
import withRouter from "../withRouter";
import { Link } from "react-router-dom";
import { createHashHistory } from 'history'


class TodoList extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            currentTodo: null,
            currentIndex: -1
        }

        this.history = createHashHistory();

        this.retreiveTodos = this.retreiveTodos.bind(this);
        // this.deleteTodo = this.deleteTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
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

    // deleteTodo = (id) => {
    //     // console.log('delete method')
    //     // todoService.deleteTodo(id)
    //     // .then(response => {
    //     //     console.log(response.data);
    //     // }).catch(error => {console.log(error);});
    // }

    updateTodo = (id) => {
        // this.props.history.push("/todos/" + id);
        this.history.push("/todos/" + id);
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
                                <th>View Details</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            {this.state.todos ? this.state.todos.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.userId}</td>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.completed + " "}</td>
                                    <td>
                                        <Link to={'/todos/' + item.id}>
                                            <button className="btn btn-warning"
                                            onClick={this.updateTodo(item.id)}>
                                                View Details
                                            </button>
                                        </Link>
                                    </td>
                                    {/* <td>
                                        <button className="btn btn-danger" 
                                        // onClick={this.deleteTodo(item.id)}>
                                        >Delete Todo</button>
                                    </td> */}
                                </tr>
                            )) : null}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default withRouter(TodoList);
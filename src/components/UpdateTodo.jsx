import { Component } from "react";
import withRouter from "../withRouter";
import { Link } from "react-router-dom";
import todoService from "../services/todo-service";

class UpdateTodo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: null,
            userId: null,
            title: "",
            completed: false,
            updated: false
        }
        this.getCurrentTodo = this.getCurrentTodo.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeCompleted = this.onChangeCompleted.bind(this);
        this.updateCurrentTodo = this.updateCurrentTodo.bind(this);
        this.deleteCurrentTodo = this.deleteCurrentTodo.bind(this);
    }

    componentDidMount() {
        this.getCurrentTodo();
    }

    getCurrentTodo() {
        const id = this.props.params.id;
        todoService.getTodo(id)
            .then((response) => {
                this.setState({
                    id: response.data.id,
                    userId: response.data.userId,
                    title: response.data.title,
                    completed: response.data.completed
                })
            }).catch((error) => {
                console.log(error);
            })
    }
    onChangeTitle = (e) => {
        this.setState({ title: e.target.value });
    }

    onChangeCompleted = (e) => {
        this.setState({ completed: e.target.value })
    }

    updateCurrentTodo() {
        var data = {
            id: this.state.id,
            userId: this.state.userId,
            title: this.state.title,
            completed: this.state.completed
        }

        todoService.updateTodo(this.state.id, data)
        .then((response) => {
            this.setState({
                id: response.data.id,
                userId: response.data.userId,
                title: response.data.title,
                completed: response.data.completed,

                updated: true
            });
            console.log(response.data);

        }).catch((error) => {
            console.log(error)
        })
    }

    deleteCurrentTodo() { 
        todoService.deleteTodo(this.state.id)
        .then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            // <div>
            //     <h3>Id: {this.props.params.id}</h3>
            // </div>

            <div>
                <div>
                    {
                        this.state.updated ? (
                            <div>
                                <h4>Todo Updated Successfully</h4>
                                <Link to={"/todos"}>
                                    <button className="btn btn-success">Todos List</button>
                                </Link>

                            </div>
                        ) : (
                            <div>
                                <div className="form-group">
                                    <label htmlFor="id">Id: </label>
                                    <input type="number" className="form-control"
                                        id="id" name="id"
                                        required
                                        value={this.state.id}
                                        onChange={this.onChangeId}
                                        disabled/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userId">User Id: </label>
                                    <input type="number" className="form-control"
                                        id="userId" name="userId"
                                        required
                                        value={this.state.userId}
                                        onChange={this.onChangeUserId} 
                                        disabled/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="title">Title: </label>
                                    <input type="text" className="form-control"
                                        id="title" name="title"
                                        required
                                        value={this.state.title}
                                        onChange={this.onChangeTitle} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="id">Completed: </label>
                                    <select className="form-select" value={this.state.completed}
                                        onChange={this.onChangeCompleted}>
                                        <option value="true">True</option>
                                        <option value="false">False</option>
                                    </select>
                                </div>
                                <div>
                                    <span>
                                        <button type="button"
                                            className="btn btn-warning"
                                            onClick={this.updateCurrentTodo}
                                        >Update Todo</button>
                                    </span>
                                    <span>
                                        <button type="button"
                                            className="btn btn-danger"
                                            onClick={this.deleteCurrentTodo}>
                                        Delete Todo</button>
                                    </span>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(UpdateTodo);
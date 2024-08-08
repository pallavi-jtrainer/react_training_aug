import { Component } from "react";
import todoService from "../services/todo-service";


export default class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null,
            title: "",
            userId: null,
            completed: false,
            submitted: false
        }

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeUserId = this.onChangeUserId.bind(this);
        this.onChangeId = this.onChangeId.bind(this);
        this.saveTodo = this.saveTodo.bind(this);
        this.newTodo = this.newTodo.bind(this);
    }

    onChangeTitle = (e) => {
        this.setState({title: e.target.value});
    }

    onChangeUserId = (e) => {
        this.setState({userId: e.target.value});
    }

    onChangeId = (e) => { 
        this.setState({id: e.target.value});
    }

    saveTodo() {
        var data = {
            id: this.state.id,
            userId: this.state.userId,
            title: this.state.title
        }

        todoService.createTodo(data)
        .then ((response) => {
            this.setState({
                id: response.data.id,
                userId: response.data.userId,
                title: response.data.title,
                completed: response.data.completed,

                submitted: true
            });
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    newTodo() {
        this.setState({
            id: null,
            title: "",
            userId: null,
            completed: false,
            submitted: false
        });
    }

    render() {
        return (
            <div>
                <div>
                    {
                        this.state.submitted ?  (
                            <div>
                                <h4>Todo Submitted Successfully</h4>
                                <button className="btn btn-success"
                                    onClick={this.newTodo}
                                >Add New Todo</button>
                            </div>
                        ):(
                            <div>
                                <div className="form-group">
                                    <label htmlFor="id">Id: </label>
                                    <input type="number" className="form-control" 
                                        id="id" name="id"
                                        required
                                        value={this.state.id}
                                        onChange={this.onChangeId} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userId">User Id: </label>
                                    <input type="number" className="form-control" 
                                        id="userId" name="userId"
                                        required
                                        value={this.state.userId}
                                        onChange={this.onChangeUserId}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="title">Title: </label>
                                    <input type="text" className="form-control" 
                                        id="title" name="title"
                                        required
                                        value={this.state.title}
                                        onChange={this.onChangeTitle}/>
                                </div>
                                {/* <div className="form-group">
                                    <label htmlFor="id">Completed: </label>
                                    <select className="form-select" value={this.state.completed}>
                                        <option value="true">True</option>
                                        <option value="false">False</option>
                                    </select>
                                </div> */}
                                <div>
                                    <button type="button" 
                                    className="btn btn-primary"
                                    onClick={this.saveTodo}
                                    >Submit</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
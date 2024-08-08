import { Component } from "react";


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
    }



    render() {
        return (
            <div>
                <div>
                    {
                        this.state.submitted ?  (
                            <div>
                                <h4>Todo Submitted Successfully</h4>
                                <button className="btn btn-success">Add New Todo</button>
                            </div>
                        ):(
                            <div>
                                <div className="form-group">
                                    <label htmlFor="id">Id: </label>
                                    <input type="number" className="form-control" 
                                        id="id" name="id"
                                        required
                                        value={this.state.id}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userId">User Id: </label>
                                    <input type="number" className="form-control" 
                                        id="userId" name="userId"
                                        required
                                        value={this.state.userId}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="title">Title: </label>
                                    <input type="text" className="form-control" 
                                        id="title" name="title"
                                        required
                                        value={this.state.title}/>
                                </div>
                                {/* <div className="form-group">
                                    <label htmlFor="id">Completed: </label>
                                    <select className="form-select" value={this.state.completed}>
                                        <option value="true">True</option>
                                        <option value="false">False</option>
                                    </select>
                                </div> */}
                                <div>
                                    <button type="button" className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
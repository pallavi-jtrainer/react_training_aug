import { Component } from "react";


export default class AddTodo extends Component {

    render() {
        return (
            <div>

                <div>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            required
                            name="title"
                        />
                    </div>

                    <button className="btn btn-success">
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}
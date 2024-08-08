import httpCommon from "../http-common";

class TodoService {

    //retrieve all the todos
    getAllTodos = () => {
        return httpCommon.get(`/todos`);
    }

    getTodo = (id) => {
        return httpCommon.get(`/todos/${id}`);
    }

    createTodo = (data) => {
        return httpCommon.post(`/todos`, data);
    }

    updateTodo = (id, data) => { 
        return httpCommon.put(`/todos/${id}`,data);
    }

    deleteTodo = (id) => { 
        return httpCommon.delete(`/todos/${id}`);
    }

}

var todoService = new TodoService();
export default todoService;

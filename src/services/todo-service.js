import httpCommon from "../http-common";

class TodoService {

    //retrieve all the todos
    getAllTodos = () => {
        return httpCommon.get(`/todos`);
    }

    getTodo = (id) => {
        return httpCommon.get(`/todos/${id}`);
    }
}

var todoService = new TodoService();
export default todoService;

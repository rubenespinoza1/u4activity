import axios from 'axios';
const baseURL = 'http://localhost:3000/api/tasks'

class TaskApi {
    constructor() {
        this.resource = axios.create({
            baseURL,
        });
    }

    getAllTasks() {
        return this.resource.get('/');
    }

    getTaskById(task) {
        return this.resource.get('/task/' + task.id);
    }

    createTask(task){
        return this.resource.post('/', task);
    }

    updateTask(task){
        return this.resource.put('/task/' + task.id, task);
    }

    deleteTask(task){
        return this.resource.delete('/task/' + task.id);
    }




}

export default TaskApi();
const User = require('../models/User');
const Task = require('../models/Task');

const State = require('../helpers/state');

const taskApi = require('../api/task.api')


function guardarTarea(owner, description, state){
    const task = new Task({
        owner: owner,
        description: description,
        state: state,
        requester: owner,
    });

    taskApi.createTask(task);
}

function obtenerTareasUsuario(owner){
    const task = taskApi.getTaskById(owner.id);
    task.requester = task.owner;
    return task;
}

function editarTarea(task){
    const task = taskApi.updateTask(task);
    task.requester = task.owner;
    return task;
}

function cambiarEstadoDeUnaTarea(task){
    const obtainedTask = taskApi.getTaskById(task.id);
    if (obtainedTask.state === State.INACTIVA){
        obtainedTask.state = State.ACTIVA;
    }else{
        obtainedTask.state = State.INACTIVA;
    }
    obtainedTask.requester = obtainedTask.owner;
    taskApi.updateTask(obtainedTask);
}

function eliminarTarea(task){
    task.requester = task.owner;
    taskApi.deleteTask(task);
}

function verTodasLasTareasDeSistema(){
    return taskApi.getAllTasks();
}





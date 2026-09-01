import TaskRepository from "../repositories/TaskRepository";
import AppError from "../utils/AppError";

const findAll = async() => {
    return TaskRepository.findAll();
};

const findById = async (id) => {
    
    const task = await TaskRepository.findById(id);
    
    if(!task){
        throw new AppError('Task not found', 404);
    }

    return task;
};

const create = async (dados) => {

    return TaskRepository.create({
        description: dados.description,
        status: dados.status,
        title: dados.title
    });
};

const update = async (id, dados) => {
    const task = await TaskRepository.findById(id);

    if(!task){
        throw new AppError('Task not found', 404);
    }

    const dadosAtualizacao = {
        title: dados.title,
        description: dados.description,
        status: dados.status
    };

    return TaskRepository.update(id, dadosAtualizacao);
};

const deleteTask = async (id) => {

    const task = await TaskRepository.findById(id);

    if(!task){
        throw new AppError('Task not found', 404);
    }

    await TaskRepository.deleteTask(id);
};

export default{
    findAll,
    findById,
    create,
    update,
    deleteTask
};

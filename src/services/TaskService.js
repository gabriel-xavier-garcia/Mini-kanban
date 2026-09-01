import TaskRepository from '../repositories/TaskRepository.js';
import AppError from '../utils/AppError.js';

const findAll = async () => {
    return taskRepository.findAll();
};

const findById = async (id) => {

    const task = await taskRepository.findById(id);

    if (!task) {
        throw new AppError('Task não encontrada', 404);
    }

    return task;
};

const create = async (dados) => {

    return taskRepository.create({
        description: dados.description,
        status: dados.status,
        title: dados.title
    });
};

const update = async (id, dados) => {

    const task = await taskRepository.findById(id);

    if (!task) {
        throw new AppError('Task não encontrada', 404);
    }

    const dadosAtualizacao = {};

    dadosAtualizacao.title = dados.title;

    dadosAtualizacao.description = dados.description;

    dadosAtualizacao.status = dados.status;

    return taskRepository.update(id, dadosAtualizacao);
};

const deleteTask = async (id) => {

    const task = await taskRepository.findById(id);

    if (!task) {
        throw new AppError('Task não encontrada', 404);
    }

    await taskRepository.deleteTask(id);
};


export default {
    findAll,
    findById,
    create,
    update,
    deleteTask
};
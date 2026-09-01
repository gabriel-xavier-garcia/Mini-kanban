import TaskService from "../services/TaskService";

const findAll = async (req, res) => {
    const tasks = await TaskService.findAll();

    res.json(tasks);
};

const findById = async (req, res) => {
    const task = await TaskService.findById(req.params.id);

    res.json(task);
};

const create = async (req, res) => {
    const task = await TaskService.create(req.body);

    res.status(201).json(task);
};

const update = async (req, res) => {
    const task = await TaskService.update(
        req.params.id,
        req.body
    );

    res.status(200).json(task);
};

const deleteTask = async (req, res) => {
    await TaskService.deleteTask(req.params.id);

    res.status(204).send();
};

export default {
    findAll,
    findById,
    create,
    update,
    deleteTask
};

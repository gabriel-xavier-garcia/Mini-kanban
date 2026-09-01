import prisma from '../config/prisma.js';

const findAll = async () => {
    return prisma.task.findMany();
};

const findById = async (id) => {
    return prisma.task.findUnique({
        where: {
            id: Number(id)
        }
    });
};

const create = async (dados) => {
    return prisma.task.create({
        data: dados
    });
};

const update = async (id, dados) => {
    return prisma.task.update({
        where: {
            id: Number(id)
        },
        data: dados
    });
};

const deleteTask = async (id) => {
    return prisma.task.delete({
        where: {
            id: Number(id)
        }
    });
};


export default {
    findAll,
    findById,
    create,
    update,
    deleteTask
};
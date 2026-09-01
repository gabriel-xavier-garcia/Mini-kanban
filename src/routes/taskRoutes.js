import express from 'express';
import taskController from '../controllers/taskController.js';

import validate from '../middlewares/validateMiddleware.js';
import asyncHandler from '../middlewares/asyncHandler.js';

import {
    criarTaskSchema,
    idParamSchema
} from '../schemas/taskSchema.js';

const router = express.Router();

router.get('/', asyncHandler(taskController.findAll));

router.get('/:id', validate(idParamSchema, 'params'), asyncHandler(taskController.findById));

router.post('/', validate(criarTaskSchema, 'body'), asyncHandler(taskController.create));

router.put('/:id', validate(idParamSchema, 'params'),validate(criarTaskSchema, 'body'), asyncHandler(taskController.update));

router.delete('/:id', validate(idParamSchema, 'params'), asyncHandler(taskController.deleteTask));

export default router;
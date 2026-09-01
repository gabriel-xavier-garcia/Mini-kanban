import { z } from 'zod';

import { TaskStatus } from '../generated/prisma/client.ts';

const taskStatusSchema = z.enum(TaskStatus);

export const criarTaskSchema = z.object({
    title: z
        .string()
        .min(1, 'O título é obrigatório')
        .max(100, 'O título deve ter no máximo 100 caracteres'),

    description: z
        .string()
        .max(500, 'A descrição deve ter no máximo 500 caracteres')
        .optional(),

    status: taskStatusSchema
});

export const idParamSchema = z.object({
    id: z.coerce.number().int().positive()
});
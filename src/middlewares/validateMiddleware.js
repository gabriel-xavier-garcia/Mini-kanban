import { ZodError } from 'zod';

const validate = (schema, property = 'body') => {
    return (req, res, next) => {

        try {
            req[property] = schema.parse(req[property]);

            next();

        } catch (error) {

            if (error instanceof ZodError) {
                return res.status(400).json({
                    status: 400,
                    message: 'Erro de validação',
                    errors: error.issues.map(issue => ({
                        field: issue.path.join('.'),
                        message: issue.message
                    }))
                });
            }

            next(error);
        }
    };
};

export default validate;
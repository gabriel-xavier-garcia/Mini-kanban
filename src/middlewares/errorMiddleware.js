const errorMiddleware = (err, req, res, next) => {
    console.error(err);

    const statusCode = err.statusCode || 500;

    const message = err.isOperational
    ? err.message
    : 'internal server error';

    res.status(statusCode).json({
        status: statusCode,
        message
    });
};

export default errorMiddleware;
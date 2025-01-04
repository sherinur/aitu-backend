export function errorHandler(err, req, res, next) {
    console.log('Error:', err.message);

    res.status(400).json({
        error: true,
        message: err.message
    });
}
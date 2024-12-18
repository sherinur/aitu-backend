import express, { Router } from 'express';
import { CalculateRouter } from './src/calculate/calculate.controller.js';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import { errorHandler } from './src/calculate/error-handler.js';

const app = express();
const PORT = 4200;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
    app.use(express.json());
    app.use(express.static(path.join(__dirname, 'public')));

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // logging with middleware
    const logRequest = (req, res, next) => {
        console.log(`Received a ${req.method} request from ${req.ip}`);
        next();
    };
    app.use(logRequest);

    // error handler with middleware
    app.use(errorHandler);

    // root endpoint
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'views', 'index.html'));
    });

    // other routes
    app.use('/calculate', CalculateRouter)
      
    app.all('*', (req, res) => {
        res.status(404).json({ message: 'Not Found' });
    });

    app.listen(PORT, () => {
        console.log('Server is running on port 4200');
    });
}

main()
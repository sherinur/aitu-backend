import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import 'dotenv/config';

import { errorHandler } from './src/search/error-handler.js';
import { SearchRouter } from './src/search/search.controller.js';

const app = express();
const PORT = process.env.PORT || 4200;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


async function main() {
    app.use(express.json());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // logging middleware
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
    app.use('/search', SearchRouter)
      
    app.all('*', (req, res) => {
        res.status(404).json({ message: 'Not Found' });
    });

    app.listen(PORT, () => {
        console.log('Server is running on port 4200');
    });
}

main()
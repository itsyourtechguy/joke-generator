import express from 'express';
import jokeRoutes from './routes/jokeRoutes.js';

const app = express();

// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', jokeRoutes);

export default app;

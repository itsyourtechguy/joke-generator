import express from 'express';
import { getJoke } from '../services/jokeService.js';

const router = express.Router();

// Home Page
router.get('/', (req, res) => {
    res.render('index');
});

// Fetch a joke
router.post('/joke', async (req, res) => {
    const name = req.body.name || 'Friend';

    try {
        const jokeText = await getJoke();
        res.render('joke', { name, jokeText });
    } catch (error) {
        res.render('joke', { name, jokeText: "Sorry, couldn't fetch a joke right now!" });
    }
});

export default router;

import { Router } from 'express';
import { SearchService } from './search.service.js';

const router = Router();

const searchService = new SearchService();

router.get('/artists', async (req, res, next) => {
    try {
        await searchService.authenticate();

        const { query } = req.query;
        if (!query) {
            return res.status(400).json({ error: 'Query parameter is required' });
        }

        const data = await searchService.searchArtists(query);

        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
});

router.get('/tracks', async (req, res, next) => {
    try {
        await searchService.authenticate();

        const { query } = req.query;
        if (!query) {
            return res.status(400).json({ error: 'Query parameter is required' });
        }

        const data = await searchService.searchTracks(query);

        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
});

export const SearchRouter = router;
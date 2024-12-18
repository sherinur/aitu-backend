import { Router } from 'express';
import { CalculateService } from './calculate.service.js';

const router = Router();

const calculateService = new CalculateService();

router.post('/', (req, res) => {
    try {
        const { height, weight } = req.body;

        const BMI = calculateService.calculateBMI(height, weight);
        const CATEGORY = calculateService.categorizeBMI(BMI)

    } catch(error) {

    }
   
    res.status(200).json(BMI);
});

export const CalculateRouter = router;
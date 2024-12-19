import { Router } from 'express';
import { CalculateService } from './calculate.service.js';

const router = Router();

const calculateService = new CalculateService();

router.post('/', (req, res) => {
    try {
        const { height, weight } = req.body;

        const BMI = calculateService.calculateBMI(height, weight);
        const CATEGORY = calculateService.categorizeBMI(BMI)
        const COMMENT = calculateService.commentCategory(CATEGORY)

        res.status(200).json({
          bmi: BMI,
          category: CATEGORY,
          comment: COMMENT
        });
    } catch(error) {
        next(error);
    }
});

export const CalculateRouter = router;
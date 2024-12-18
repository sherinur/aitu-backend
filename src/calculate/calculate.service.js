export class CalculateService {
    calculateBMI(height, weight) {
        if (!height || !weight) {
            throw new Error('Height and weight must be provided');
        }

        if (height < 0 || height > 300) {
            throw new Error('Height must be realistic numbers');
        }

        if (weight < 2 || weight > 500) {
            throw new Error('Weight must be realistic numbers');
        }

        return weight / (height ** 2)
    }

    categorizeBMI(bmi) {
        if (!bmi) {
            return
        }

        if (bmi < 18.5) {
            return 'Underweight'
        } else if (bmi > 18.5 && bmi < 24.9) {
            return 'Normal weight'
        } else if (bmi > 25 && bmi < 29.9) {
            return 'Overweight'
        } else {
            return 'Obesity'
        }
    }
}
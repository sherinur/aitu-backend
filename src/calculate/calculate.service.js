export class CalculateService {
    calculateBMI(height, weight) {
        if (!height || !weight) {
           return 'Height and weight must be provided';
        }

        if (height < 0 || height > 3) {
            return 'Height must be realistic numbers';
        }

        if (weight < 2 || weight > 500) {
            return 'Weight must be realistic numbers';
        }

        return weight / (height ** 2)
    }

    categorizeBMI(bmi) {
        if (bmi < 18.5) {
            return 'Underweight'
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            return 'Normal weight'
        } else if (bmi >= 25 && bmi <= 29.9) {
            return 'Overweight'
        } else {
            return 'Obesity'
        }
    }

    commentCategory(category) {
        switch (category) {
            case 'Underweight':
                return 'You are underweight. Try to eat more healthy food and talk to a doctor or nutritionist.';
    
            case 'Normal weight':
                return 'Your weight is normal. Keep up the good work with healthy eating and staying active!';
    
            case 'Overweight':
                return 'You are overweight. Try to eat healthier and be more active. Talking to a doctor can also help.';
    
            case 'Obesity':
                return 'You have obesity. It is important to eat healthy, be active, and talk to a doctor for support.';
    
            default:
                return 'Invalid category.';
        }
    }
}
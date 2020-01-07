import { IPerson } from './person';
import { Infant } from './infant';
import { Child } from './child';
import { Adult } from './adult';

export class Factory {
    getPerson(dateOfBirth: Date): IPerson {
        let dateNow = new Date();
        let currentMonth = dateNow.getMonth() + 1;
        let currentDate = dateNow.getDate();
        let currentYear = dateNow.getFullYear();

        let dateTwoYearsAgo = new Date(currentYear - 2, currentMonth, currentDate);
        let dateEighteenYearsAgo = new Date(currentYear - 18, currentMonth, currentDate);

        if (dateOfBirth >= dateTwoYearsAgo) {
            return new Infant(dateOfBirth);
        }

        if (dateOfBirth >= dateEighteenYearsAgo) {
            return new Child(dateOfBirth);
        }

        return new Adult(dateOfBirth);
    }
}

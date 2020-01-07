import { IPerson } from './person';
import { Infant } from './infant';
import { Child } from './child';
import { Adult } from './adult';

export class Factory {
    getPerson(dateOfBirth: Date): IPerson {
        const dateNow = new Date();
        const currentMonth = dateNow.getMonth() + 1;
        const currentDate = dateNow.getDate();
        const currentYear = dateNow.getFullYear();

        const dateTwoYearsAgo = new Date(currentYear - 2, currentMonth, currentDate);
        const dateEighteenYearsAgo = new Date(currentYear - 18, currentMonth, currentDate);

        if (dateOfBirth >= dateTwoYearsAgo) {
            return new Infant(dateOfBirth);
        }

        if (dateOfBirth >= dateEighteenYearsAgo) {
            return new Child(dateOfBirth);
        }

        return new Adult(dateOfBirth);
    }
}

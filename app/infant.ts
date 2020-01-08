import { Person, PersonCategory } from './person';

export class Infant extends Person {
    constructor(dateOfBirth: Date) {
        super(dateOfBirth);
        this.Category = PersonCategory.Infant;
    }

    canSignContract(): boolean {
        return false;
    }
}

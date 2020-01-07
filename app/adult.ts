import { Person, PersonCategory } from './person';

export class Adult extends Person {
    constructor(dateOfBirth: Date) {
        super(dateOfBirth);
        this.Category = PersonCategory.Adult;
    }

    canSignContract(): boolean {
        return true;
    }
}

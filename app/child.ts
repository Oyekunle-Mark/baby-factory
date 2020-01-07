import { Person, PersonCategory } from './person';

export class Child extends Person {
    constructor(dateOfBirth: Date) {
        super(dateOfBirth);
        this.Category = PersonCategory.Child;
    }

    canSignContract(): boolean {
        return false;
    }
}

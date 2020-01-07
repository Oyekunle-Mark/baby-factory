export enum PersonCategory {
    Infant,
    Child,
    Adult
}

export interface IPerson {
    Category: PersonCategory;
    canSignContract(): boolean;
    printDetails(): void;
}

export abstract class Person implements IPerson {
    Category: PersonCategory;
    private DateOfBirth: Date;

    constructor(dateOfBirth: Date) {
        this.DateOfBirth = dateOfBirth;
    }
    
    abstract canSignContract(): boolean

    printDetails() {
        console.log('Person: ');
        console.log(`Date of Birth: ${this.DateOfBirth.toDateString()}`);
        console.log(`Category: ${PersonCategory[this.Category]}`);
        console.log(`Can sign: ${this.canSignContract()}`);
        console.log();
    }
}
